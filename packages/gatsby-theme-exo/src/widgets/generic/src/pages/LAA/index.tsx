import React, { useCallback, useContext, useEffect } from 'react';

import { InfoWrapper, LogActivityWrapper, Name, Title } from './index.styled';
import useTextKitContext from '../../hooks/useTextKitContext';
import { UserContext } from '../../context/UserContext';
import { WidgetEvents, WidgetType } from '../../hooks/widgetApi';
import useActionWidget from '../../hooks/useActionWidget';
import useWidgetReady from '../../hooks/useWidgetReady';
import Loading from '../../components/Loading';

declare namespace __STFLO__PORTLET {
    function logActivity(id: string, options: {
        banId: string | null;
        language: string | null;
        formContext: string | null;
        sbs: boolean | null;
    }): void;
}

const LAA = () => {
    const ready = useWidgetReady({ 
        type: WidgetType.Action,
        label: "Log an Activity",
        header: "",
        footer: ""
    });
    useActionWidget(ready);
    const { postEvent } = useContext(UserContext);
    const { data, error, loading, reloadContact } = useTextKitContext();

    const resetForm = useCallback((data) => {
        const container = document.getElementById('log-activity-container');
        const el = document.getElementById('log-activity');

        if (el && container) {
            el.remove();
            const newEl = document.createElement('div');
            newEl.setAttribute('id', 'log-activity');
            container.appendChild(newEl);
        }

        __STFLO__PORTLET.logActivity('#log-activity', {
            banId: data.account_id,
            language: 'en',
            formContext: 'widget',
            sbs: null
        });
    }, []);

    const onSubmit = useCallback(() => {
        postEvent(WidgetEvents.emitEvent({
            timeline: 'refresh'
        }));
        postEvent(WidgetEvents.closeWidget());
        resetForm(data);
    }, [postEvent, resetForm, data]);

    const onCancel = useCallback(() => {
        postEvent(WidgetEvents.closeWidget());
        resetForm(data);
    }, [postEvent, resetForm, data]);


    const onCreateFail = useCallback(() => {
        postEvent(WidgetEvents.actionCreationFailedEvent());
    }, [postEvent]);

    useEffect(() => {
        window.document.body.addEventListener('LAASubmit', onSubmit);
        window.document.body.addEventListener('LAACancel', onCancel);
        window.document.body.addEventListener('LAACreateFailed', onCreateFail);

        return () => {
            window.document.body.removeEventListener('LAASubmit', onSubmit);
            window.document.body.removeEventListener('LAACancel', onCancel);
            window.document.body.removeEventListener('LAACreateFailed', onCreateFail);
        }
    }, [onSubmit, onCancel, onCreateFail]);

    useEffect(() => {
        if (!loading && data) {
            resetForm(data);
        }
    }, [loading, data, resetForm]);

    return (
        <Loading loading={loading || !data} error={error} onRefresh={reloadContact}>
            {(data) ?
                (<LogActivityWrapper id="log-activity-container">
                    <InfoWrapper>
                        <Title>Logging Activity for</Title>
                        <Name>{data.primary_contact}</Name>
                    </InfoWrapper>
                    <div id="log-activity"></div>
                </LogActivityWrapper>) : <div />
            }
        </Loading>
    )
}

export default LAA;