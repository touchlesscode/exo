import React from "react";
import { useTheme } from "styled-components";
import IframeResizer from "iframe-resizer-react";
import ArrowRightIcon from "../../icons/ArrowRight";
import { WidgetWrapper } from "./index.styled";
import { usePostEvent, WidgetContainerEvents, WidgetEvents, WidgetType } from '../../hooks/widgetApi';
import { LogContext, TLogContextState } from "../../providers/LogProvider";
import { TWidgetContextState, TWidgetSize, TWidgetState, TWidgetUrl, WidgetContext } from "../../providers/WidgetProvider";

interface WidgetProps {
    widget: TWidgetUrl;
    state: TWidgetState;
    visible?: boolean;
}

const Widget = ({ widget, state, visible = false }: WidgetProps) => {
    const theme = useTheme();
    const postEvent = usePostEvent(widget.id);
    const { logSentEvent } = React.useContext<TLogContextState>(LogContext);
    const { event, changeProperty } = React.useContext<TWidgetContextState>(WidgetContext);
    const fullscreen = state.size === TWidgetSize.Full || state.size === TWidgetSize.Opened;
    const partialfull = state.type === WidgetType.Action || state.type === WidgetType.Add;

    React.useEffect(() => {
        if (event && event.name === widget.id) {
            // console.log('event for:', widget.id, event);
            const value = event.value ?? '';
            switch (event.type) {
                case WidgetEvents.WidgetPushEvents.setHeader:
                    changeProperty(widget.id, 'header', value);
                    break;
                case WidgetEvents.WidgetPushEvents.setFooter:
                    changeProperty(widget.id, 'footer', value);
                    break;
                case WidgetEvents.WidgetPushEvents.maximizeWidget:
                    changeProperty(widget.id, 'size', TWidgetSize.Full);
                    break;
                case WidgetEvents.WidgetPushEvents.minimizeWidget:
                    changeProperty(widget.id, 'size', TWidgetSize.Compact);
                    break;
                case WidgetEvents.WidgetPushEvents.widgetReady:
                    if (value.type === WidgetType.Default) {
                        changeProperty(widget.id, 'header', value.header);
                        changeProperty(widget.id, 'footer', value.footer);
                    }
                    if (value.type === WidgetType.Action) {
                        changeProperty(widget.id, 'label', value.label);
                    }
                    break;
                default:
                    break;
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [event, widget]);

    const handleShowMore = () => {
        const evt = WidgetContainerEvents.maximizeWidget();
        
        postEvent(evt);

        const maxHeight = WidgetEvents.setMaxHeight(window.innerHeight - 59);
        postEvent(maxHeight);
        logSentEvent([evt, maxHeight]);

        changeProperty(widget.id, 'size', TWidgetSize.Full)
    }

    const handleBackButton = () => {
        const evt = WidgetContainerEvents.minimizeWidget();

        postEvent(evt);
        logSentEvent([evt]);

        changeProperty(widget.id, 'size', TWidgetSize.Compact)
    }

    return (
        <WidgetWrapper
            visible={visible}
            collapsed={state.size === TWidgetSize.Collapsed}
            timeline={state.type === WidgetType.Timeline}
            timelineHeight={window.innerHeight - 48 - 235}
            fullscreen={fullscreen}
            partialfull={partialfull}
        >
            {state.header.length > 0 && !fullscreen && 
                <div className='header'>
                    <span>{state.header}</span>
                    <button className='header-icon' onClick={() => {
                        changeProperty(widget.id, 'size', state.size === TWidgetSize.Collapsed ? TWidgetSize.Compact : TWidgetSize.Collapsed)
                    }}>
                        <ArrowRightIcon size={14} color={theme.colors.text.l3} />
                    </button>
                </div>
            }
            {state.header.length > 0 && fullscreen &&
            <div className='headerFullscreen'>
                <button onClick={handleBackButton}>
                    <ArrowRightIcon size={16} color={theme.colors.primary.default} />
                    Back
                </button>
                <span>{state.header}</span>
            </div>
            }
            <div className='content'>
                <IframeResizer
                    name={widget.id}
                    title={widget.id}
                    id={widget.id}
                    frameBorder="0"
                    seamless
                    src={widget.url}
                    checkOrigin={false}
                    onMessage={() => {}}
                />
            </div>
            {state.footer.length > 0 && !fullscreen &&
                <div className='footer' onClick={handleShowMore}>
                    {state.footer}
                </div>
            }
        </WidgetWrapper>
    );
}

export default Widget;