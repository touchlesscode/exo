import { createContext } from "react";
import { Option } from "src/components/Dropdown";
import { TOpportunityContext } from '.';
import { STAGES } from "./labelsData";

const TAGS: any[] = [
    { id: '1', tag: 'Awareness' },
    { id: '2', tag: 'Discover' },
    { id: '3', tag: 'Offer Evaluation' },
    { id: '4', tag: 'Final Proposal' },
    { id: '5', tag: 'Closed' },
];

export const getTagValue = (value: string) => {
    const found = TAGS.filter(tag => tag.id === value);

    if (found.length === 1) {
        return found[0].tag;
    }

    return null;
}

export const getTag = (value: string) => {
    const found = STAGES.filter(item => item.id === value);

    return (found.length === 1) ? found[0] : STAGES[0];
}

export const getClosed = (value: string | undefined, reasons: Option[]) => {
    if (!value) {
        return reasons[0];
    }
    const found = reasons.filter(item => item.label === value);
    
    return (found.length === 1) ? found[0] : reasons[0];
}

export const getUsers = (value: string|null, users: Option[]) => {
    const found = users.filter(item => item.id.toString() === value?.toString());
    return (found.length === 1) ? found[0] : users[0];
}

export const OpportunityContext = createContext<TOpportunityContext>({
    tags: [],
    opportunities: [],
    reasons: [],
    products: [],
    setState: () => {},
    opportunity: null,
    setOpportunity: () => {},
    dispatch: () => {},
    usersData: []
});