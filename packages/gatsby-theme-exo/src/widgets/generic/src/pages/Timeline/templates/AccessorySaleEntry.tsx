import React from 'react';
import AccessorySale from '../../../icons/timeline/AccessorySale';
import { EntryProps } from '../';
import Entry from '../components/Entry';
import Item from '../components/ListItem';

const AccessorySaleEntry = ({ message, open }: EntryProps) => {
    return (
        <Entry
            icon={<AccessorySale color="#347F4D" />}
            title={`<strong>${message.message_user}</strong> sold an accessory`}
            open={open}
        >
            <Item title="Phone Number" description={message.message.message_from ?? message.message.message_to} />
            {/* <Item title="Contract Term" description="M2M" /> */}
            <Item title="Accessory" description={message.message.message} />
            {/* <Item title="Handset" description="9058188452 24 month HUAWEI P30 PRO 128GB BLACK" /> */}
            {/* <Item title="Rate Plan" description="PPMC50G" /> */}
        </Entry>
    );
}

export default AccessorySaleEntry;