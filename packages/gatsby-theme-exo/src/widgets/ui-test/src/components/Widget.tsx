import React, { useEffect, useState } from 'react';
import IframeResizer from "iframe-resizer-react";
import { WidgetContainerEvents, WidgetEvents, WidgetPullEvents, WidgetPullEventType, WidgetPushEventType, WidgetType } from '../hooks/widgetApi';

const DEFAULT = {
    title: 'Default Title',
    footer: 'Default Footer',
    height: 385
};

interface WidgetProps {
    event: WidgetPushEventType | undefined;
    loadUrl?: string | undefined;
    sendPostMessage: (m: WidgetPullEventType) => void;
}

const Widget = ({ event, loadUrl, sendPostMessage }: WidgetProps) => {
    const [title, setTitle] = useState<string|null>(null);
    const [footer, setFooter] = useState<string>();
    const [fullscreen, setFullScreen] = useState<boolean>(false);
    const [showFooter, setShowFooter] = useState<boolean>(false);
    const [isTimeline, setIsTimeline] = useState<boolean>(false);

    // Incomming events
    useEffect(() => {
        if (event) {
            const value = event.value ?? '';
            switch (event.type) {
                case WidgetEvents.WidgetPushEvents.setHeader:
                    setTitle(value);
                    break;
                case WidgetEvents.WidgetPushEvents.setFooter:
                    setFooter(value);
                    setShowFooter(true);
                    break;
                case WidgetEvents.WidgetPushEvents.maximizeWidget:
                    setFullScreen(true);
                    setShowFooter(false);
                    break;
                case WidgetEvents.WidgetPushEvents.minimizeWidget:
                    setFullScreen(false);
                    setShowFooter(true);
                    break;
                case WidgetEvents.WidgetPushEvents.widgetReady:
                    if (value.type === WidgetType.Default) {
                        setFullScreen(false);
                        setTitle(value.header);
                        setFooter(value.footer);
                        if (value.footer && value.footer !== "") {
                            setShowFooter(true);
                        }
                    }
                    if (value.type === WidgetType.Action || value.type === WidgetType.Timeline) {
                        setFullScreen(true);
                        setTitle(null);
                        setFooter(undefined);
                        setShowFooter(false);
                        setIsTimeline((value.type === WidgetType.Timeline));
                    }
                    break;
                default:
                    break;
            }
        }
    }, [event, setIsTimeline]);

    // Reset widget when url changes
    useEffect(() => {
        if (!loadUrl) {
            setTitle(null);
            setFooter(DEFAULT.footer);
            setFullScreen(false);
            setShowFooter(false);
        }
    }, [loadUrl]);

    // Handle dynamic resizing when in fullscreen mode
    useEffect(() => {
        if (fullscreen) {
            const parentHeight = document.getElementById('iframeContainer')?.offsetHeight;
            if (parentHeight && sendPostMessage) {
                sendPostMessage({
                    type: WidgetPullEvents.setMaxHeight,
                    value: parentHeight
                });
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fullscreen]);

    // Toggle the height of the widget when footer is clicked
    const toggleHeight = () => {
        const isExpanded = !fullscreen;
        setFullScreen(isExpanded);
        setShowFooter(!isExpanded);
        if (isExpanded) {
            sendPostMessage(WidgetContainerEvents.maximizeWidget());
        }
        if (!isExpanded) {
            sendPostMessage(WidgetContainerEvents.minimizeWidget());
        }
    }

    if (!loadUrl) {
        return null;
    }

    return (
        <div className={`flex flex-col shadow-sm bg-white box-border overflow-hidden ${!isTimeline ? 'rounded-lg' : ''}`} style={{ width: 380, height: fullscreen ? '100%' : 'auto' }}>
            {title && 
                <div className="px-2 py-2 border-b border-b-gray-100">
                    {fullscreen && <span className="absolute text-blue-500 mr-2 cursor-pointer" onClick={toggleHeight}>&lt; Back</span>}
                    <span className="font-medium text-black truncate w-full block text-center">{title}</span>
                </div>
            }
            <div id="iframeContainer" className="block border-box flex-1" style={{ transition: 'height 0.15s ease-out', maxHeight: fullscreen ? '100%' : DEFAULT.height }}>
                <IframeResizer
                    name="widget"
                    title="Widget"
                    id="widget"
                    frameBorder="0"
                    seamless
                    src={loadUrl}
                    checkOrigin={false}
                    className="flex-1 w-full"
                    onMessage={() => {}}
                    style={{ maxHeight: fullscreen ? window.innerHeight - (title ? 73 : 0) : DEFAULT.height }}
                />
            </div>
            {showFooter &&
                <div className="px-2 py-2 flex items-center justify-center border-t border-t-gray-100">
                    <span className="font-medium text-blue-700 text-center truncate w-full cursor-pointer" onClick={toggleHeight}>{footer}</span>
                </div>
            }
        </div>
    );
}

export default Widget;