import { useEffect, useState } from "react";

import WidgetEvents, { WidgetPullEventType, WidgetPushEventType } from "./events";


export enum WidgetViewSize {
    Large = "Large",
    Medium = "Medium",
    Small = "Small",
}

export interface StandardWidgetViewState {
    size: WidgetViewSize
}

export interface ActionWidgetViewState {
    isOpen: boolean
}

export enum TimelineWidgetViewState {

}

export interface SendableWidgetViewState {
    isShowing: boolean
}

export function useOnEvent(browserWindow: Window) {
    const [event, setEvent] = useState<WidgetPullEventType | null>();
    
    const onMessage = (e: MessageEvent<WidgetPullEventType>) => {  
        const validEventTypes = Object.values(WidgetEvents.ReceivableEvents);

        if (e.data && validEventTypes.includes(e.data.type)) {
            console.log("Widget event received: ", window.name, e.data);
            setEvent(e.data);
        }
    };

    useEffect(() => {
        browserWindow.addEventListener("message", onMessage);

        return function cleanup() {
            browserWindow.removeEventListener("message", onMessage);
        };
    });
    
    return event;
}

export function usePostEvent(window: Window) {
    const widgetContainerWindow = window.top;
    const widgetName = window.name;

    if (widgetContainerWindow) {
        const postEvent = (event: WidgetPushEventType) => {
            if (event && window.name !== "") {
                console.log("Widget event emitted: ", {...event, name: widgetName});
                widgetContainerWindow.postMessage({...event, name: widgetName}, "*");
            }
        };

        return postEvent;
    }

    // temporary hack that allows testing widgets recursively
    return () => null;
}