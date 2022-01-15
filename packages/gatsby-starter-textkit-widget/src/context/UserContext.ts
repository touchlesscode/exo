import React, { createContext } from "react";
import { WidgetPullEventType, WidgetPushEventType } from "../hooks/widgetApi";

export interface TUserContext {
    expanded: boolean;
    maxHeight: number | null;
    setExpanded?: React.Dispatch<React.SetStateAction<boolean>>;
    event: WidgetPullEventType | null;
    postEvent: (event: WidgetPushEventType ) => void;
    setDefaultScroll: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<TUserContext>({
    expanded: true,
    event: null,
    maxHeight: null,
    postEvent: () => { },
    setDefaultScroll: () => {},
});