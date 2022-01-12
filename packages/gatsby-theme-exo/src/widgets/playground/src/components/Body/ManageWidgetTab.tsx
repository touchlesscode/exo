import React from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import { TWidgetContextState, TWidgetUrl, WidgetContext } from "../../providers/WidgetProvider";
import Button from "../Button";
import Empty from "../Empty";
import { ContentBox, SuccessBox, TabContent, WidgetListItem, WidgetListWrapper } from "./index.styled";
import { WidgetType } from "../../hooks/widgetApi";
import Dropdown, { Option } from "../Dropdown";
import TextInput from "../TextInput";

interface ManageWidgetProps { 
    visible: boolean;
}

const options: Option[] = [
    { id: '1', value: WidgetType.Default, label: WidgetType.Default },
    { id: '2', value: WidgetType.Action, label: WidgetType.Action },
    { id: '3', value: WidgetType.Timeline, label: WidgetType.Timeline },
    { id: '4', value: WidgetType.Add, label: WidgetType.Add },
];

const ManageWidgetTab = ({ visible = false }: ManageWidgetProps) => {
    const { allWidgets, addWidget, removeWidget, changeWidgetState } = React.useContext<TWidgetContextState>(WidgetContext);
    const [url, setUrl] = React.useState<string>('');
    const [name, setName] = React.useState<string>('');
    const [sort, setSort] = React.useState<string>('0');
    const [type, setType] = React.useState<Option>(options[0]);

    const [success, setSuccess] = React.useState<string|null>(null);

    React.useEffect(() => {
        if (success) {
            setTimeout(() => {
                setSuccess(null);
            }, 2500);
        }
    }, [success]);

    const handleAddWidget = () => {
        const contact: TWidgetUrl = {
            id: uuidv4(),
            name,
            url,
            type: (type.value !== undefined) ? type.value : WidgetType.Default,
            order: sort,
            active: true,
        }
        addWidget(contact);
        setSuccess('Widget was added!');

        setUrl('');
        setName('');
        setSort('0');
        setType(options[0]);
    }

    return (
        <TabContent visible={visible}>
            <h3>Manage Widgets</h3>

            {success && 
                <SuccessBox>{success}</SuccessBox>
            }

            <ContentBox>
                <WidgetListWrapper>
                    {_.sortBy(allWidgets, ['type', 'order', 'title']).map((widget) => (
                        <WidgetListItem key={widget.id}>
                            <span className='title'>{widget.name}</span>
                            <span className='url'>{widget.url}</span>
                            {(widget.type === WidgetType.Action || widget.type === WidgetType.Default) &&
                                <span className='order'>{widget.order}</span>
                            }
                            <span className='tag'>{widget.type}</span>
                            <Button default={!widget.active} success={widget.active} onClick={() => {
                                changeWidgetState(widget, widget.active ? false : true);
                            }}>{widget.active ? `Disable` : `Enable`}</Button>
                            <Button onClick={() => {
                                setSuccess('Widget was removed!');
                                removeWidget(widget);
                            }}>Remove</Button>
                        </WidgetListItem>
                    ))}

                    {allWidgets.length === 0 && 
                        <Empty 
                            type="conversation"
                            title="No widgets found"
                        />
                    }
                </WidgetListWrapper>
            </ContentBox>

            <ContentBox>
                <div className="form">
                    <h3>Add Widget</h3>

                    <Dropdown 
                        label="Widget Type:"
                        options={options}
                        selected={type}
                        onChange={setType}
                    />
                    <TextInput 
                        name="name"
                        label={'Name:'}
                        onChange={e => setName(e.currentTarget.value)}
                        value={name}
                        placeholder="Name of widget"
                    />
                    <TextInput 
                        name="url"
                        label={'URL:'}
                        onChange={e => setUrl(e.currentTarget.value)}
                        value={url}
                        placeholder="Widget URL"
                    />
                    {(type.value === WidgetType.Default || type.value === WidgetType.Action) && 
                        <TextInput 
                            name="sort"
                            label={'Sort order:'}
                            type="number"
                            onChange={e => setSort(e.currentTarget.value)}
                            value={sort}
                            placeholder="Widget URL"
                        />
                    }
                    <div>
                        <Button onClick={handleAddWidget}>Submit</Button>
                    </div>
                </div>
            </ContentBox>            
        </TabContent>
    )
}

export default ManageWidgetTab;