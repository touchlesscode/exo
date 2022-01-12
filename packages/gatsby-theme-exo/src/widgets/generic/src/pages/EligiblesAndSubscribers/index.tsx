import React, { useState, useEffect, useContext } from 'react';
import Moment from 'react-moment';
import axios from 'axios';
import Loading from '../../components/Loading';
import ListItem from '../../components/ListItem';
import SvgLibrary from '../../svgs/SvgLibrary';
import useWidgetReady from '../../hooks/useWidgetReady';
import { UserContext } from '../../context/UserContext';
import { MainWrapper } from '../../components/Wrappers';
import Tabs from '../../components/Tabs/Tabs';
import { WidgetType, WidgetEvents, usePostEvent } from '../../hooks/widgetApi';
import useTextKitContext from '../../hooks/useTextKitContext';
import Empty from '../../svgs/Empty';
import { formatPhoneNumber } from '../../helpers/formatPhone';
import Spacer from '../../components/Spacer/Spacer';
import { EmptyContainer, ExpandedItem, InfoBlock, InfoWrapper, Phone, StyledDate, StyledLink, Title } from './index.styled';
import SetHtml from '../../components/SetHtml';
import orderBy from 'lodash/orderBy';

export interface Eligible {
    client_name: string;
    ban_id: string;
    campaign_details: any;
    device: string;
    device_type: string;
    eligible: number;
    phone_number: string;
    plan: string;
    is_primary: string;
    as_of: string;
    name: string;
}

export enum View {
    ELIGIBLES = 'eligibles',
    SUBSCRIBERS = 'subscribers'
}

enum PageView {
    LIST = 'list',
    DETAIL = 'detail'
}

const emptyEligible = {
    client_name: '',
    ban_id: '',
    campaign_details: [{campaign_title_description:{en:{title: ''}}}],
    device: '',
    device_type: '',
    eligible: 1,
    phone_number: '0000000000',
    plan: '',
    is_primary: '0',
    date_eligible: '1 Jan 2000'
}

const Eligibles = () => {
    const { expanded, dealerId, token, setExpanded } = useContext(UserContext);
    const { error, data, loading: contextLoading, reloadContact } = useTextKitContext();
    const [init, setInit] = useState<boolean>(false);
    const [apiError, setApiError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [subscribers, setSubscribers] = useState<Eligible[]>([]);
    const [eligibles, setEligibles] = useState<Eligible[]>([]);
    const [pageView, setPageView] = useState<PageView>(PageView.LIST);
    const [view, setView] = useState<View>(View.ELIGIBLES);
    const [selectedItem, setSelectedItem] = useState<Eligible>();
    const postEvent = usePostEvent(window);

    const ready = useWidgetReady({
        type: WidgetType.Default,
        label: "",
        header: 'Eligibles (0) / Subscribers (0)',
        footer: "View More"
    });

    let tabsData = [
        {name: View.ELIGIBLES, value: `Eligibles (${eligibles.length})`},
        {name: View.SUBSCRIBERS, value: `Subscribers (${subscribers.length})`}
    ];

    const generateHeaderMessage = (): string => {
        if (expanded) {
            return 'Eligibles / Subscribers'
        }
        return `Eligibles (${eligibles.length}) / Subscribers (${subscribers.length})`
    }

    useEffect(() => {
        if (ready && !init) {
            setInit(true);
        }
    }, [init, ready]);

    useEffect(() => {
        const generateButtonMessage = (): string => {
            if (view === View.ELIGIBLES ? eligibles.length <= 4 : subscribers.length <=4) {
                return 'View More';
            }
            return  view === View.ELIGIBLES ? `See ${eligibles.length - 4} more eligible${eligibles.length === 1 ? '' : 's'}` : `See ${subscribers.length - 4} more subscriber${subscribers.length === 1 ? '' : 's'}`;
        }

        if ( postEvent && subscribers.length) {
            postEvent(WidgetEvents.setHeader(generateHeaderMessage()));
            expanded ? postEvent(WidgetEvents.setFooter('')) : postEvent(WidgetEvents.setFooter(generateButtonMessage()));
            setInit(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [init, postEvent, expanded, subscribers, eligibles, view]);

    useEffect(() => {
        if (!contextLoading && data && data.account_id && dealerId && token) {
            setLoading(true);
            axios
                .get(
                    `${process.env.REACT_APP_GATEWAY_API}/dealers/${dealerId}/eligibles-subscribers?ban_id=${data.account_id}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                )
                .then(res => {
                    const {eligibles, subscribers} = res.data.eligible_subscribers;
                    if (subscribers && subscribers.records.length) {
                        const sortedSubscribers = orderBy(subscribers.records, ['is_primary', 'eligible'], ['desc', 'desc']);
                        setSubscribers(sortedSubscribers);
                    }
                    if (eligibles && eligibles.records.length) {
                        const sortedEligibles = orderBy(eligibles.records, ['is_primary'], ['desc']);
                        setEligibles(sortedEligibles);
                    }
                    setPageView(PageView.LIST);
                })
                .catch(() => {
                    setApiError(true);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dealerId, contextLoading, data, token]);

    useEffect(() => {
        if (!expanded) {
            setSelectedItem(undefined);
            setPageView(PageView.LIST);
            setView(View.ELIGIBLES);
            postEvent(WidgetEvents.setHeader(generateHeaderMessage()));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [expanded, postEvent]);

    const handleRoute = (item: Eligible) => {
        setExpanded && setExpanded(true);
        postEvent(WidgetEvents.maximizeWidget());
        setSelectedItem(item);
        setPageView(PageView.DETAIL);
    }

    const renderTitle = (eligible: Eligible) => {
        return <Title>
                {!expanded && <SvgLibrary name={eligible.device_type.toLocaleLowerCase()} />} <Phone primary={eligible.is_primary}> {formatPhoneNumber(eligible.phone_number)} </Phone> {eligible.is_primary === '1' && <SvgLibrary name={'star'} />} {expanded && <StyledDate><Moment format={'MMM DD, YYYY'}>{eligible.as_of}</Moment> </StyledDate>}
            </Title>
    }

    const renderItem = (campaign: string, plan: string, device: string, deviceName: string, subscriber = false) => {
        if (!expanded) {
            return <>
                <span className="list-item__campaign">{campaign}</span>
            </>
        }

        return (
            <ExpandedItem>
                {!subscriber && <div>{campaign}</div>}
                <div><SvgLibrary name={device} /> {(deviceName && deviceName.toUpperCase()) || 'N/A'}</div>
                <div>{!plan || plan.length === 0 ?'N/A' : plan}</div>
            </ExpandedItem>
        );
    }

    const renderList = (arr: Eligible[]) => {
        return arr.map( (item: Eligible, index) => {
            if (!expanded && index>=4) {
                return null;
            }
            const {campaign_details: campaignDetails, plan, device_type: deviceType, device} = item;
            const campaigTitle = campaignDetails ? campaignDetails[0].campaign_title_description.en.title : 'N/A';
            return <StyledLink
                        key={item.phone_number + index}
                        style={{pointerEvents: loading ? "none" : undefined}}
                        onClick={ () => handleRoute(item)}
                    >
                    <ListItem
                        showDivider={index < (arr.length - 1)}
                        key={item.phone_number + index}
                        hoverState={!loading}
                        title={renderTitle(item)}
                        value={renderItem(campaigTitle, plan, deviceType.toLocaleLowerCase(), device, item.eligible === 0)}
                    />
            </StyledLink>
        });
    }

    const renderEmpty = () => {
        return (
            <EmptyContainer expanded>
                <Empty />
                <div>No Eligibles Yet</div>
                <div>All eligible accounts will appear in this tab</div>
            </EmptyContainer>
        );
    }

    const Skeleton = () => {
        return (
            <MainWrapper noPad>
                {renderList(Array(4).fill(emptyEligible))}
            </MainWrapper>
        );
    }

    const renderListPage = () => (
        <>
            {expanded && <Tabs tabs={tabsData} activeTabIndex={tabsData.map( tab =>{ return tab.name }).indexOf(view)} onChangeTab={setView} />}
            {expanded && <Spacer />}
            { view === View.ELIGIBLES ? (eligibles.length ? renderList(eligibles) : renderEmpty()) : renderList(subscribers)}
        </>
    );

    const renderDetailPage = () => {
        if (!selectedItem) return null;

        const {client_name: clientName, phone_number: phoneNumber, as_of, device, plan, campaign_details: campaignDetails, device_type: deviceType, eligible} = selectedItem;
        const headings: string[] = ['Full Name', 'Phone Number', 'Device', 'Plan', 'As of'];
        const checkedPlan = !plan || plan.length === 0 ?'N/A' : plan;
        const data: string[] = [clientName, formatPhoneNumber(phoneNumber), device, checkedPlan, as_of];
        const {campaign_title_description: campaignInfo} = (campaignDetails && campaignDetails[0])|| {};
        postEvent(WidgetEvents.setHeader(data[1]));

        return (
            <>
                <Spacer />
                <InfoWrapper>
                    {headings.map((item, index) => {
                        if (index === headings.length - 1 && view === View.SUBSCRIBERS) {
                            return <div></div>;
                        }
                        return <InfoBlock key={item + index}>
                            <div>{item}</div>
                            <div>{index === 2 && <SvgLibrary name={deviceType.toLowerCase()} />} {data[index]}</div>
                        </InfoBlock>
                    })}
                </InfoWrapper>
                {eligible === 1 && <Spacer />}
                {eligible === 1 && 
                    <SetHtml 
                        title={campaignInfo.en.title} 
                        value={campaignInfo.en.description} 
                        daysLeft={campaignDetails[0].remaining_days}
                        dateRetired={campaignDetails[0].date_retired} 
                    />
                }
            </>
        );
    }

    return (
        <Loading 
            loading={!ready || loading || contextLoading} 
            error={error || apiError} 
            showSkeleton={false}
            skeleton={<Skeleton />}
            onRefresh={reloadContact}
        >
            <MainWrapper noPad>
                {(pageView === PageView.LIST) ? renderListPage() : renderDetailPage()}
            </MainWrapper>
        </Loading>
    );
}

export default Eligibles;