import React, { createContext } from "react";
import { WidgetPullEventType, WidgetPushEventType } from "src/hooks/widgetApi";

export interface TUserContext {
    token: string | null;
    dealerId: string | null;
    entityId: string | null;
    carrierId: string | null;
    userId: string | null;
    expanded: boolean;
    maxHeight: number | null;
    setExpanded?: React.Dispatch<React.SetStateAction<boolean>>;
    event: WidgetPullEventType | null;
    postEvent: (event: WidgetPushEventType ) => void;
    setDefaultScroll: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<TUserContext>({
    token: null,
    dealerId: null,
    carrierId: null,
    userId: null,
    expanded: true,
    event: null,
    maxHeight: null,
    postEvent: () => { },
    setDefaultScroll: () => {},
});