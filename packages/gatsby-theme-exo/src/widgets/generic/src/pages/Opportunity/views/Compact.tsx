import React, { useContext } from 'react';
import Loader from "react-loader-spinner";
import AddButton from '../components/AddButton';
import { Wrapper } from '../index.styled';
import ListItem from '../../../components/ListItem';
import Tag from '../../../components/Tag';
import { getTagValue, OpportunityContext } from '../utils';
import { UserContext } from '../../../context/UserContext';
import { WidgetEvents } from '../../../hooks/widgetApi';
import { OpportuniesBody } from '..';
import { useTheme } from 'styled-components';
import Empty from 'src/svgs/Empty';

const Compact = ({ loading }: { loading: boolean }) => {
    const theme = useTheme();
    const { postEvent, setExpanded } = useContext(UserContext);
    const { opportunities, setState, setOpportunity, usersData } = useContext(OpportunityContext);

    const handleAddNew = () => {
        postEvent(WidgetEvents.maximizeWidget());
        if (setExpanded) {
            setExpanded(true);
            setState('form');
        }
    }

    const handleOnClick = (object: OpportuniesBody) => {
        postEvent(WidgetEvents.maximizeWidget());
        setOpportunity(object);
        if (setExpanded) {
            setExpanded(true);
            setState('view');
        }
    }
    
    return (
        <Wrapper>
            <AddButton full={true} label="Add Opportunity" onClick={handleAddNew} />
            {loading && 
                <div style={{ paddingTop: 24, paddingBottom: 24 }}>
                    <Loader
                        type="Rings"
                        color={theme.colors.primary.default}
                        height={75}
                        width={75}
                    />
                    <p style={{
                        fontSize: theme.fontSize.small,
                        fontWeight: theme.fontWeight.medium,
                        color: theme.colors.text.l2,
                    }}>Loading</p>
                </div>
            }
            {(opportunities.length && usersData?.length) ? opportunities
                .filter(item => item.opportunity.stage !== '5')
                .map((item, index, arr) => (
                    <ListItem
                        key={item.opportunity.id}
                        showDivider={index < (arr.length - 1)}
                        small
                        tag={
                            <Tag
                                color={item.opportunity.stage === '5' ? 'success' : 'warning'}
                                label={getTagValue(item.opportunity.stage.toString())}
                            />
                        }
                        title={`Opportunity #${item.opportunity.number}`}
                        value={item.opportunity.notes}
                        onClick={() => handleOnClick(item)}
                    />
                )) :
                !loading ? <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 24, paddingBottom: 24 }}>
                    <Empty />
                </div> : null
            }
        </Wrapper>
    );
}

export default Compact;