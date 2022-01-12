import { useContext, useEffect, useState } from "react";
import _ from "lodash";
import ChatCard from "../../components/ChatCard";
import { Container, Header, HeaderIcons, Scrollbar, Search, SearchIcon, SearchInput, Title } from "./index.styled";
import FilterIcon from "../../icons/Filter";
import { useTheme } from "styled-components";
import PlusIcon from "../../icons/Plus";
import IconButton from "../IconButton";
import { WidgetContainerEvents, WidgetEvents } from "../../hooks/widgetApi";
import { ContactContext, TContactContextState, TPlaygroundContact } from "../../providers/ContactProvider";
import { TWidgetContextState, TWidgetSize, WidgetContext } from "../../providers/WidgetProvider";
import CategoriesList from "./CategoriesList";
import Empty from "../Empty";
import { AppContext, TAppContext } from "../../providers/AppContext";

const Chat = () => {
    const theme = useTheme();
    const { mainOptions, setSelectedOption } = useContext<TAppContext>(AppContext);
    const { closeAll, changeProperty, plusWidget, postEvent, state } = useContext<TWidgetContextState>(WidgetContext);
    const { contacts, removeContact, selected, setSelected } = useContext<TContactContextState>(ContactContext);
    const [query, setQuery] = useState<string>('');
    const [contactList, setContactList] = useState<TPlaygroundContact[]>([]);

    useEffect(() => {
        setContactList(contacts);
    }, [contacts]);

    useEffect(() => {
        if (query.length > 0) {
            setContactList(
                contacts.filter(card => (
                    card.name.toLowerCase().includes(query.toLocaleLowerCase()) ||
                    card.external.toLowerCase().includes(query.toLocaleLowerCase()) || 
                    card.tag.toLowerCase().includes(query.toLocaleLowerCase())
                ))
            );
        }
        if (query.length === 0) {
            setContactList(contacts);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, contacts]);

    const handleClick = (contact: TPlaygroundContact) => {
        setSelected(contact);
        postEvent({
            type: WidgetEvents.WidgetPullEvents.updateContext,
            value: {
                external: {
                    externalId: contact.external,
                    metadata: {}
                },
                conversationId: "",
                campaignId: "",
            }
        });
        setTimeout(() => {
            postEvent(WidgetContainerEvents.minimizeWidget());
        }, 250);
        closeAll();
    }

    const handleAddContact = () => {
        setSelectedOption(mainOptions[1]);
    }

    return (
        <Container>
            <Header>
                <Title>Chats</Title>
                <HeaderIcons>
                    <IconButton 
                        disabled={!plusWidget}
                        onClick={() => {
                            if (plusWidget) {
                                closeAll();
                                changeProperty(
                                    plusWidget.id, 
                                    'size', 
                                    state[plusWidget.id].size === TWidgetSize.Opened ? TWidgetSize.Closed : TWidgetSize.Opened
                                );
                            }
                        }}
                    >
                        <PlusIcon size={20} color={theme.colors.primary.default} />
                    </IconButton>
                    <IconButton disabled={true}>
                        <FilterIcon size={20} color={theme.colors.primary.default} />
                    </IconButton>
                </HeaderIcons>
            </Header>
            <Search>
                <SearchInput placeholder='Search...' value={query} onChange={e => setQuery(e.currentTarget.value)} />
                <SearchIcon>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M23.384 21.619l-6.529-6.529a9.284 9.284 0 10-1.768 1.768l6.529 6.529a1.266 1.266 0 001.768 0 1.251 1.251 0 000-1.768zM2.75 9.5a6.75 6.75 0 116.75 6.75A6.758 6.758 0 012.75 9.5z"></path>
                    </svg>
                </SearchIcon>
            </Search>
            <CategoriesList />
            <Scrollbar>
                {_.sortBy(contactList, ['tag', 'name'])
                    .map((item: TPlaygroundContact) => (
                        <ChatCard 
                            key={item.id}
                            active={selected ? item.id === selected.id : false}
                            contact={item}
                            onClick={() => handleClick(item) }
                            onRemove={(e: any) => {
                                e.stopPropagation();
                                setSelected();
                                removeContact(item);
                            }}
                        />
                    )
                )}
                {contactList.length === 0 && contacts.length > 0 &&
                    <Empty 
                        type="mailbox"
                        title="No conversations found"
                    />
                }
                {contacts.length === 0 &&
                    <Empty 
                        type="mailbox"
                        title="No conversations found"
                        buttonLabel="Add a contact"
                        onButtonPress={handleAddContact}
                    />
                }
            </Scrollbar>
        </Container>
    );
}

export default Chat;