import React, { useContext, useEffect, useState, useReducer } from 'react';
import { WidgetType } from '../../hooks/widgetApi';
import { UserContext } from '../../context/UserContext';
import useWidgetReady from '../../hooks/useWidgetReady';
import { Option } from '../../components/Dropdown';
import Compact from './views/Compact';
import { STAGES, } from './labelsData';
import useTextKitContext, { TApiResponse } from '../../hooks/useTextKitContext';
import { OpportunityContext } from './utils';
import List from './views/List';
import View from './views/View';
import Create from './views/Create';
import { TProducts } from './components/ProductSelection';
import axios from 'axios';
import { capitalize } from 'src/helpers/capitalize';
import Loading from '../../components/Loading';

type TState = 'compact' | 'list' | 'view' | 'form';

export interface TOpportunityContext {
    tags: any[];
    opportunities: OpportuniesBody[];
    reasons: Option[];
    products: Option[];
    setState: React.Dispatch<React.SetStateAction<TState>>;
    opportunity: OpportuniesBody | null;
    setOpportunity: React.Dispatch<React.SetStateAction<OpportuniesBody|null>>;
    dispatch: React.Dispatch<OpportunityAction>;
    contactData?: TApiResponse;
    usersData: Option[];
}

export interface TProductItem {
    id: string;
    label: string;
    qty: string;
}

export interface TOpportunity {
    id: string;
    number: string;
    stage: string;
    closed?: string;
    notes: string|null;
    date: string|null;
    owner: string;
    createdBy: string;
    createdAt: string;
}

export interface OpportuniesBody {
    opportunity: TOpportunity;
    products: TProducts[];
}

export interface OpportunityAction {
    type: string;
    payload: any;
}

export interface TUser {
    firstName: string;
    id: number;
    lastName: string[];
    salesRepIds: string[];
}

const opportunityReducer = (state: OpportuniesBody[], action:OpportunityAction): OpportuniesBody[] => {
    switch (action.type) {
        case 'load':
            return [...action.payload];
        case 'add':
            return [...state, action.payload];
        case 'delete':{
            const updatedState = state.filter( opportunity => opportunity.opportunity.id !== action.payload);
            return [...updatedState];
        }
        case 'update': {
            const positionArr = state.map( el => el.opportunity.id);
            const index = positionArr.indexOf(action.payload.opportunity.id);
            const newState = [...state];
            newState.splice(index, 1, action.payload);
            return newState;
        }
        default:
            return state
        }
};

const Opportunity = () => {
    const ready = useWidgetReady({
        type: WidgetType.Default,
        label: "",
        header: "Opportunities",
        footer: "Show more"
    });

    const [init, setInit] = useState<boolean>(false);
    const { expanded, token, userId, entityId } = useContext(UserContext);
    const { data, error, loading: contextLoading, reloadContact } = useTextKitContext();
    const [state, setState] = useState<TState>('compact');
    const [opportunity, setOpportunity] = useState<OpportuniesBody|null>(null);
    const [products, setProducts] = useState<Option[]>([]);
    const [reasons, setReasons] = useState<Option[]>([]);
    const [newState, dispatch] = useReducer(opportunityReducer, []);
    const [usersData, setUsersData] = useState<Option[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const parseOppProduts = (opportunity: any): TProducts[] => {
        if (opportunity.products.length > 0) {
            const parsedOppProducts = opportunity.products.map((product: any) => {
                return {
                    amount: product.amount,
                    product: {id: product.product_id,
                    label: product.product_name,
                    value: product.product_name}
                }
            });
            return parsedOppProducts;
        }
        return [];
    }

    const parseUsers = (users: TUser[]): Option[] => {
        if (users.length > 1) {
            const parsedUsers = users.map( (user: TUser) => {
                return {
                    id: user.id,
                    label: `${user.firstName} ${user.lastName}`,
                    value: user.salesRepIds[0],
                }
            });
            return parsedUsers;
        }
        return [];
    }

    useEffect(() => {
        if (!init && ready) {
            setInit(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [init, ready]);

    useEffect(() => {
        const requestHeaders = {
            'Authorization': `Bearer ${token}`
        };

        if (data && token) {
            axios.get(
                `${process.env.REACT_APP_GATEWAY_API}/api/v1/metadata/${entityId}?metadata=closed_reasons`,
                {
                headers: requestHeaders
                }
            ).then( res => {
                const reasons = res.data.closed_reasons[0].value;
                const reasonsArr = reasons.replace(/[[\]]/g, '').split(',');
                const parsedReasons: Option[] = reasonsArr.map( (reason: string, index: string) => {
                    return {id: index, label: capitalize(reason), value: index}
                });
                setReasons(parsedReasons);
            });

            axios.get(
                `${process.env.REACT_APP_GATEWAY_API}/api/v1/opportunities/products/entity/${entityId}?show_generic_products=false&show_carrier_products=true`,
                {
                    headers: requestHeaders
                }
            ).then( res => {
                const productsData = res.data.categories;
                const parsedData = [];
                for (let key in productsData) {
                    const productLabel = key.replace('_', ' ');
                    const parsedOptions = productsData[key].products.map( (option: any) => {
                        return {
                            id: option.id,
                            label: option.product_name,
                            value: option.product_name
                        }
                    });
                    parsedData.push({
                        id:productsData[key].category_id,
                        label:capitalize(productLabel),
                        options: parsedOptions
                    });
                }
                setProducts(parsedData);
            });

            axios.get(
                `${process.env.REACT_APP_GATEWAY_API}/api/v1/opportunities/users/entity/${entityId}`,
                {
                    headers: requestHeaders
                }
            ).then( res => {
                const parsedData = parseUsers(res.data);
                setUsersData(parsedData);
            });

            axios.get(
                `${process.env.REACT_APP_GATEWAY_API}/api/v1/opportunities/entity/${entityId}?id=${data.account_id}`,
                {
                    headers: requestHeaders
                }
            ).then( res => {
                const oppsData = res.data.opportunities;
                const parsedOpps = oppsData.filter( (opportunity: any ) => opportunity?.opportunity.user_id.toString() === userId).map( (opportunity: any) => {
                    const {opportunity: currentOpp} = opportunity;
                    return {
                        opportunity: {
                            id: currentOpp.id,
                            number: currentOpp.opportunity_number.toString(),
                            products: opportunity.products,
                            stage: currentOpp.stage.toString(),
                            closed: capitalize(currentOpp.stage_status),
                            notes: currentOpp.notes ?? '',
                            date: currentOpp.next_step_date,
                            owner: currentOpp.user_id,
                            createdBy: currentOpp.user_id,
                            createdAt: new Date(currentOpp.date_added).toLocaleString(),
                        },
                        products: parseOppProduts(opportunity),
                    }
                });
                dispatch({type: 'load', payload: parsedOpps});
                setLoading(false);
            });
        }
    }, [data, token, entityId, userId, entityId]);

    useEffect(() => {
        if (!expanded) {
            setState('compact');
        }

        if (expanded && state !== 'form' && state !== 'view') {
            setState('list');
        }
    }, [expanded, state]);

    return (
        <Loading
            loading={loading || contextLoading}
            error={error}
            onRefresh={reloadContact}
        >
            <OpportunityContext.Provider value={{
                opportunities: newState,
                tags: STAGES,
                reasons,
                products,
                setState,
                opportunity,
                setOpportunity,
                dispatch,
                contactData: data,
                usersData,
            }}>
                {state === 'compact' && <Compact loading={loading} />}
                {state === 'list' && <List />}
                {state === 'view' && <View />}
                {state === 'form' && <Create />}
            </OpportunityContext.Provider>
        </Loading>
    )
}

export default Opportunity;