import React, { useContext, useEffect, useState } from 'react';
import WidgetEvents from "@exo/utils/widgetApi/events";
import { UserContext } from "@exo/context/UserContext";
import useWidgetReady from "@exo/hooks/useWidgetReady";
import { WidgetViewSize } from "@exo/utils/widgetApi";
import { TestWrapper } from "@exo/components/TestComponents";

const OnBoardingPage = () => {
     
    const ready = useWidgetReady({});
    const { postEvent, event } = useContext(UserContext);
    const [context, setContext] = useState<any>();
    const [eventEmitted, setEventEmitted] = useState<any>();
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (ready) {
            postEvent(WidgetEvents.setHeader('My Header'));
            postEvent(WidgetEvents.setFooter('My Footer'));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ready]);

    useEffect(() => {
        if (event) {
            switch(event.type) {
                case WidgetEvents.ReceivableEvents.contextChanged:
                    setContext(event.value);
                    break;
                case WidgetEvents.ReceivableEvents.viewSizeChanged:
                    setOpen(event.value === WidgetViewSize.Large ? true : false);
                    break;
                case WidgetEvents.ReceivableEvents.receivedEvent:
                    setEventEmitted(event.value);
                    break;
            }
        }
    }, [event]);

        
    return (
        <TestWrapper>
        <h1>Welcome to the TestStandard Widget</h1>
        <div className="item">
            <h2>Context</h2>
            <span>{context && context.external ? context.external.externalId : 'N/A'}</span>
        </div>
        <div className="item">
            <h2>Event Emitted</h2>
            <span>{eventEmitted ? JSON.stringify(eventEmitted) : 'N/A'}</span>
        </div>
        <div className="item">
            <h2>Open</h2>
            <span>{open ? 'True' : 'False'}</span>
        </div>
        {open &&
            <div className="scrollBody">
                <p>start</p>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <p>middle</p>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <p>end</p>
            </div>
        }
    </TestWrapper>
    );
};

export default OnBoardingPage;
