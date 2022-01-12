import React, { useState } from 'react'
import { Popover, Transition } from '@headlessui/react';
import Filter from 'src/icons/Filter';
import { useTheme } from 'styled-components';
import { ActionBar, ApplyButton, CloseButton, ResetButton, TitleBar, Wrapper } from './index.styled';
import Close from 'src/icons/Close';
import Dropdown, { Option } from 'src/components/Dropdown';

interface FilterDropdownProps {
    onChange: (type: Option|undefined, year: Option|undefined) => void;
}

const FilterDropdown = ({ onChange }: FilterDropdownProps) => {
    const theme = useTheme();
    const [inputType, setInputType] = useState<Option>();
    const [inputYear, setInputYear] = useState<Option>();
    const [, setActivityType] = useState<Option>();
    const [, setYear] = useState<Option>();

    const handleReset = () => {
        setInputType(undefined);
        setActivityType(undefined);
        setInputYear(undefined);
        setYear(undefined);
    }

    const handleApply = (close: () => void) => {
        setActivityType(inputType);
        setYear(inputYear);

        if (onChange) {
            onChange(inputType, inputYear);
        }

        close();
    }

    return (
        <Wrapper>
            <Popover>
                <Popover.Button className="filter-button">
                    <Filter color={theme.colors.text.l1} />
                </Popover.Button>
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <Popover.Panel className="filter-items">
                        {({ close }) => (
                            <>
                                <TitleBar>
                                    <h2>Filters</h2>
                                    <CloseButton onClick={() => close()}>
                                        <Close width={12} height={12} color="#B2B2B2" />
                                    </CloseButton>
                                </TitleBar>
                                <Dropdown 
                                    label="Activity Type"
                                    placeholder="Activity Type"
                                    hideLabel
                                    selected={inputType}
                                    options={[
                                        { id: 'all', label: 'All Activity', value: 'all' },
                                        { id: 'notes', label: 'Notes', value: 'notes' },
                                        { id: 'calls', label: 'Calls', value: 'calls' },
                                        { id: 'sms', label: 'SMS', value: 'sms' },
                                        { id: 'tasks', label: 'Tasks', value: 'tasks' },
                                        { id: 'renewals', label: 'Renewals', value: 'renewals' },
                                        { id: 'other', label: 'Other', value: 'other' },
                                        { id: 'transactions', label: 'Transactions', value: 'transactions' },
                                        { id: 'attachments', label: 'Attachments', value: 'attachments' },
                                    ]}
                                    onChange={val => setInputType(val)}
                                />
                                <Dropdown 
                                    label="Year"
                                    placeholder="Year"
                                    hideLabel
                                    style={{ marginTop: 16 }}
                                    selected={inputYear}
                                    options={[
                                        { id: '2021', label: '2021', value: '2021' },
                                        { id: '2020', label: '2020', value: '2020' },
                                        { id: '2019', label: '2019', value: '2019' },
                                        { id: '2018', label: '2018', value: '2018' },
                                        { id: '2017', label: '2017', value: '2017' },
                                        { id: '2016', label: '2016', value: '2016' },
                                        { id: '2015', label: '2015', value: '2015' },
                                        { id: '2014', label: '2014', value: '2014' },
                                        { id: '2013', label: '2013', value: '2013' },
                                        { id: '2012', label: '2012', value: '2012' },
                                        { id: '2011', label: '2011', value: '2011' },
                                        { id: '2010', label: '2010', value: '2010' },
                                        { id: '2009', label: '2009', value: '2009' },
                                        { id: '2008', label: '2008', value: '2008' },
                                    ]}
                                    onChange={val => setInputYear(val)}
                                />
                                <ActionBar>
                                    <ResetButton onClick={handleReset}>Reset</ResetButton>
                                    <ApplyButton onClick={() => handleApply(close)}>Apply</ApplyButton>
                                </ActionBar>
                            </>
                        )}
                    </Popover.Panel>
                </Transition>
            </Popover>    
        </Wrapper>
    );
}

export default FilterDropdown