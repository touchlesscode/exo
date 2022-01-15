import PropTypes from "prop-types"
import React, { useEffect, useState } from 'react'
import '../widget'
import "../styles/style.css"
import { UserContext } from '../context/UserContext'
import { useOnEvent, WidgetEvents, WidgetPullEventType, WidgetPushEventType } from '../hooks/widgetApi'


const Layout = ({ children, postEvent }) => {
  const event = useOnEvent();
  const [expanded, setExpanded] = useState(false);
  const [eventMessage, setEventMessage] = useState<WidgetPullEventType | null>(null);
  const [maxHeight, setMaxHeight] = useState(null);
  const [defaultScroll, setDefaultScroll] = useState(true); // Used for turning-off default scrolling to handle this yourself

  // Handle specific incoming events such as maximize/minimize/resize
  console.log({layoutEvent: event})
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
        console.log(JSON.stringify({ layoutEvent: event}))
    }
}, [event]);

  return (
    <UserContext.Provider
            value={{
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
        {children}
      </div>
    </UserContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
}

export default Layout
