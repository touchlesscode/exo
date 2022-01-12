import React from 'react';
import LogActivity from '../../../icons/timeline/LogActivity';
import { EntryProps } from '../';
import Entry from '../components/Entry';
import Item from '../components/ListItem';

const LogActivityEntry = ({ message, open }: EntryProps) => {
    return (
        <Entry
            icon={<LogActivity color="#A7BBC3" />}
            title={`<strong>${message.message_user}</strong> logged <strong>${message.message_standards?.message_type}</strong> activity`}
            open={open}
        >
            <Item title="Type of Conversation" description={message.message.subject} />
            {message.message.outcome_reason && 
                <Item title="Outcome" description={message.message.outcome_reason} />
            }
            <Item title="Notes" description={message.message.message} />

            {(message.message.next_steps === 'Meeting' || message.message.next_steps === 'meeting') &&
                <Item title="Meeting Time" description={message.message.next_date} />
            }
        </Entry>
    );
}

export default LogActivityEntry;