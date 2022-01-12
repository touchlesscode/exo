import React from "react";
import { TLogType } from "../../providers/LogProvider";
import { TWidgetUrl } from "../../providers/WidgetProvider";
import Button from "../Button";
import Dropdown, { Option } from "../Dropdown";
import { Content, EntryDate, EntryEventName, EntryEventType, EntryEventValue, EntryWrapper, Footer, Header, Wrapper } from "./index.styled";

interface LogProps {
    title: string;
    log: TLogType[];
    widgets?: TWidgetUrl[];
    onClear: () => void;
}

const LogBox = ({ title, log, widgets, onClear }: LogProps) => {
    const [filter, setFilter] = React.useState<string>('');
    const [options, setOptions] = React.useState<Option[]>([]);

    React.useEffect(() => {
        const list: Option[] = [
            {id: '1', label: "All logs", value: "" }
        ];

        if (widgets) {
            widgets.forEach(widget => {
                list.push({
                    id: widget.id, label: widget.name, value: widget.id
                });
            });
        }

        setOptions(list);
    }, [widgets]);

    return (
        <Wrapper>
            <Header>
                <span>{title}</span>
                {widgets &&
                    <span>
                        <Dropdown 
                            hideLabel={true}
                            label="Filter"
                            placeholder="Filter by"
                            options={options}
                            selected={options[0]}
                            onChange={option => {
                                setFilter(option.value);
                            }}
                        />
                    </span>
                }
            </Header>
            <Content>
                {log.filter(log => filter.length > 0 ? log.event.name === filter : log).map((log, index) => {
                    const value = JSON.stringify(log.event.value);
                    let name = log.event.name;
                    if (widgets) {
                        const foundWidget = widgets.filter(widget => widget.id === log.event.name);
                        if (foundWidget.length === 1) {
                            name = foundWidget[0].name;
                        }
                    }

                    return (
                        <EntryWrapper key={index}>
                            <EntryDate>
                                <span>Date:</span>
                                <span>{log.date}</span>
                            </EntryDate>
                            <EntryEventType>
                                <span>Event:</span>
                                <span>{log.event.type}</span>
                            </EntryEventType>
                            {log.event.name && 
                                <EntryEventName>
                                    <span>Name:</span>
                                    <span>{name}</span>
                                </EntryEventName>
                            }
                            {value && value.length > 0 && 
                                <EntryEventValue>
                                    <span>Value:</span>
                                    <span>{value}</span>
                                </EntryEventValue>
                            }
                        </EntryWrapper>
                    );
                })}
            </Content>
            <Footer>
                <Button onClick={onClear}>Clear log</Button>
            </Footer>
        </Wrapper>
    );
}

export default LogBox;