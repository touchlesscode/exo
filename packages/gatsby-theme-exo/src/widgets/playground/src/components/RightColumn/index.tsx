import React from 'react';
import _ from 'lodash';
import { useTheme } from 'styled-components';
import { AppContext, TAppContext } from '../../providers/AppContext';
import MessageBubbleIcon from '../../icons/MessageBubble';
import PhoneIcon from '../../icons/Phone';
import PinIcon from '../../icons/Pin';
import Button from '../Button';
import Tabs from '../Tabs/Tabs';
import Widget from '../Widget';
import { ActionBar, ActionMenu, ActionMenuItem, InfoBox, ListItem, Scroller, Wrapper } from './index.styled';
import { ContactContext, TContactContextState } from '../../providers/ContactProvider';
import { TWidgetContextState, TWidgetSize, WidgetContext } from '../../providers/WidgetProvider';
import { WidgetType } from '../../hooks/widgetApi';

const RightColumn = () => {
    const theme = useTheme();
    const { state, defaultWidgets, timelineWidget, actionWidgets, plusWidget, changeProperty } = React.useContext<TWidgetContextState>(WidgetContext);
    const { selected } = React.useContext<TContactContextState>(ContactContext);
    const { rightTab, setRightTab } = React.useContext<TAppContext>(AppContext);
    const [actionOpen, setActionOpen] = React.useState<boolean>(false);

    return (
        <Wrapper>
            <InfoBox>
                <h2>{selected ? selected.name : `No user selected`}</h2>

                <ListItem>
                    <PinIcon color={theme.colors.text.l3} />
                    123 Main Street, ON, Canada
                </ListItem>
                <ListItem colored>
                    <PhoneIcon size={18} color={theme.colors.text.l3} />
                    +1 (416) 555-1212 (ext: 123)
                </ListItem>
                <ListItem>
                    <MessageBubbleIcon size={18} color={theme.colors.text.l3} />
                    Text Preferred | English
                </ListItem>

                <Tabs 
                    activeTabIndex={0}
                    tabs={[
                        { name: 'widgets', value: 'Widgets' },
                        { name: 'timeline', value: 'Timeline' },
                    ]}
                    onChangeTab={setRightTab}
                />
            </InfoBox>
            <Scroller scrollable={rightTab === 'widgets'}>
                {_.sortBy(defaultWidgets, ['order', 'title']).map(widget => (
                    <Widget 
                        key={widget.id}
                        visible={rightTab === 'widgets'}
                        widget={widget} 
                        state={state[widget.id]}
                    />
                ))}
                {timelineWidget && 
                    <Widget 
                        visible={rightTab === 'timeline'}
                        widget={timelineWidget}
                        state={state[timelineWidget.id]}
                    />
                }
                {_.sortBy(actionWidgets, ['order', 'title']).map(widget => (
                    <Widget 
                        key={widget.id}
                        visible={widget.type === WidgetType.Action && state[widget.id].size === TWidgetSize.Opened}
                        widget={widget} 
                        state={state[widget.id]}
                    />
                ))}
                {plusWidget &&
                    <Widget 
                        key={plusWidget.id}
                        visible={plusWidget.type === WidgetType.Add && state[plusWidget.id].size === TWidgetSize.Opened}
                        widget={plusWidget} 
                        state={state[plusWidget.id]}
                    />
                }
            </Scroller>
            <ActionBar>
                {actionOpen && 
                    <ActionMenu>
                        {actionWidgets.map(widget => state[widget.id].label.length > 0 ? (
                            <ActionMenuItem 
                                key={widget.id}
                                onClick={() => {
                                    changeProperty(widget.id, 'size', TWidgetSize.Opened);
                                    setActionOpen(false);
                                }}
                            >
                                {state[widget.id].label}
                            </ActionMenuItem>
                        ) : null )}
                    </ActionMenu>
                }
                <Button cancel={actionOpen} onClick={() => setActionOpen(!actionOpen)}>{actionOpen ? `Close` : `Actions`}</Button>
            </ActionBar>
        </Wrapper>
    )
}

export default RightColumn;