import React from 'react';
import { useTheme } from 'styled-components';
import EmojiIcon from '../../icons/Emoji';
import PlusIcon from '../../icons/Plus';
import SendIcon from '../../icons/Send';
import IconButton from '../IconButton';
import ContactTab from './ContactTab';
import { ContentArea, Header, MessageBar, SampleInput, StatusWrapper, Wrapper, StatusTitle, StatusLabel, StatusArrow } from './index.styled';
import LogTab from './LogTab';
import ManageWidgetTab from './ManageWidgetTab';
import { ContactContext, TContactContextState } from '../../providers/ContactProvider';
import Dropdown from '../Dropdown';
import ArrowDownIcon from '../../icons/ArrowDown';
import { AppContext, TAppContext } from '../../providers/AppContext';
import { TWidgetContextState, WidgetContext } from '../../providers/WidgetProvider';

const Body = () => {
    const theme = useTheme();
    const { setSelectedOption, selectedOption, mainOptions } = React.useContext<TAppContext>(AppContext);
    const { allWidgets, initialized } = React.useContext<TWidgetContextState>(WidgetContext);
    const { selected } = React.useContext<TContactContextState>(ContactContext);

    React.useEffect(() => {
        if (initialized && allWidgets.length === 0) {
            setSelectedOption(mainOptions[2]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allWidgets, initialized]);

    return (
        <Wrapper>
            <Header>
                <h2>{selected ? selected.name : `No user selected`}</h2>
                <Dropdown 
                    label="selection"
                    hideLabel={true}
                    selected={selectedOption}
                    options={mainOptions}
                    onChange={(option) => setSelectedOption(option)}
                    renderDisplay={() => (
                        <StatusWrapper className="c-chat-status-option-selected c-chat-status-option-selected__TO_BE_CONTACTED">
                            <StatusTitle className="c-chat-status-option-selected__header c-chat-status-option-selected__header__TO_BE_CONTACTED">
                                Manage playground
                            </StatusTitle>
                            <StatusLabel className="c-chat-status-option-selected__label c-chat-status-option-selected__label__TO_BE_CONTACTED">
                                {selectedOption.label}
                                <StatusArrow className="c-chat-status-option-selected__icon">
                                    <ArrowDownIcon />
                                </StatusArrow>
                            </StatusLabel>
                        </StatusWrapper>
                    )}
                />
            </Header>

            <ContentArea>
                <LogTab visible={selectedOption.value === 'logs'} />
                <ContactTab visible={selectedOption.value === 'addcontact'} />
                <ManageWidgetTab visible={selectedOption.value === 'managewidgets'} />
            </ContentArea>

            <MessageBar>
                <IconButton disabled={true}>
                    <PlusIcon size={14} color={theme.colors.text.l2} />
                </IconButton>
                <IconButton disabled={true}>
                    <EmojiIcon size={16} color={theme.colors.text.l2} />
                </IconButton>
                <SampleInput>Type your message</SampleInput>
                <IconButton disabled={true}>
                    <SendIcon />
                </IconButton>
            </MessageBar>
        </Wrapper>
    )
}

export default Body;