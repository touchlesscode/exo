import React, { useState, useEffect } from "react";
import styled from 'styled-components';

interface Tab {
    name: string;
    value: string;
    icon?: React.ReactNode;
}

interface TabsDefaultProps {
    activeTabIndex?: number;
    withoutBackground?: boolean;
}

interface TabsProps extends TabsDefaultProps {
    tabs: Tab[];
    onChangeTab?: (name: any) => void;
}

interface styledTabProps {
    isActive: boolean;
}

const TabsContainer = styled.div<TabsDefaultProps>`
    display: flex;
    height: 32px;
    width: auto;
    margin: 16px;
    padding: 2px;
    border-radius: 8px;
    box-shadow: inset 0 1px 2px ${p => p.theme.colors.backgrounds.spacer};
    cursor: pointer;
    background-color: ${p => p.theme.colors.backgrounds.secondary};
    border: ${p => p.withoutBackground && 'none'};
`;

const StyledTab = styled.div<styledTabProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 5px 1px;
    margin: auto;
    color: ${p => p.theme.colors.text.default};
    font-size: ${p => p.theme.fontSize.regular};
    /* Active Tab Style */
    background-color: ${p => p.isActive ? p.theme.colors.backgrounds.white : p.theme.colors.backgrounds.secondary};
    border-radius: ${ p => p.isActive && '0.375rem'};
    box-shadow: ${ p => p.isActive && '0 2px 2px ' + p.theme.colors.shadow.default};
    font-weight: ${ p => p.isActive && p.theme.fontWeight.bold};
`;

const Tabs = (props:TabsProps) => {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
    const { tabs, onChangeTab, withoutBackground } = props;

    useEffect(() => {
        if (props.activeTabIndex) {
            setActiveTabIndex(props.activeTabIndex)
        }
    }, [props.activeTabIndex]);

    const setActiveTab = (index: number, name: string) :void => {
        if (activeTabIndex !== index) {
            setActiveTabIndex(index);
        }
        if (onChangeTab) {
            onChangeTab(name);
        }
    }

    return (
        <TabsContainer withoutBackground = {withoutBackground}>
            {tabs.map((tab: Tab, index: number) => (
                <StyledTab
                    isActive={activeTabIndex === index}
                    onClick={ () => setActiveTab(index, tab.name)}
                    key={tab.name}>{tab.value}
                </StyledTab>
            ))}
        </TabsContainer>
    );
}

export default Tabs;
