import React from "react";
import { LogContext, TLogContextState } from "../../providers/LogProvider";
import { TWidgetContextState, WidgetContext } from "../../providers/WidgetProvider";
import LogBox from "../LogBox";
import { ContentBox, TabContent } from "./index.styled";

const LogTab = ({ visible = false }: { visible: boolean}) => {
    const { allWidgets } = React.useContext<TWidgetContextState>(WidgetContext);
    const { receivedLogs, clearReceivedLog, sentLogs, clearSentLog } = React.useContext<TLogContextState>(LogContext);

    return (
        <TabContent visible={visible}>
            <h3>View Logs</h3>

            <ContentBox>
                <LogBox widgets={allWidgets} title="Messages Received" log={receivedLogs} onClear={clearReceivedLog} />
            </ContentBox>
            <ContentBox>
                <LogBox title="Messages Sent" log={sentLogs} onClear={clearSentLog} />
            </ContentBox>
        </TabContent>
    )
}

export default LogTab;