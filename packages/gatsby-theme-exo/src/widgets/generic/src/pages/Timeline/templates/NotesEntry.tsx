import React from 'react';
import Notes from '../../../icons/timeline/Notes';
import { EntryProps } from '../';
import Entry from '../components/Entry';
import Item from '../components/ListItem';

const NotesEntry = ({ message, open }: EntryProps) => {
    return (
        <Entry
            icon={<Notes color="#FF9533" />}
            title={`<strong>${message.message_user}</strong> left a note`}
            open={open}
        >
            <Item title="Note" description={message.message.message} />
        </Entry>
    );
}

export default NotesEntry;