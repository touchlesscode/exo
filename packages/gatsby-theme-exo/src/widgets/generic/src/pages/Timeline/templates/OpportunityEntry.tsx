import React from 'react';
import Opportunity from '../../../icons/timeline/Opportunity';
import { EntryProps } from '../';
import Entry from '../components/Entry';
import Item from '../components/ListItem';

const OpportunityEntry = ({ message, open }: EntryProps) => {
    console.log('update opportunity template and remove log', message);

    let name = null;
    let stage = null;
    let expiry = null;
    let deal = null;
    let notes = null;

    const matches = message.message.message.match(/<strong>(.*?)<\/strong>/gm);
    if (matches && matches.length > 0) {
        name = matches[0].replace('<strong>', '').replace('</strong>', '');
        if(matches.length === 2) {
            stage = matches[1].replace('<strong>', '').replace('</strong>', '');
        }
        if(matches.length === 3) {
            expiry = matches[2].replace('<strong>', '').replace('</strong>', '');
        }
        if(matches.length === 4) {
            deal = matches[3].replace('<strong>', '').replace('</strong>', '');
        }
        if(matches.length === 5) {
            notes = matches[4].replace('<strong>', '').replace('</strong>', '');
        }
    }
    
    return (
        <Entry
            icon={<Opportunity color="#4E49DF" />}
            title={`<strong>${message.message_user}</strong> added an opportunity <strong>${name}</strong>`}
            open={open}
        >
            {stage && <Item title="Stage" description={stage} />}
            {deal && <Item title="Value" description={deal} />}
            {expiry && <Item title="Expires" description={expiry} />}
            {notes && <Item title="Notes" description={notes} />}
        </Entry>
    );
}

export default OpportunityEntry;