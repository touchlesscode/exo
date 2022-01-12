import React from "react";
import { TestWrapper } from "@exo/components/TestComponents";
import WidgetEvents from "@exo/widgetApi/events";
import { UserContext } from "@exo/context/UserContext";
import useWidgetReady from "@exo/hooks/useWidgetReady";

const TestTimeline = () => {
    useWidgetReady({});
    const { event } = React.useContext(UserContext);
    const [context, setContext] = React.useState<any>();
    const [eventEmitted, setEventEmitted] = React.useState<any>();

    React.useEffect(() => {
        if (event) {
            switch(event.type) {
                case WidgetEvents.ReceivableEvents.contextChanged:
                    setContext(event.value);
                    break;
                case WidgetEvents.ReceivableEvents.receivedEvent:
                    setEventEmitted(event.value);
                    break;
            }
        }
    }, [event]);

    return (
        <TestWrapper>
            <h1>Welcome to the TestTimeline Widget</h1>
            <div className="item">
                <h2>Context</h2>
                <span>{context && context.external ? context.external.externalId : 'N/A'}</span>
            </div>
            <div className="item">
                <h2>Event Emitted</h2>
                <span>{eventEmitted ? JSON.stringify(eventEmitted) : 'N/A'}</span>
            </div>
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
        </TestWrapper>
    );
}

export default TestTimeline;