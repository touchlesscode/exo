import React from 'react';
import Activation from '../../../icons/timeline/Activation';
import { EntryProps } from '../';
import Entry from '../components/Entry';
import Item from '../components/ListItem';

const ActivationEntry = ({ message, open }: EntryProps) => {
    console.log('update activation template and remove log', message);

    return (
        <Entry
            icon={<Activation color="#347F4D" />}
            title={`<strong>${message.message_user}</strong> completed activation`}
            open={open}
        >
            <Item title="Phone Number" description={message.message.message_from ?? message.message.message_to} />
            {/* <Item title="Contract Term" description="M2M Activation" />
            <Item title="Tablet" description="Apple iPad Pro 12.9 128GB with Wi-Fi (4th Generation) - Space Grey" />
            <Item title="Rate Plan" description="PPMC50G" /> */}
        </Entry>
    );
}

export default ActivationEntry;