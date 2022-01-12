export interface SendMessageObject {
    type: string;
    value?: string | null | boolean;
}

export default function usePostMessage(id: string) {
    const iFrame = document.getElementById(id) as HTMLIFrameElement;
    const postMessage = (message: SendMessageObject) => {
        if (iFrame && iFrame.contentWindow) {
            iFrame.contentWindow.postMessage(message, '*');
        }
    }

    return postMessage;
}