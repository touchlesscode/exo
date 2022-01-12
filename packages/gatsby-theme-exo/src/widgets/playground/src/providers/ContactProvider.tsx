import React from "react";
import config from "../utils/config";

export interface TPlaygroundContact {
    id: string;
    name: string;
    external: string;
    tag: string;
}

export interface TContactContextState {
    addContact: (contact: TPlaygroundContact) => void;
    removeContact: (contact: TPlaygroundContact) => void;
    uploadContacts: (contacts: TPlaygroundContact[]) => void;
    contacts: TPlaygroundContact[];
    selected?: TPlaygroundContact;
    setSelected: (contact?: TPlaygroundContact) => void;
}

type TContactActions = 
    { type: 'UPDATE_CONTACTS', payload: TPlaygroundContact[] };

function reducer(prevState: TPlaygroundContact[], action: TContactActions) {
    switch(action.type) {
        case 'UPDATE_CONTACTS':
            return action.payload;
        default:
            return prevState;
    }
}

export const ContactContext = React.createContext<TContactContextState>({
    addContact: () => {},
    removeContact: () => {},
    uploadContacts: () => {},
    contacts: [],
    selected: undefined,
    setSelected: () => {}
});

export const ContactProvider = ({ children }: { children: React.ReactNode}) => {
    const [allContacts, setAllContacts] = React.useState<TPlaygroundContact[]>([]);
    const [selected, setSelected] = React.useState<TPlaygroundContact>();
    const [state, dispatch] = React.useReducer(reducer, []);

    // Load contacts from localStorage
    React.useEffect(() => {
        const data = localStorage.getItem(config.storage.contacts);

        if (data) {
            const contacts: TPlaygroundContact[] = JSON.parse(data);
            setAllContacts(contacts);
        }
    }, []);

    // Update localStorage
    React.useEffect(() => {
        localStorage.setItem(config.storage.contacts, JSON.stringify(allContacts));
        dispatch({ type: 'UPDATE_CONTACTS', payload: allContacts });
    }, [allContacts]);

    const contactContext = React.useMemo<TContactContextState>(() => ({
        addContact: (payload) => {
            setAllContacts([
                ...allContacts,
                payload
            ]);
        },
        removeContact: (payload) => {
            const list = allContacts.filter(contact => contact.id !== payload.id);
            setAllContacts([...list]);
        },
        uploadContacts: (contacts: TPlaygroundContact[]) => {
            localStorage.setItem(config.storage.contacts, JSON.stringify(contacts));
            window.location.reload();
        },
        contacts: state,
        selected: selected,
        setSelected: setSelected
    }), [state, allContacts, selected, setSelected]);

    return (
        <ContactContext.Provider value={contactContext}>
            {children}
        </ContactContext.Provider>
    )
}