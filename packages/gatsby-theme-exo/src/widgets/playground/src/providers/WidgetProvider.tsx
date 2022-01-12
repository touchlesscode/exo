import React from "react";
import config from "../utils/config";
import { useOnEvent, WidgetEvents, WidgetPullEventType, WidgetPushEvents, WidgetPushEventType, WidgetType } from "../hooks/widgetApi";
import { LogContext, TLogContextState } from "./LogProvider";

export enum TWidgetSize {
    Full = "Full",
    Compact = "Compact",
    Collapsed = "Collapsed",
    Opened = "Open",
    Closed = "Closed",
}

export interface TWidgetState {
    name: string;
    isReady: boolean;
    type: WidgetType | string;
    size: TWidgetSize;
    header: string;
    footer: string;
    label: string;
}

type TWidgetRootState = {
    [key: string]: TWidgetState;
}

export interface TWidgetUrl {
    id: string;
    name: string;
    url: string;
    type: WidgetType | string;
    label?: string;
    order?: string;
    active: boolean;
}

export interface TWidgetContextState {
    addWidget: (widget: TWidgetUrl) => void;
    changeWidgetState: (widget: TWidgetUrl, enabled: boolean) => void;
    removeWidget: (widget: TWidgetUrl) => void;
    registerWidget: (widget: TWidgetUrl) => void;
    unregisterWidget: (id: string) => void;
    changeProperty: (id: string, key: string, value: string) => void;
    widgetReady: (id: string) => void;
    closeAll: () => void;
    uploadWidgets: (widgets: TWidgetUrl[]) => void;
    allWidgets: TWidgetUrl[];
    defaultWidgets: TWidgetUrl[];
    timelineWidget: TWidgetUrl | undefined | null;
    actionWidgets: TWidgetUrl[];
    plusWidget: TWidgetUrl | undefined | null;
    postEvent: (obj: WidgetPullEventType) => void;
    event?: WidgetPushEventType;
    state: TWidgetRootState;
    initialized: boolean;
}

type TWidgetActions = 
    { type: 'REGISTER_WIDGET', payload: TWidgetUrl } | 
    { type: 'UNREGISTER_WIDGET', payload: string } | 
    { type: 'WIDGET_READY', payload: string } | 
    { type: 'CHANGE_SIZE' } | 
    { type: 'CHANGE_PROPERTY', id: string, key: string, value: string } | 
    { type: 'CLOSE_ALL' };

function reducer(prevState: TWidgetRootState, action: TWidgetActions): TWidgetRootState {
    switch(action.type) {
        case 'REGISTER_WIDGET':
            const size = (action.payload.type === (WidgetType.Default || WidgetType.Timeline)) ?
                TWidgetSize.Compact : TWidgetSize.Closed;

            return {
                ...prevState,
                [action.payload.id]: {
                    name: action.payload.id,
                    isReady: false,
                    type: action.payload.type,
                    size,
                    header: "",
                    footer: "",
                    label: "",
                }
            };
        case 'UNREGISTER_WIDGET':
            delete prevState[action.payload];
            return { ...prevState };
        case 'CHANGE_PROPERTY':
            return {
                ...prevState,
                [action.id]: {
                    ...prevState[action.id],
                    [action.key]: action.value,
                }
            };
        case 'CHANGE_SIZE':
            return prevState;
        case 'WIDGET_READY':
            return {
                ...prevState,
                [action.payload]: {
                    ...prevState[action.payload],
                    isReady: true,
                }
            };
        case 'CLOSE_ALL':
            const all = { ...prevState };
            Object.keys(all).forEach(id => {
                if (all[id].type === WidgetType.Action || all[id].type === WidgetType.Default) {
                    all[id].size = (all[id].type === WidgetType.Action) ? TWidgetSize.Closed : TWidgetSize.Compact;
                }
            });
            return all;
        default:
            return prevState;
    }
}

export const WidgetContext = React.createContext<TWidgetContextState>({
    addWidget: () => {},
    changeWidgetState: () => {},
    removeWidget: () => {},
    registerWidget: () => {},
    unregisterWidget: () => {},
    changeProperty: () => {},
    widgetReady: () => {},
    closeAll: () => {},
    uploadWidgets: () => {},
    allWidgets: [],
    defaultWidgets: [],
    timelineWidget: null,
    actionWidgets: [],
    plusWidget: null,
    postEvent: () => {},
    state: {},
    initialized: false,
});

export const WidgetProvider = ({ children }: { children: React.ReactNode}) => {
    const event = useOnEvent();
    const { logSentEvent } = React.useContext<TLogContextState>(LogContext);
    const [allWidgets, setAllWidgets] = React.useState<TWidgetUrl[]>([]);
    const [initialized, setInitialized] = React.useState<boolean>(false);
    const [state, dispatch] = React.useReducer(reducer, {});

    const postEvent = (obj: WidgetPullEventType) => {
        allWidgets.forEach(widget => {
            const widgetComponent = document.getElementById(widget.id) as HTMLIFrameElement;

            if (!widgetComponent || !widgetComponent.contentWindow) {
                return () => null;
            }
        
            // console.log("TextKit widget event emitted: ", obj);
            widgetComponent.contentWindow.postMessage(obj, "*");

            if (widget.type === WidgetType.Timeline) {
                const maxEventHeight = WidgetEvents.setMaxHeight(window.innerHeight - 48 - 235);
                widgetComponent.contentWindow.postMessage(maxEventHeight, "*");
                logSentEvent([maxEventHeight]);
            }
        });

        logSentEvent([obj]);
    }

    const handleResize = () => {
        postEvent(WidgetEvents.setMaxHeight(window.innerHeight - 25));
    }

    React.useEffect(() => {
        const data = localStorage.getItem(config.storage.widgets);

        if (data) {
            const widgets: TWidgetUrl[] = JSON.parse(data);
            setAllWidgets(widgets);
            widgets.forEach(widget => dispatch({ type: 'REGISTER_WIDGET', payload: widget }));
        }

        setInitialized(true);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        if (event && event.type) {
            switch(event.type) {
                case WidgetPushEvents.widgetReady:
                    if (event.name) {
                        dispatch({ type: 'WIDGET_READY', payload: event.name });
                    }
                    break;
                case WidgetPushEvents.closeWidget:
                    if (event.name) {
                        dispatch({ type: 'CHANGE_PROPERTY', id: event.name, key: 'size', value: TWidgetSize.Closed });
                    }
                    break;
                default:
                    break;
            }
        }
    }, [event]);
    
    const widgetContext = React.useMemo<TWidgetContextState>(() => ({
        addWidget: (payload) => {
            const list: TWidgetUrl[] = [
                ...allWidgets,
                payload
            ];
            setAllWidgets(list);
            localStorage.setItem(config.storage.widgets, JSON.stringify(list));
            dispatch({ type: 'REGISTER_WIDGET', payload });
        },
        changeWidgetState: (payload, enabled) => {
            const foundWidget = allWidgets.filter(widget => widget.id === payload.id);
            const otherWidgets = allWidgets.filter(widget => widget.id !== payload.id);
            if (foundWidget.length === 1) {
                const list: TWidgetUrl[] = [
                    ...otherWidgets,
                    {
                        ...foundWidget[0],
                        active: enabled
                    }
                ];

                setAllWidgets(list);
                localStorage.setItem(config.storage.widgets, JSON.stringify(list));
            }
        },
        removeWidget: (payload) => {
            const list: TWidgetUrl[] = allWidgets.filter(widget => widget.id !== payload.id);
            setAllWidgets(list);
            localStorage.setItem(config.storage.widgets, JSON.stringify(list));
            dispatch({ type: 'UNREGISTER_WIDGET', payload: payload.id });
        },
        registerWidget: (payload) => {
            dispatch({ type: 'REGISTER_WIDGET', payload });
        },
        unregisterWidget: (payload) => {
            dispatch({ type: 'UNREGISTER_WIDGET', payload });
        },
        changeProperty: (id, key, value) => {
            dispatch({ type: 'CHANGE_PROPERTY', id, key, value });
        },
        widgetReady: (payload) => {
            dispatch({ type: 'WIDGET_READY', payload });
        },
        closeAll: () => {
            dispatch({ type: 'CLOSE_ALL' });
        },
        uploadWidgets: (widgets: TWidgetUrl[]) => {
            localStorage.setItem(config.storage.widgets, JSON.stringify(widgets));
            window.location.reload();
        },
        allWidgets,
        defaultWidgets: allWidgets.filter(widget => widget.type === WidgetType.Default && widget.active),
        timelineWidget: allWidgets.filter(widget => widget.type === WidgetType.Timeline && widget.active)[0],
        actionWidgets: allWidgets.filter(widget => widget.type === WidgetType.Action && widget.active),
        plusWidget: allWidgets.filter(widget => widget.type === WidgetType.Add && widget.active)[0],
        event,
        postEvent,
        state: state,
        initialized,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [state, allWidgets, event]);

    return (
        <WidgetContext.Provider value={widgetContext}>
            {children}
        </WidgetContext.Provider>
    );
}