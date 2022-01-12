import React from "react";
import WidgetEvents from "@exo/utils/widgetApi/events";
import { UserContext } from "@exo/context/UserContext";
import useWidgetReady from "@exo/hooks/useWidgetReady";
import { TestWrapper } from "@exo/components/TestComponents";

const TestSendable = () => {
    const ready = useWidgetReady({});
    const { postEvent, event } = React.useContext(UserContext);
    const [context, setContext] = React.useState<any>();

    React.useEffect(() => {
        if (ready) {
            postEvent(WidgetEvents.setLabel('Sendable Widget'));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ready]);

    React.useEffect(() => {
        if (event) {
            switch(event.type) {
                case WidgetEvents.ReceivableEvents.contextChanged:
                    setContext(event.value);
                    break;
            }
        }
    }, [event]);

    const handleAppendEvent = () => {
        postEvent(WidgetEvents.appendTextToMessage('this will be appended to a message'));
        postEvent(WidgetEvents.setIsOpen(false));
    }

    const handleReplaceEvent = () => {
        postEvent(WidgetEvents.replaceTextMessage('This is a replacement message'));
        postEvent(WidgetEvents.setIsOpen(false));
    }

    return (
        <TestWrapper>
            <h1>Welcome to the Sendable Widget</h1>
            <button onClick={handleAppendEvent}>Append Copy</button>
            <button onClick={handleReplaceEvent}>Replace Copy</button>
            <div className="item">
                <h2>Context</h2>
                <span>{context && context.external ? context.external.externalId : 'N/A'}</span>
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

export default TestSendable;