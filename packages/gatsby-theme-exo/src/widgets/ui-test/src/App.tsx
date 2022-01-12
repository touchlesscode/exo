import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from './theme';
import usePostMessage from './hooks/usePostMessage';
import Chat from './components/Chat';
import Navigation from './components/Navigation';
import Widget from './components/Widget';
import Log from './components/Log';
import TextInput from './components/TextInput';
import Button from './components/Button';
import { useOnEvent, WidgetPullEventType, WidgetPullEvents, WidgetEvents, WidgetPushEvents } from './hooks/widgetApi';
import { useFirstRender } from './hooks/useOnMount';

declare global {
    interface Window {
        parentIFrame: any;
        iFrameResize: any;
    }
}

const Wrapper = styled.div`
    display: flex;
    align-items: items-stretch;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`

function App() {
    const localContactState = localStorage.getItem('contactState');
    const isMount = useFirstRender();
    const event = useOnEvent();
    const postEvent = usePostMessage('widget');
    const [loadUrl, setLoadUrl] = useState<string | undefined>();
    const [label, setLabel] = useState<string | undefined>();
    const [url, setUrl] = useState('');
    const [messageType] = useState<keyof typeof WidgetPullEvents>('updateContext');
    const [messageValue, setMessageValue] = useState<any>();
    const [widgetType, setWidgetType] = useState<string|null>(null);
    const [sentLog, setSentLog] = useState<any | undefined>();
    const [receivedLog, setReceivedLog] = useState<any | undefined>();
    const [contactState, setContactState] = useState<string[]>((localContactState && JSON.parse(localContactState))|| []);

    useEffect(() => {
        window.iFrameResize({
            autoResize: false,
            sizeWidth: true
        });
    }, []);

    useEffect(() => {
        if (!isMount && widgetType && contactState.length) {
            localStorage.setItem('contactState', JSON.stringify(contactState));
            const lastId = contactState[contactState.length - 1];
            setMessageValue(JSON.stringify({
                external: {
                    externalId: lastId,
                    metadata: {}
                },
                conversationId: "",
                campaignId: "",
            }));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contactState]);

    useEffect(() => {
        if (messageValue) {
            sendMessage();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messageValue]);

    useEffect(() => {
        if (event) {
            const line = logItem(JSON.stringify(event));
            setReceivedLog((m: any) => m ? `${line}${m}` : `${line}`);

            if (event.type === WidgetPushEvents.closeWidget) {
                setLabel(undefined);
                setLoadUrl(undefined);
            }

            if (event.type === WidgetPushEvents.widgetReady) {
                setWidgetType(event.value.type);

                if (event.value.label.length > 0) {
                    setLabel(event.value.label);
                }
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [event]);

    const logItem = (message: any) => {
        const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date());
        return `<span class="block mb-2"><span class="block font-semibold">${date}:</span>${message}</span>`
    }

    const resetWidget = () => {
        setLoadUrl(undefined);
        clearSentLog();
        clearReceivedLog();
        setLabel(undefined);
        setWidgetType(null);
        setMessageValue(JSON.stringify({
            external: {
                externalId: "",
                metadata: {}
            },
            conversationId: "",
            campaignId: "",
        }));
    }

    const removeContact = (id: string) => {
        const contactStateCopy = [...contactState];
        const newContactState = contactStateCopy.filter( (item) => item !== id);
        localStorage.setItem('contactState', JSON.stringify(newContactState));
        setContactState(newContactState);
        setMessageValue(JSON.stringify({
            external: {
                externalId: newContactState[0],
                metadata: {}
            },
            conversationId: "",
            campaignId: "",
        }));
    }

    const sendPostMessage = (obj: WidgetPullEventType) => {
        postEvent(obj);
        const line = logItem(JSON.stringify(obj));
        setSentLog(sentLog ? `${line}${sentLog}` : `${line}`);
    }

    const sendMessage = () => {
        switch(messageType) {
            case 'updateContext':
                sendPostMessage({
                    type: WidgetEvents.WidgetPullEvents[messageType],
                    value: JSON.parse(messageValue)
                });
                break;
            default:
                break;
        }
    }

    const clearSentLog = () => {
        setSentLog(undefined);
    }

    const clearReceivedLog = () => {
        setReceivedLog(undefined);
    }

    return (
        <Wrapper>
            <GlobalStyle />
            <ThemeProvider theme={defaultTheme}>
                <Navigation />
                <Chat
                    contactState={contactState}
                    setContactState={setContactState}
                    setMessageValue={setMessageValue}
                    removeContact={removeContact}
                    widgetType={widgetType}
                />
                {/* <Body /> */}
                    <div className="mt-2 flex flex-1 items-start justify-between">
                        <div className="direction-column w-full">
                            <div className="p-2 mt-4">
                                <TextInput
                                    title="Widget URL"
                                    value={url}
                                    onChange={value => setUrl(value)}
                                    placeholder={"http://conversation.local:3000"}
                                />
                                <div className="flex items-center justify-between space-x-2">
                                    <div className="py-2 space-x-2">
                                        <Button title="Load Url" onPress={() => setLoadUrl(url)} />
                                        <Button title="Reset" onPress={resetWidget} color="pink" />
                                    </div>
                                    <div className="flex items-end space-x-2">
                                        {widgetType && 
                                            <div className="flex items-center">
                                                <span className="px-4 py-1 text-sm bg-green-100 text-green-800 font-bold border border-green-100 rounded-l-full">Widget Type</span>
                                                <span className="px-4 py-1 text-sm bg-gray-800 text-gray-100 border-t border-r border-b border-gray-700 rounded-r-full">{widgetType}</span>
                                            </div>
                                        }
                                        {label && 
                                            <div className="flex items-center">
                                                <span className="px-4 py-1 text-sm bg-green-100 text-green-800 font-bold border border-green-100 rounded-l-full">Action Label</span>
                                                <span className="px-4 py-1 text-sm bg-gray-800 text-gray-100 border-t border-r border-b border-gray-700 rounded-r-full">{label}</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 px-2 flex items-center justify-between w-full grid gap-4 grid-cols-2">
                                <Log title="Messages Sent" log={sentLog} onClear={clearSentLog} />
                                <Log title="Messages Received" log={receivedLog} onClear={clearReceivedLog} />
                            </div>
                        </div>
                    </div>
                {/* <RightColumn /> */}
                <div className="flex px-2 py-4 bg-gray-100 items-start justify-center border-box" style={{ width: 400, maxWidth: 400, minWidth: 400 }}>
                    <Widget
                        loadUrl={loadUrl}
                        sendPostMessage={sendPostMessage}
                        event={event}
                    />
                </div>
            </ThemeProvider>
        </Wrapper>
    );
}

export default App;
