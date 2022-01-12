import React from "react";
import styled from 'styled-components';
import copy from 'copy-to-clipboard';
import { TestWrapper } from "@exo/components/TestComponents";
import WidgetEvents from "@exo/widgetApi/events";
// import WidgetEvents from "../widgetApi/events";
import { UserContext } from "@exo/context/UserContext";
import useWidgetReady from "@exo/hooks/useWidgetReady";

const TestAdd = () => {
    const ready = useWidgetReady({});
    const { postEvent } = React.useContext(UserContext);

    React.useEffect(() => {
        if (ready) {
            // postEvent(WidgetEvents.setHeader('My Header'));
            // postEvent(WidgetEvents.setFooter('My Footer'));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ready]);

    const handleClose = () => {
        postEvent(WidgetEvents.setIsOpen(false));
    }

    return (
        <TestWrapper>
            <h1>Welcome to the TestAdd Widget</h1>
            <button onClick={handleClose}>Close Widget</button>
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

export default TestAdd;