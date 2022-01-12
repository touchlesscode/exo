import React from 'react';
import ContactUpdate from '../../../icons/timeline/ContactUpdate';
import { EntryProps } from '../';
import Entry from '../components/Entry';
import Item from '../components/ListItem';

const ContactUpdateEntry = ({ message, open }: EntryProps) => {
    return (
        <Entry
            icon={<ContactUpdate color="#4E49DF" />}
            title={`<strong>${message.message_user}</strong> updated a contact`}
            open={open}
        >
            <Item title="Name" description={message.primary_contact} />
        </Entry>
    );
}

export default ContactUpdateEntry;