import React, { FormEvent, Fragment, ReactNode, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { useTheme } from 'styled-components';
import { Container } from './index.styled';
import ChevronUp from '../../icons/ChevronUp';
import ChevronDown from '../../icons/ChevronDown';
import Search from '../../icons/Search';
import Options from './Options';
import InputError from '../InputError';

export interface Option {
    id: string|number;
    disabled?: boolean;
    label: string;
    value?: string;
    options?: Option[];
}

interface DropdownProps {
    disabled?: boolean;
    error?: string;
    hideLabel?: boolean;
    label: string;
    maxHeight?: number;
    openTop?: boolean;
    options: Option[];
    placeholder?: string;
    renderDisplay?: (open: boolean, selected?: Option) => ReactNode;
    searchable?: boolean;
    selected?: Option;
    style?: React.CSSProperties;
    topMargin?: number;
    onChange: (value: any) =>  void;
}

const Dropdown = ({ disabled = false, error, hideLabel = false, label, maxHeight = 350, openTop = false, options, placeholder = "Select", renderDisplay, searchable = false, selected, style, topMargin = undefined, onChange }: DropdownProps) => {
    const theme = useTheme();
    const [selectedItem, setSelectedItem] = useState<Option|undefined>();
    const [data, setData] = useState<Option[]>([]);
    const [query, setQuery] = useState<string>('');

    useEffect(() => {
        setSelectedItem(selected);
    }, [selected]);

    useEffect(() => {
        setData(options);
    }, [options]);

    useEffect(() => {
        if (query === '') {
            setData(options);
        }
        if (query !== '') {
            let newData: Option[] = [];

            if (options.length > 0 && options[0].options) {
                options.forEach(opt => {
                    if (opt.options) {
                        const newOpts = opt.options.filter(option => option.label.toLowerCase().includes(query.toLowerCase()));
                        if (newOpts.length > 0) {
                            newData.push({
                                ...opt,
                                options: newOpts
                            });
                        }
                    }
                });
            }

            if (options.length > 0 && !options[0].options) {
                newData = options.filter(option => option.label.toLowerCase().includes(query.toLowerCase()));
            }

            setData(newData);
        }
    }, [query, options]);

    const handleOnChange = (value: any) => {
        setSelectedItem(value);
        if (onChange) {
            onChange(value);
        }
    }

    const handleSearchChange = (e: FormEvent<HTMLInputElement>) => {
        setQuery(e.currentTarget.value);
    }

    const renderButton = (open: boolean) => {
        if (renderDisplay) {
            return (
                <Listbox.Button className="widget--dropdown--display_custom">
                    {renderDisplay(open, selectedItem)}
                </Listbox.Button>
            );
        }

        return (
            <Listbox.Button className={`widget--dropdown--display ${open ? 'widget--dropdown--display_open' : ''}`}>
                <span className={`widget--dropdown--selected ${!selectedItem ? 'widget--dropdown--placeholder' : ''}`}>{selectedItem?.label ?? placeholder}</span>
                {open && <ChevronUp width={8} height={6} color={theme.colors.text.l2} /> }
                {!open && <ChevronDown width={8} height={6} color={theme.colors.text.l2} /> }
            </Listbox.Button>
        )
    }

    return (
        <Container style={style} openTop={openTop} topMargin={topMargin}>
            <Listbox disabled={disabled} value={selectedItem} onChange={handleOnChange}>
                {({ open }) => (
                    <>
                        <Listbox.Label className={hideLabel ? 'sr-only' : 'widget--dropdown--label'}>{label}</Listbox.Label>
                        {renderButton(open)}
                        <Transition
                            as={Fragment}
                            show={open}
                            enter="transition ease-in duration-100"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="widget--dropdown--menu" style={{ maxHeight }}>
                                {searchable &&
                                    <div className="widget--dropdown--search">
                                        <Search width={14} height={14} color={theme.colors.text.l3} />
                                        <input
                                            type="text"
                                            name="search"
                                            className="widget--dropdown--search_input"
                                            placeholder="Search"
                                            autoComplete="off"
                                            value={query}
                                            onChange={handleSearchChange}
                                        />
                                    </div>
                                }
                                <div className="widget--dropdown--options">
                                    <Options data={data} />
                                </div>
                            </Listbox.Options>
                        </Transition>
                    </>
                )}
            </Listbox>
            <InputError error={error} />
        </Container>
    );
}

export default Dropdown;