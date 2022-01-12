import React from 'react';
import CallIncoming from '../../../icons/timeline/CallIncoming';
import { EntryProps } from '../';
import Entry from '../components/Entry';
import Item from '../components/ListItem';

const CallIncomingEntry = ({ message, open }: EntryProps) => {
    console.log('update call incoming template and remove log', message);
    
    return (
        <Entry
            icon={<CallIncoming color="#BF8351" />}
            title={`<strong>Taras S.</strong> received a call`}
            open={open}
        >
            <Item title="Time of Call" description="December 3, 2018, 13:45 AM" />
            <Item title="Length of Call" description="2 min 45 sec" />
        </Entry>
    );
}

export default CallIncomingEntry;