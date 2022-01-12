import React from 'react';
import Renewed from '../../../icons/timeline/Renewed';
import { EntryProps } from '../';
import Entry from '../components/Entry';
import Item from '../components/ListItem';

const RenewedEntry = ({ message, open }: EntryProps) => {    
    return (
        <Entry
            icon={<Renewed color="#347F4D" />}
            title={`<strong>${message.message_user}</strong> renewed a subscriber with <strong>${message.primary_contact}</strong>`}
            open={open}
        >
            <Item title="Phone Number" description={message.message.message_to} />
            {/* <Item title="Contract Term" description="M2M" /> */}
            {/* <Item title="Handset" description="9058188452 24 month HUAWEI P30 PRO 128GB BLACK" /> */}
            {/* <Item title="Rate Plan" description="PPMC50G" /> */}
        </Entry>
    );
}

export default RenewedEntry;