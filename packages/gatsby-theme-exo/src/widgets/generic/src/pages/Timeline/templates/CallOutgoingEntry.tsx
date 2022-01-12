import React from 'react';
import CallOutgoing from '../../../icons/timeline/CallOutgoing';
import { EntryProps } from '../';
import Entry from '../components/Entry';
import Item from '../components/ListItem';

const CallOutgoingEntry = ({ message, open }: EntryProps) => {

    const callTime = new Intl.DateTimeFormat(
        'en-US', 
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        }
    ).format(new Date(message.message.date_added));

    return (
        <Entry
            icon={<CallOutgoing color="#055A5B" />}
            title={`<strong>${message.message_user}</strong> made a call`}
            open={open}
        >
            <Item title="Time of Call" description={callTime} />
            <Item title="Length of Call" description={message.call ? message.call.talktime : '0 sec'} />
            <Item title="Type of Call" description={message.message.subject} />
            <Item title="Result of Call" description={message.message.action_taken} />
        </Entry>
    );
}

export default CallOutgoingEntry;