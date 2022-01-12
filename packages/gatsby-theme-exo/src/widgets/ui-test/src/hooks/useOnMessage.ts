import { useEffect, useState } from "react";

export type MessageType = 'title' | 'footer' | 'onready';

export interface MessageObject {
    type: MessageType;
    value?: string;
}

export default function useOnMessage() {
    const [response, setResponse] = useState<MessageObject | null>();
    const onMessage = (e: MessageEvent<MessageObject>) => {
        // console.log('e', e);
        setResponse(e.data);
    }

    useEffect(() => {
        window.onmessage = onMessage;
    });

    return response;
}