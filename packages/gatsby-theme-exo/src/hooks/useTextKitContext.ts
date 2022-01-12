import { useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { UserContext } from '@exo/context/UserContext';
import WidgetEvents from '@exo/widgetApi/events';

export interface TApiResponse {
    client_name: string;
    primary_contact: string;
    unit_number: string;
    account_id: string | null;
    account_status: string | null;
    sales_rep_first_name: string | null;
    sales_rep_last_name: string | null;
    store: string | null;
    district: string | null;
    region: string | null;
    email: string | null;
}

export interface TTextKitContext {
    error: boolean;
    data: TApiResponse | undefined;
    loading: boolean;
    reloadContact: () => void;
}

export default function useTextKitContext(): TTextKitContext {
    const { event, token, dealerId } = useContext(UserContext);
    const [savedEvent, setSavedEvent] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [data, setData] = useState<TApiResponse>();

    const makeApiCall = useCallback(async (id: string) => {
        try {
            const response = await axios.get<TApiResponse>(`${process.env.REACT_APP_GATEWAY_API}/api/v1/customer-overview/${dealerId}/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const resp = response.data;

            setData(resp);
            setLoading(false);

            if (resp.account_id === null || resp.account_id === 'N/A')
            {
                setError(true);
            }

        } catch (e) {
            setError(true);
            setLoading(false);
        }
    }, [dealerId, token]);

    const reloadContact = () => {
        setLoading(true);
        setError(false);
        makeApiCall(savedEvent.external.externalId);
    }

    useEffect(() => {
        if (event) {
            switch (event.type) {
                /**
                 * value: { external: { externalId: "", metadata: {}}, conversationId: "", campaignId: ""}
                 */
                case WidgetEvents.ReceivableEvents.contextChanged:
                    if (event.value.external) {
                        setSavedEvent(event.value);
                        setLoading(true);
                        setError(false);
                        makeApiCall(event.value.external.externalId);
                    }
                    break;
            }
        }
    }, [event, makeApiCall]);

    return {
        error,
        data,
        loading,
        reloadContact,
    }
}