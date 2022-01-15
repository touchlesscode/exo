import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { WidgetEvents, WidgetOptions } from "./widgetApi";

export default function useWidgetReady(widgetOptions? : WidgetOptions) {
    const { postEvent } = useContext(UserContext);
    const [ready, setReady] = useState<boolean>(false);

    const sendReadyEvent = useCallback(() => {
        postEvent(WidgetEvents.widgetReady(widgetOptions));
        console.log("ready",WidgetEvents.widgetReady(widgetOptions))
        setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        sendReadyEvent();
    }, [sendReadyEvent]);

    return ready;
}