import React, { useContext } from 'react';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';
import ListItem from '../../../../components/ListItem';
import Loading from '../../../../components/Loading';
import { UserContext } from '../../../../context/UserContext';
import { MainWrapper } from '../../../../components/Wrappers';
import { WidgetType } from '../../../../hooks/widgetApi';
import Clipboard from '../../../../icons/Clipboard';
import useWidgetReady from '../../../../hooks/useWidgetReady';
import useTextKitContext from '../../../../hooks/useTextKitContext';

const IconHolder = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    color: ${p => p.theme.colors.primary.default};
    cursor: pointer;
    margin-left: 8px;
    
    &:active, &:focus {
        opacity: 0.75;
    }
`

const Contact = () => {
    const ready = useWidgetReady({
        type: WidgetType.Default,
        label: "",
        header: "Overview",
        footer: "Show more"
    });
    const { expanded } = useContext(UserContext);
    const { error, data, loading, reloadContact } = useTextKitContext();
    
    const copyAccountId = () => {
        if (data?.account_id) {
            copy(data.account_id);
        }
    }

    return (
        <Loading loading={!ready || loading || data === undefined} error={error} onRefresh={reloadContact}>
            <MainWrapper>
                <ListItem 
                    title='BAN ID' 
                    value={data?.account_id} 
                    icon={
                        <IconHolder onClick={copyAccountId}>
                            <Clipboard width={16} height={17} color={'currentColor'} />
                        </IconHolder>
                    } 
                />
                <ListItem title='Current Rep' value={`${data?.sales_rep_first_name} ${data?.sales_rep_last_name}`} />
                <ListItem title='Store' value={data?.store} />
                {expanded && (
                    <>
                        <ListItem
                            title='Account Status'
                            value={data?.account_status}
                        />
                        <ListItem
                            title='District'
                            value={data?.district}
                        />
                        <ListItem
                            title='Region'
                            value={data?.region}
                        />
                        <ListItem
                            title='Email'
                            value={data?.email}
                        />
                    </>
                )}
            </MainWrapper>
        </Loading>
    )
}

export default Contact
