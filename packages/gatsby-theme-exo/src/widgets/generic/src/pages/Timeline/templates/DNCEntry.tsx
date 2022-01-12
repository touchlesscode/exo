import React from 'react';
import DNC from '../../../icons/timeline/DNC';
import { EntryProps } from '../';
import Entry from '../components/Entry';
import Item from '../components/ListItem';

const DNCEntry = ({ message, open }: EntryProps) => {
    let description = '';

    switch(message.cpm_type) {
        case "user":
            description = 'User';
            break;
        case "contact":
            description = 'Contact';
            break;
        case "carrier":
            description = 'Carrier';
            break;
        default:
            description = message.message.message;
            break;
    }

    const preview = message.cpm_preview ?? 'Requested DNC';

    return (
        <Entry
            icon={<DNC color="#C92F24" />}
            title={`<b>${message.message_user}</b> ${preview}`}
            open={open}
        >
            <Item title="Phone Number" description={message.message.message_from ?? message.message.message_to} />
            <Item title="Source of opt out" description={description} />
        </Entry>
    );
}

export default DNCEntry;