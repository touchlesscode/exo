import React from 'react';
import IncomingMessage from '../../../icons/timeline/IncomingMessage';
import { EntryProps } from '../';
import Entry from '../components/Entry';
import Item from '../components/ListItem';

const MessageReceivedEntry = ({ message, open }: EntryProps) => {
    return (
        <Entry
            icon={<IncomingMessage color="#58D07E" />}
            title={`<strong>${message.primary_contact}</strong> sent a message`}
            open={open}
        >
            <Item description={message.message.message} />
        </Entry>
    );
}

export default MessageReceivedEntry;