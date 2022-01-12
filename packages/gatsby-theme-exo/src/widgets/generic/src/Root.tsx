import { useEffect, useState } from 'react'
import { UserContext } from './context/UserContext'
import './widget'
import Routes from './router/Routes'
import { useOnEvent, WidgetEvents, WidgetPullEventType, WidgetPushEventType } from './hooks/widgetApi'

interface RootProps {
    carrierId: string | null;
    dealerId: string | null;
    token: string | null;
    userId: string | null;
    postEvent: (event: WidgetPushEventType ) => void;
}

function Root({ carrierId, dealerId, token, userId, postEvent }: RootProps) {
    const event = useOnEvent();
    const [expanded, setExpanded] = useState<boolean>(false);
    const [eventMessage, setEventMessage] = useState<WidgetPullEventType | null>(null);
    const [maxHeight, setMaxHeight] = useState<number|null>(null);
    const [defaultScroll, setDefaultScroll] = useState<boolean>(true); // Used for turning-off default scrolling to handle this yourself

    // Handle specific incoming events such as maximize/minimize/resize
    useEffect(() => {
        if (event) {
            switch (event.type) {
                case WidgetEvents.WidgetPullEvents.widgetMinimized:
                    setExpanded(false);
                    setMaxHeight(null);
                    break;
                case WidgetEvents.WidgetPullEvents.widgetMaximized:
                    setExpanded(true);
                    break;
                case WidgetEvents.WidgetPullEvents.setMaxHeight:
                    console.log('setMaxHeight', event.value);
                    setMaxHeight(event.value);
                    break;
            }
            setEventMessage(event);
        }
    }, [event]);

    return (
        <UserContext.Provider
            value={{
                token,
                dealerId,
                carrierId,
                userId,
                expanded,
                setExpanded,
                event: eventMessage,
                postEvent,
                maxHeight,
                setDefaultScroll
            }}
        >
            <div style={{
                display: 'flex',
                width: '100%',
                minHeight: 'auto',
                height: 'auto',
                maxHeight: maxHeight ?? 'none',
                overflowX: 'hidden',
                overflowY: defaultScroll ? (maxHeight ? 'scroll' : 'hidden') : 'hidden',
            }}>
                <Routes />
            </div>
        </UserContext.Provider>
    )
}

export default Root
