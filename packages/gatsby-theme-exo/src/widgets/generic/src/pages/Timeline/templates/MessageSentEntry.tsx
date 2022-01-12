import React from 'react';
import OutgoingMessage from '../../../icons/timeline/OutgoingMessage';
import { EntryProps } from '../';
import Entry from '../components/Entry';
import Item from '../components/ListItem';

const MessageSentEntry = ({ message, open }: EntryProps) => {
    return (
        <Entry
            icon={<OutgoingMessage color="#5FC8FF" />}
            title={`<strong>${message.message_user}</strong> sent a message`}
            open={open}
        >
            <Item description={message.message.message} />
        </Entry>
    );
}

export default MessageSentEntry;