import React from 'react';
import Task from '../../../icons/timeline/Task';
import { EntryProps } from '../';
import Entry from '../components/Entry';
import Item from '../components/ListItem';

const TaskEntry = ({ message, open }: EntryProps) => {
    return (
        <Entry
            icon={<Task color="#FF9533" />}
            title={`<strong>${message.message_user}</strong> added a task`}
            open={open}
        >
            <Item title="Task To Do" description={message.message.subject} />
            <Item title="Description" description={message.message.message} />
            <Item title="Date Due" description={message.message.next_date} />
        </Entry>
    );
}

export default TaskEntry;