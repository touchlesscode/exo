import React, { useContext, useEffect, useState } from 'react';
import { getClosed, getTag, getUsers, OpportunityContext } from '../utils';
import { UserContext } from 'src/context/UserContext';
import { WidgetEvents } from '../../../hooks/widgetApi';
import Form, { FormState } from './Form';
import axios from 'axios';

const View = () => {
    const { opportunity, setState, dispatch, contactData, usersData, reasons } = useContext(OpportunityContext);
    const { token, dealerId, userId, postEvent, setExpanded} = useContext(UserContext);
    const [formState, setFormState] = useState<FormState>();

    useEffect(() => {
        opportunity && setFormState({
            id: opportunity.opportunity.id,
            products: opportunity.products,
            stage: getTag(opportunity.opportunity.stage),
            closed: getClosed(opportunity.opportunity.closed, reasons),
            notes: opportunity.opportunity.notes ?? '',
            date: opportunity.opportunity.date,
            owner: getUsers(opportunity.opportunity.owner, usersData),
            createdBy: getUsers(opportunity.opportunity.createdAt, usersData).label,
            createdAt: opportunity.opportunity.createdAt
        })
    }, [opportunity, usersData, reasons]);

    if (!opportunity) {
        return null;
    }

    const handleRedirect = () => {
        postEvent(WidgetEvents.minimizeWidget());
        setState('compact');
        if (setExpanded) {
            setExpanded(false);
        }
    }

    const handleUpdate = () => {
        const parsedProducts = formState?.products.map( product => {
            return {product_id:product.product?.id, amount: product.amount}
        });
        axios.put(
            `${process.env.REACT_APP_GATEWAY_API}/api/v1/opportunities/${opportunity.opportunity.id}`,
            {
                dealer_id: typeof dealerId === 'string' && parseInt(dealerId),
                assoc_id: contactData?.account_id,
                created_by: typeof userId === 'string' && parseInt(userId),
                stage: formState?.stage.id,
                stage_status: formState?.closed ? formState.closed.label : '',
                notes: formState?.notes,
                next_step_date: formState?.date,
                stage_reason: formState?.stage.label,
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
                const updatedOpp = formState && {
                    opportunity : {
                        id: formState.id,
                        stage: formState.stage.value,
                        closed: formState.closed?.label,
                        notes: formState.notes,
                        date: formState.date,
                        createdBy: '',
                        createdAt: new Date().toLocaleString(),
                        owner: formState.owner.id,
                        number: opportunity.opportunity.number
                    },
                    products: formState.products
                }
                dispatch({type: 'update', payload: updatedOpp});
                if (userId !== formState?.owner.id.toString()) {
                    dispatch({type: 'delete', payload: formState?.id})
                }
                handleRedirect();
            }
        });
    }

    const handleDelete = (): void => {
        axios.delete(
            `${process.env.REACT_APP_GATEWAY_API}/api/v1/opportunities/${opportunity.opportunity.id}/dealer/${dealerId}?ban_id=${contactData?.account_id}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            },
        ).then(resp => {
            if (resp.status === 200) {
                handleRedirect();
                if (formState) {
                    dispatch({type: 'delete', payload: formState.id})
                }
            }
        })
    }

    return (
        <Form
            title={`Opportunity #${opportunity.opportunity.number}`}
            opportunity={{
                id: opportunity.opportunity.id,
                products: opportunity.products,
                stage: getTag(opportunity.opportunity.stage),
                closed: getClosed(opportunity.opportunity.closed, reasons),
                notes: opportunity.opportunity.notes ?? '',
                date: opportunity.opportunity.date,
                owner: getUsers(opportunity.opportunity.owner, usersData),
                createdBy: getUsers(opportunity.opportunity.owner, usersData).label,
                createdAt: opportunity.opportunity.createdAt
            }}
            onSubmit={() => handleUpdate()}
            onChange={(form) => setFormState(form)}
            onDelete={() => handleDelete()}
        />
    );
};

export default View;