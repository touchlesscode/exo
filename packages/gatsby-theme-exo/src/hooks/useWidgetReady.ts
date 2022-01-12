import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import WidgetEvents from "../widgetApi/events";

interface WidgetReadyOptions {
    label?: string;
    header?: string;
    footer?: string;
}

export default function useWidgetReady({ label, header, footer }: WidgetReadyOptions) {
    const { postEvent } = useContext(UserContext);
    const [ready, setReady] = useState<boolean>(false);

    const sendReadyEvent = useCallback(() => {
        postEvent(WidgetEvents.widgetReady());
        if (label) {
            postEvent(WidgetEvents.setLabel(label));
        }

        if (header) {
            postEvent(WidgetEvents.setHeader(header));
        }

        if (footer) {
            postEvent(WidgetEvents.setFooter(footer));
        }
        setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        sendReadyEvent();
    }, [sendReadyEvent]);

    return ready;
}