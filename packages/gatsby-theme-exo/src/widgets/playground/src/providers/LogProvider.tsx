import React from "react";
import { useOnEvent } from "../hooks/widgetApi";

export interface TLogType {
    date: string;
    event: {
        name?: string;
        type: string;
        value?: string;
    }
}

export interface TLogContextState {
    receivedLogs: TLogType[];
    clearReceivedLog: () => void;
    sentLogs: TLogType[];
    clearSentLog: () => void;
    logSentEvent: (obj: any[]) => void;
}

export const LogContext = React.createContext<TLogContextState>({
    receivedLogs: [],
    clearReceivedLog: () => {},
    sentLogs: [],
    clearSentLog: () => {},
    logSentEvent: () => {},
});

export const LogProvider = ({ children }: { children: React.ReactNode}) => {
    const event = useOnEvent();
    const [receivedLogs, setReceivedLogs] = React.useState<TLogType[]>([]);
    const [sentLogs, setSentLogs] = React.useState<TLogType[]>([]);

    React.useEffect(() => {
        if (event && event.name) {
            setReceivedLogs([
                {
                    date: new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date()),
                    event
                },
                ...receivedLogs,
            ]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [event]);

    const clearReceivedLog = React.useCallback(() => {
        setReceivedLogs([]);
    }, [setReceivedLogs]);

    const clearSentLog = React.useCallback(() => {
        setSentLogs([]);
    }, [setSentLogs]);

    const logSentEvent = (obj: any[]) => {
        if (obj.length) {
            let list: TLogType[] = [];
            obj.forEach((item) => {
                list.push(
                    {
                        date: new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date()),
                        event: {
                            type: item.type,
                            value: item.value
                        }
                    }
                );
            });
            setSentLogs(log => [
                ...list,
                ...log
            ]);
            return;
        }
    }

    return (
        <LogContext.Provider value={{
            receivedLogs,
            clearReceivedLog,
            sentLogs,
            clearSentLog,
            logSentEvent,
        }}>
            {children}
        </LogContext.Provider>
    )
}