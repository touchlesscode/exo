interface MessageType {
    type: 'title' | 'footer' | 'onready';
    value: string;
}

type SetMaximize = {
    type: 'setMaximize';
}

type SetFooter = {
    type: 'setFooter';
    value: string;
}

export type WidgetRequest = SetMaximize | SetFooter;

export default function usePostMessage() {
    const sendMessage = (message: MessageType) => {
        if (typeof window !== 'undefined') {
            console.log({postMessage: message, origin: window.location.ancestorOrigins[0]})
            window.top.postMessage(message, '*');
        }
    }

    return sendMessage;
}