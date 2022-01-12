import React from "react";
import WidgetEvents from "@exo/widgetApi/events";
import { UserContext } from "@exo/context/UserContext";
import useWidgetReady from "@exo/hooks/useWidgetReady";
import { TestWrapper } from "@exo/components/TestComponents";

const TestAction = () => {
    const ready = useWidgetReady({});
    const { postEvent, event } = React.useContext(UserContext);
    const [context, setContext] = React.useState<any>();
    const [receiveInfo, setReceiveInfo] = React.useState<any>();

    React.useEffect(() => {
        if (ready) {
            postEvent(WidgetEvents.setLabel('Action Label'));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ready]);

    React.useEffect(() => {
        if (event) {
            switch(event.type) {
                case WidgetEvents.ReceivableEvents.contextChanged:
                    setContext(event.value);
                    break;
                case WidgetEvents.ReceivableEvents.registrationInfo:
                    setReceiveInfo(event.value);
                    break;
            }
        }
    }, [event]);

    const handleRequestInfo = () => {
        postEvent(WidgetEvents.requestWidgetInfoEvent());
    }

    const handleEmitEvent = () => {
        postEvent(WidgetEvents.emitEvent({ name: 'event emitted' }));
        handleClose();
    }

    const handleClose = () => {
        postEvent(WidgetEvents.setIsOpen(false));
    }

    return (
        <TestWrapper>
            <h1>Welcome to the TestAction Widget</h1>
            <button onClick={handleClose}>Close Widget</button>
            <button onClick={handleRequestInfo}>Request Info</button>
            <button onClick={handleEmitEvent}>Emit Event</button>
            <div className="item">
                <h2>Context</h2>
                <span>{context && context.external ? context.external.externalId : 'N/A'}</span>
            </div>
            <div className="item">
                <h2>Receive Info</h2>
                <span>{receiveInfo ? JSON.stringify(receiveInfo) : 'N/A'}</span>
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

export default TestAction;