import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import SetHtml from '../components/SetHtml';
import Loading from '../components/Loading';
import { UserContext } from '../context/UserContext';
import { MainWrapper } from '../components/Wrappers';
import { WidgetType } from '../hooks/widgetApi';
import useTextKitContext from '../hooks/useTextKitContext';
import useWidgetReady from '../hooks/useWidgetReady';

interface TAppState {
    title: string | undefined;
    description: string | undefined;
}

interface TCampaignLanguage {
    [key: string]: {
        title: string;
        description: string;
    }
}

interface TCampaignResponse {
    call_list_name: string;
    call_list_id: string;
    campaign_title_description: TCampaignLanguage
}

interface TApiResponse {
    ban_id: string;
    dealer_id: string;
    campaign: TCampaignResponse[];
}

const Skeleton = () => {
    return (
        <MainWrapper>
            <SetHtml />
        </MainWrapper>
    )
}

const Description = () => {
    const ready = useWidgetReady({
        type: WidgetType.Default,
        label: "",
        header: "Campaign Description",
        footer: "Show more"
    });
    const { dealerId, token } = useContext(UserContext);
    const { error, data, loading: contextLoading, reloadContact } = useTextKitContext();
    const [loading, setLoading] = useState<boolean>(true);
    const [appState, setAppState] = useState<TAppState>({ title: undefined, description: undefined });

    useEffect(() => {
        if (!contextLoading && data && data.account_id && dealerId && token) {
            axios.get<TApiResponse>(
                `${process.env.REACT_APP_GATEWAY_API}/dealers/${dealerId}/ban-id/${data.account_id}/smart-lists/unit-number/${data.unit_number}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            ).then(data => {
                if (data.data.campaign) {
                    const campaign = data.data.campaign[0].campaign_title_description['en'];
                    setAppState(campaign);
                }
                setLoading(false);
            });
        }

        if (contextLoading) {
            setLoading(true);
        }
    }, [dealerId, contextLoading, data, token]);

    console.log('ready', ready);
    console.log('loading', loading);
    console.log('contextLoading', contextLoading);

    return (
        <Loading 
            loading={!ready || loading || contextLoading}
            error={error}
            showSkeleton={appState.title === undefined || appState.description === undefined}
            skeleton={<Skeleton />}
            onRefresh={reloadContact}
        >
            <MainWrapper>
                <SetHtml
                    title={appState.title}
                    value={appState.description}
                />
            </MainWrapper>
        </Loading>
    )
}

export default Description
