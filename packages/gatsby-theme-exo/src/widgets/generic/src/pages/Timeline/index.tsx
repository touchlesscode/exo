import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from 'src/context/UserContext';
import useWidgetReady from 'src/hooks/useWidgetReady';
import { WidgetPullEvents, WidgetType } from 'src/hooks/widgetApi';
// import Search from 'src/icons/Search';
import { Container, Scroller, Wrapper } from './index.styled';
import Group from './components/Group';
// import FilterDropdown from './components/FilterDropdown';
import Empty from './components/Empty';
import Loading from 'src/components/Loading';
import Skeleton from './components/Skeleton';
import axios from 'axios';
import useTextKitContext from 'src/hooks/useTextKitContext';
import DNCEntry from './templates/DNCEntry';
import ContactUpdateEntry from './templates/ContactUpdateEntry';
import CallOutgoingEntry from './templates/CallOutgoingEntry';
// import CallIncomingEntry from './templates/CallIncomingEntry';
import AccessorySaleEntry from './templates/AccessorySaleEntry';
import ActivationEntry from './templates/ActivationEntry';
import TaskEntry from './templates/TaskEntry';
import RenewedEntry from './templates/RenewedEntry';
import OpportunityEntry from './templates/OpportunityEntry';
import NotesEntry from './templates/NotesEntry';
import MessageSentEntry from './templates/MessageSentEntry';
import MessageReceivedEntry from './templates/MessageReceivedEntry';
import LogActivityEntry from './templates/LogActivityEntry';

interface MessageCallType {
    talktime: string;
}

interface MessageStandardsType {
    id: string;
    message_type: string;
    timeline_language: string;
    timeline_icon: string;
    timeline_styling: string;
}

interface TimelineMessageType {
    account_name: string | null;
    addToCalendar: string | null;
    call: MessageCallType | null;
    cpm_detail: string | null;
    cpm_preview: string | null;
    cpm_type: string | null;
    merge_message: string | null;
    merged_users: any[];
    message: {
        action_taken: string;
        ban_id: string;
        carrier_id: string | null;
        date_added: string;
        dealer_id: string;
        display_date: string;
        duration: string | null;
        group_by: string;
        id: string;
        lead_id: string;
        message: string;
        message_from: string;
        message_to: string;
        next_date: string;
        next_steps: string;
        outcome_location: string;
        outcome_reason: string;
        record_owned: string;
        record_source: string;
        shortened_message: string;
        subject: string;
        transaction_date: string;
        type: string;
        user_id: string;
    };
    message_standards: MessageStandardsType | null;
    message_user: string;
    primary_contact: string;
    type: string;
}

export interface EntryProps {
    message: TimelineMessageType;
    open: boolean;
}

interface GroupedList {
    date: string;
    date_text: string;
    items: TimelineMessageType[];
}

const Timeline = () => {
    const ready = useWidgetReady({ 
        type: WidgetType.Timeline,
        label: "",
        header: "",
        footer: ""
    });
    const { maxHeight, setDefaultScroll, token, event } = useContext(UserContext);
    const { data, loading, error, reloadContact } = useTextKitContext();
    const [empty, setEmpty] = useState<boolean>(true);
    const [timelineLoading, setTimelineLoading] = useState<boolean>(false);
    const [timelineData, setTimelineData] = useState<GroupedList[]>([]);

    const getTimelineData = async (banId: string | null) => {
        if (banId === 'N/A') {
            console.error('User has no BanID associated with their account.');
            return;
        }
        if (banId) {
            const groupedList: GroupedList[] = [];
            setTimelineLoading(true);

            const resp = await axios.get<{ data: any}>(`${process.env.REACT_APP_WEBAPP_HOST}/v2/api/timeline?ban_id=${banId}&count=25`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (resp.data.data && resp.data.data !== "") {
                resp.data.data.forEach((message: any) => {
                    let added = false;

                    // Check and append message to list if date exists
                    groupedList.forEach(group => {
                        if (group.date === message.message.group_by) {
                            group.items.push({ ...message });
                            added = true;
                        }
                    });

                    // Add message to a new group entry
                    if(!added) {
                        groupedList.push({
                            date: message.message.group_by,
                            date_text: new Intl.DateTimeFormat(
                                'en-US', 
                                { 
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                    timeZone: 'UTC'
                                }).format(new Date(message.message.group_by)),
                            items: [{ ...message }]
                        });
                    }
                });

                setTimelineData(groupedList);
                setEmpty(resp.data.data.length === 0 ? true : false);
                setTimelineLoading(false);
            }
        }
    }

    useEffect(() => {
        setDefaultScroll(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!loading && (ready && data))
        {
            getTimelineData(data.account_id);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ready, loading, data]);

    useEffect(() => {
        if (data && event && event.type === WidgetPullEvents.receiveWidgetEvent && event.value.timeline === 'refresh')
        {
            getTimelineData(data.account_id);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, event]);

    return (
        <Loading 
            loading={loading}
            error={error}
            onRefresh={reloadContact}
            skeleton={<Skeleton height={256} />}
        >
            <Wrapper height={maxHeight}>
                {/* Not in-scope yet */}
                {/* <SearchContainer>
                    <Search color={theme.colors.text.l2} />
                    <SearchInput placeholder="Search" />
                    <FilterDropdown onChange={() => {}} />
                </SearchContainer> */}
                {timelineLoading &&
                    <Skeleton height={256} />
                }
                {!timelineLoading && empty && 
                    <Empty />
                }
                {!timelineLoading && !empty && 
                    <Scroller>
                        <Container>
                            {timelineData.map((group: GroupedList) => {
                                return (
                                    <Group key={group.date} date={group.date_text}>
                                        {open => (
                                            <>
                                                {group.items.map((message: any) => {
                                                    switch(message.message.type) {
                                                        case '1':
                                                            return (
                                                                <NotesEntry key={message.message.id} open={open} message={message} />
                                                            );
                                                        case '2':
                                                            switch(message.message.action_taken) {
                                                                case "Wrong number":
                                                                case "Interested":
                                                                    return (
                                                                        <LogActivityEntry key={message.message.id} open={open} message={message} />
                                                                    );
                                                                default:
                                                                    console.error('type 2 missing action', message.message.action_taken, message);
                                                                    return null;
                                                            }
                                                        case '3':
                                                            switch(message.message.action_taken) {
                                                                case "Left voicemail":
                                                                case "Sold":
                                                                case "Inaccurate Contact Information":
                                                                    return (
                                                                        <CallOutgoingEntry key={message.message.id} open={open} message={message} />
                                                                    );
                                                                case "Interested":
                                                                case "Not interested":
                                                                case "Conversation Closed":
                                                                    return (
                                                                        <LogActivityEntry key={message.message.id} open={open} message={message} />
                                                                    );
                                                                default:
                                                                    console.error('type 3 missing action', message.message.action_taken, message);
                                                                    return null;
                                                            }
                                                        case '4':
                                                            switch(message.message.action_taken) {
                                                                case "send":
                                                                    return (
                                                                        <MessageSentEntry key={message.message.id} open={open} message={message} />
                                                                    );
                                                                case "receive":
                                                                case "received":
                                                                    return (
                                                                        <MessageReceivedEntry key={message.message.id} open={open} message={message} />
                                                                    );
                                                                case "Transfer":
                                                                case "Sold":
                                                                case "Interested":
                                                                case "Not interested":
                                                                case "Conversation Closed":
                                                                case "Wrong number":
                                                                case "not_interested":
                                                                case "Left voicemail":
                                                                case "No answer":
                                                                    return (
                                                                        <LogActivityEntry key={message.message.id} open={open} message={message} />
                                                                    );
                                                                case "DNC":
                                                                    return (
                                                                        <DNCEntry key={message.message.id} open={open} message={message} />
                                                                    );
                                                                default:
                                                                    console.error('type 4 missing action', message.message.action_taken, message);
                                                                    return null;
                                                            }
                                                        case '5':
                                                            return (
                                                                <TaskEntry key={message.message.id} open={open} message={message} />
                                                            );
                                                        case "6":
                                                        case "99":
                                                            return (
                                                                <RenewedEntry key={message.message.id} open={open} message={message} />
                                                            );
                                                        case '7':
                                                            switch(message.message.action_taken) {
                                                                case "Left voicemail":
                                                                case "Sold":
                                                                    return (
                                                                        <CallOutgoingEntry key={message.message.id} open={open} message={message} />
                                                                    );
                                                                case "Contacts":
                                                                case "Account":
                                                                    return (
                                                                        <ContactUpdateEntry key={message.message.id} open={open} message={message} />
                                                                    );
                                                                case "Opportunity":
                                                                    return (
                                                                        <OpportunityEntry key={message.message.id} open={open} message={message} />
                                                                    );
                                                                default:
                                                                    console.error('type 7 missing action', message.message.action_taken, message);
                                                                    return null;
                                                            }
                                                        case '8':
                                                            return (
                                                                <ActivationEntry key={message.message.id} open={open} message={message} />
                                                            );
                                                        case '9':
                                                        case '10':
                                                        case '11':
                                                        case '12':
                                                        case '13':
                                                        case '14':
                                                        case '15':
                                                        case '17':
                                                        case '18':
                                                        case '19':
                                                        case '20':
                                                        case '22':
                                                        case '23':
                                                        case '25':
                                                        case '26':
                                                        case '27':
                                                        case '28':
                                                        case '29':
                                                        case '30':
                                                        case '31':
                                                        case '32':
                                                            return (
                                                                <AccessorySaleEntry key={message.message.id} open={open} message={message} />
                                                            );
                                                        case '24':
                                                        case '37':
                                                            return (
                                                                <DNCEntry key={message.message.id} open={open} message={message} />
                                                            );
                                                        // case "Call incoming":
                                                        //     return (
                                                        //         <CallIncomingEntry key={message.message.id} open={open} message={message} />
                                                        //     );
                                                        default:
                                                            console.error('missing entry type', message.type, message);
                                                            return null;
                                                    }
                                                })}
                                            </>
                                        )}
                                    </Group>
                                )
                            })}
                        </Container>
                    </Scroller>
                }
            </Wrapper>
        </Loading>
    );
}

export default Timeline;