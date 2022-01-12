import axios from 'axios';
import React, { useContext, useState } from 'react';
import { UserContext } from 'src/context/UserContext';
import { WidgetEvents } from '../../../hooks/widgetApi';
import { getUsers, OpportunityContext } from '../utils';
import Form, { FormState } from './Form';

const Create = () => {
    const { opportunities, tags, usersData, setState, dispatch, contactData } = useContext(OpportunityContext);
    const { token, dealerId, userId, postEvent, setExpanded} = useContext(UserContext);
    const [formState, setFormState] = useState<FormState>();
    
    const nextNumber = (): string => {
        if(opportunities.length) {
            const sortedOpps = opportunities.sort( (a, b) => parseInt(b.opportunity.number) - parseInt(a.opportunity.number));
            const nextNumber = parseInt(sortedOpps[sortedOpps.length - 1].opportunity.number) + 1
            return nextNumber.toString();
        }
        return '1';
    }

    const handleRedirect = () => {
        postEvent(WidgetEvents.minimizeWidget());
        setState('compact');
        if (setExpanded) {
            setExpanded(false);
        }
    }

    const handleCreate = () => {
        const parsedProducts = formState?.products.map( product => {
            return {product_id:product.product?.id, amount: product.amount}
        });
        axios.post(
            `${process.env.REACT_APP_GATEWAY_API}/api/v1/opportunities/`,
            {
                dealer_id: typeof dealerId === 'string' && parseInt(dealerId),
                assoc_id: contactData?.account_id,
                created_by: typeof userId === 'string' && parseInt(userId),
                stage: formState?.stage.id,
                stage_status: formState?.closed ? formState.closed.label : '',
                notes: formState?.notes,
                stage_reason: formState?.stage.label,
                next_step_date: formState?.date,
                products: parsedProducts,
                sales_rep_id: formState?.owner.value,
                // Leave this hardcoded for now.
                stages: 5,
            },
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            },
        ).then( resp => {
            if (resp.status === 200) {
                const newOpp = formState && {
                    opportunity : {
                        id: resp.data.id,
                        stage: formState.stage.value,
                        closed: formState.closed?.label,
                        notes: formState.notes,
                        date: formState.date,
                        owner: userId,
                        createdAt: new Date().toLocaleString(),
                        sales_rep_id: formState.owner.value,
                        number: resp.data.opportunity_number
                    },
                    products: formState.products
                }
                dispatch({type: 'add', payload: newOpp});
                if (userId !== formState?.owner.id.toString()) {
                    dispatch({type: 'delete', payload: resp.data.id})
                }
                handleRedirect();
            }
        });
    }

    return (
        <Form 
            title={`New Opportunity`}
            opportunity={{
                id: nextNumber(),
                products: [{ product: null, amount: '1' }],
                stage: tags[0],
                closed: undefined,
                notes: '',
                date: null,
                owner: userId ? getUsers(userId, usersData) : getUsers('', usersData),
                createdBy: userId ? getUsers(userId, usersData).label : getUsers('', usersData).label,
                createdAt: '02/03/2021, 02:45 PM'
            }}
            onSubmit={() => handleCreate()}
            onChange={(form) => setFormState(form)}
        />
    );
};

export default Create;