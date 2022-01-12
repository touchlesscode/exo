import React, { useContext, useEffect, useState } from 'react';
import Tabs from '../../../components/Tabs/Tabs';
import Spacer from '../../../components/Spacer/Spacer';
import ListItem from '../../../components/ListItem';
import Tag from '../../../components/Tag';
import { Scroller, WhiteBox, Wrapper } from '../index.styled';
import { getTagValue, OpportunityContext } from '../utils';
import { OpportuniesBody } from '..';
import Empty from 'src/svgs/Empty';

const List = () => {
    const { opportunities, setState, setOpportunity } = useContext(OpportunityContext);
    const [selectedTab, setSelectedTab] = useState<any>('active');
    const [tabs, setTabs] = useState<any[]>([]);
    const [list, setList] = useState<OpportuniesBody[]>([]);

    useEffect(() => {
        const filteredList = (selectedTab === 'active') ? 
            opportunities.filter(item => item.opportunity.stage !== '5') : 
            opportunities.filter(item => item.opportunity.stage === '5');
        setList(filteredList);
    }, [selectedTab, opportunities]);

    useEffect(() => {
        const total = opportunities.length;
        const active = opportunities.filter(item => item.opportunity.stage !== '5').length;

        setTabs([
            { name: 'active', value: `Active (${active})` },
            { name: 'closed', value: `Closed (${total - active})` },
        ]);

    }, [setTabs, opportunities]);

    const handleOnClick = (object: OpportuniesBody) => {
        setOpportunity(object);
        setState('view');
    }

    return (
        <Wrapper dark={true}>
            <WhiteBox>
                <Tabs 
                    activeTabIndex={0}
                    tabs={tabs}
                    onChangeTab={setSelectedTab}
                />
            </WhiteBox>
            <Spacer />
            <Scroller>
                {list
                    .map((item, index) => (
                        <ListItem
                            key={item.opportunity.id}
                            showDivider={index < (list.length - 1)}
                            small
                            tag={
                                <Tag
                                    color={item.opportunity.stage === '5' ? 'success' : 'warning'}
                                    label={getTagValue(item.opportunity.stage.toString())}
                                />
                            }
                            title={`Opportunity #${item.opportunity.number}`}
                            value={item.opportunity.notes}
                            date={item.opportunity.date}
                            onClick={() => handleOnClick(item)}
                        />
                    ))
                }
                {!list.length && 
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 24, paddingBottom: 24 }}>
                        <Empty />
                    </div>
                }
            </Scroller>
        </Wrapper>
    );
}

export default List;