import { useEffect, useState } from "react";

export enum WidgetType {
    Default = "Default",
    Action = "Action",
    Timeline = "Timeline",
    Add = "Add",
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

const receiveWidgetEvent = (value: any) => ({
    type: WidgetPullEvents.receiveWidgetEvent,
    value,
});

const emitEvent = (value: any) => ({
    type: WidgetPushEvents.emitEvent,
    value,
});

const setMaxHeight = (height?: number) => ({
    type: WidgetPullEvents.setMaxHeight,
    value: height,
});

const widgetReady = () => ({
    type: WidgetPushEvents.widgetReady,
});

const setFooter = (footer: string) => ({
    type: WidgetPushEvents.setFooter,
    value: footer,
});

const setHeader = (header: string) => ({
    type: WidgetPushEvents.setHeader,
    value: header,
});

const closeWidget = () => ({
    type: WidgetPushEvents.closeWidget,
});

const switchTab = (tab: WidgetTabs) => ({
    type: WidgetPushEvents.switchTab,
    value: tab,
});

export const WidgetEvents = {
    WidgetPushEvents,
    WidgetPullEvents,
    setFooter,
    setHeader,
    widgetReady,
    closeWidget,
    switchTab,
    emitEvent,
    receiveWidgetEvent,
    setMaxHeight,
};

const maximizeWidget = () => ({
    type: WidgetEvents.WidgetPullEvents.widgetMaximized,
});

const minimizeWidget = () => ({
    type: WidgetEvents.WidgetPullEvents.widgetMinimized,
});

export const WidgetContainerEvents = {
    maximizeWidget,
    minimizeWidget,
};

export function useOnEvent() {
    const [event, setEvent] = useState<WidgetPushEventType>();

    const onMessage = (e: MessageEvent<WidgetPushEventType>) => {
        const validEventTypes = Object.values(WidgetEvents.WidgetPushEvents);

        if (e.data && validEventTypes.includes(e.data.type)) {

            setEvent({
                type: e.data.type,
                value: e.data.value,
                name: e.data.name
            });
        }
    };

    useEffect(() => {
        window.addEventListener("message", onMessage);

        return function cleanup() {
            window.removeEventListener("message", onMessage);
        };
    });

    return event;
}

export function usePostEvent(id: string) {
    const widgetComponent = document.getElementById(id) as HTMLIFrameElement;

    if (!widgetComponent) {
        return () => null;
    }

    const postEvent = (event: WidgetPullEventType) => {
        if (event && widgetComponent.contentWindow) {
            widgetComponent.contentWindow.postMessage(event, "*");
        }
    };

    return postEvent;
}