import { WidgetViewSize } from ".";


export enum WidgetType {
    Standard = "Standard",
    Action = "Action",
    Timeline = "Timeline",
    Sendable = "Sendable",
}

export enum WidgetScope {
    User = "user",
    Conversation = "conversation",
}


export enum WidgetTabs {
    Widget = "Widget",
    Timeline = "Timeline",
}
export interface WidgetPushEventType {
    name?: string;
    type: PushableEvents;
    value?: any;
}

export interface WidgetPullEventType {
    type: ReceivableEvents;
    value?: any;
}

enum PushableEvents {
    actionCreationFailed = "textkit/actionCreationFailed",
    appendTextToMessage = "textkit/appendTextToMessage",
    emitEvent = "textkit/emitEvent",
    replaceTextMessage = "textkit/replaceTextMessage",
    setFooter = "textkit/setFooter",
    setHeader = "textkit/setHeader",
    setIsOpen = "textkit/setIsOpen",
    setIsShown = "textkit/setIsShown",
    setLabel = "textkit/setLabel",
    setSize = "textkit/setSize",
    widgetReady = "textkit/widgetReady",

    // for testing
    getRegistrationInfo = "textkit/getRegistrationInfo",
}

enum ReceivableEvents {
    contextChanged = "textkit/contextChanged",
    maxHeightChanged = "textkit/maxHeightChanged",
    isOpenChanged = "textkit/isOpenChanged",
    isShownChanged = "textkit/isShownChanged",
    viewSizeChanged = "textkit/viewSizeChanged",
    receivedEvent = "textkit/receivedEvent",
    
    // for testing
    registrationInfo = "textkit/registrationInfo",
}

const actionCreationFailedEvent = () => ({
    type: PushableEvents.actionCreationFailed,
});

const receiveWidgetEvent = (value: any) => ({
    type: ReceivableEvents.receivedEvent,
    value,
});


const requestWidgetInfoEvent = () => ({
    type: PushableEvents.getRegistrationInfo,
});

const receiveWidgetInfoEvent = (info: any) => ({
    type: ReceivableEvents.registrationInfo,
    value: info,
});

const isShownChanged = (isShown: boolean) => ({
    type: ReceivableEvents.isShownChanged,
    value: isShown,
});

const setMaxHeight = (height?: number) => ({
    type: ReceivableEvents.maxHeightChanged,
    value: height,
});

const contextChanged = (external: { externalId: string, metadata: any}, conversationId: string, campaignId: string) => ({
    type: ReceivableEvents.contextChanged,
    value: {
        external,
        conversationId,
        campaignId,
    },
});

const widgetReady = () => ({
    type: PushableEvents.widgetReady,
});

const emitEvent = (value: any) => ({
    type: PushableEvents.emitEvent,
    value,
});

const setIsOpen = (isOpen: boolean) => ({
    type: PushableEvents.setIsOpen,
    value: isOpen,
});

const setSize = (size: WidgetViewSize) => ({
    type: PushableEvents.setSize,
    value: size,
});

const setLabel = (label: string) => ({
    type: PushableEvents.setLabel,
    value: label,
});

const setFooter = (footer: string) => ({
    type: PushableEvents.setFooter,
    value: footer,
});

const setHeader = (header: string) => ({
    type: PushableEvents.setHeader,
    value: header,
});

const setIsShown = (isShown: boolean) => ({
    type: PushableEvents.setIsShown,
    value: isShown,
});

const appendTextToMessage = (text: string) => ({
    type: PushableEvents.appendTextToMessage,
    value: text,
});

const replaceTextMessage = (text: string) => ({
    type: PushableEvents.replaceTextMessage,
    value: text,
});

const WidgetEvents = {
    ReceivableEvents,
    PushableEvents,
    actionCreationFailedEvent,
    appendTextToMessage,
    setIsOpen,
    emitEvent,
    isShownChanged,
    receiveWidgetEvent,
    receiveWidgetInfoEvent,
    replaceTextMessage,
    requestWidgetInfoEvent,
    setFooter,
    setHeader,
    setIsShown,
    setLabel,
    setMaxHeight,
    setSize,
    contextChanged,
    widgetReady,
};

export default WidgetEvents;