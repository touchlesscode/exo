import { useEffect, useState } from "react";

export enum WidgetType {
    Default = "Default",
    Action = "Action",
    Timeline = "Timeline",
}

export interface WidgetOptions {
    type: WidgetType
    label: string
    header: string
    footer: string
}

export interface WidgetPushEventType {
    name?: string;
    type: WidgetPushEvents;
    value?: any;
}

export interface WidgetPullEventType {
    type: WidgetPullEvents;
    value?: any;
}

export enum WidgetTabs {
    Widget = "Widget",
    Timeline = "Timeline",
}

export enum WidgetPushEvents {
    maximizeWidget = "textkit/maximizeWidget",
    minimizeWidget = "textkit/minimizeWidget",
    setLabel = "textkit/setLabel",
    setFooter = "textkit/setFooter",
    setHeader = "textkit/setHeader",
    widgetReady = "textkit/widgetReady",
    closeWidget = "textkit/closeWidget",
    switchTab = "textkit/switchTab",
    emitEvent = "textkit/emitEvent",
}

export enum WidgetPullEvents {
    receiveWidgetEvent = "textkit/receiveWidgetEvent",
    setMaxHeight = "textkit/maxHeight",
    updateContext = "textkit/updateContext",
    widgetMaximized = "textkit/widgetMaximized",
    widgetMinimized = "textkit/widgetMinimized",
    widgetOpened = "textkit/openWidget",
}

const closeWidget = () => ({
    type: WidgetPushEvents.closeWidget,
});

const widgetReady = (widgetOptions?: Partial<WidgetOptions>) => {
    const { type, label, header, footer } = widgetOptions || {};

    return {
        type: WidgetPushEvents.widgetReady,
        value: {
            type: type || WidgetType.Default,
            label: label || "",
            header: header || "",
            footer: footer || "",
        },
    };
};

const minimizeWidget = () => ({
    type: WidgetPushEvents.minimizeWidget,
});

const maximizeWidget = () => ({
    type: WidgetPushEvents.maximizeWidget,
});

const setFooter = (footer: string) => ({
    type: WidgetPushEvents.setFooter,
    value: footer,
});

const setHeader = (header: string) => ({
    type: WidgetPushEvents.setHeader,
    value: header,
});

const switchTab = (tab: WidgetTabs) => ({
    type: WidgetPushEvents.switchTab,
    value: tab,
});

const receiveWidgetEvent = (value: any) => ({
    type: WidgetPullEvents.receiveWidgetEvent,
    value,
});

const emitEvent = (value: any) => ({
    type: WidgetPushEvents.emitEvent,
    value,
});

export const WidgetEvents = {
    WidgetPushEvents,
    WidgetPullEvents,
    maximizeWidget,
    minimizeWidget,
    setFooter,
    setHeader,
    widgetReady,
    closeWidget,
    switchTab,
    emitEvent,
    receiveWidgetEvent,
};

export function useOnEvent() {
    const [event, setEvent] = useState<WidgetPullEventType | null>();

    const onMessage = (e: MessageEvent<WidgetPullEventType>) => {
        const validEventTypes = Object.values(WidgetEvents.WidgetPullEvents);
        //console.log(JSON.stringify(e))
        if (e.data && validEventTypes.includes(e.data.type)) {
            setEvent(e.data);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener("message", onMessage);

            return function cleanup() {
                window.removeEventListener("message", onMessage);
            };
        }
    });

    return event;
}

export function usePostEvent(window: Window & typeof globalThis) {
    if (typeof window !== 'undefined') {
        const widgetContainerWindow = window.top;
        const widgetName = window.name;
        

        if (widgetContainerWindow) {
            const postEvent = (event: WidgetPushEventType) => {
                if (event) {
                    //console.log(JSON.stringify({event: event, name: widgetName}));
                    widgetContainerWindow.postMessage({ ...event, name: widgetName }, window.location.ancestorOrigins[0]);
                }
            };

            return postEvent;
        }
    }
    // temporary hack that allows testing widgets recursively
    return () => null;
}