import React from 'react';
import { Listbox } from '@headlessui/react';
import { Option } from './index';

interface OptionsProp {
    data: Option[];
}

const Options = ({ data }: OptionsProp) => {

    if (data.length > 0 && data[0].options) {
        return (
            <>
                {data.map((opt: Option) => (
                    <div key={opt.id.toString()} className="widget--dropdown--group_wrapper">
                        <div className="widget--dropdown--group_title">{opt.label}</div>
                        {opt.options && opt.options.map(option => (
                            <Listbox.Option 
                                key={`${opt.id.toString()}-${option.id.toString()}`}
                                value={option}
                                disabled={option.disabled ?? false}
                                className={({ active }) => `widget--dropdown--option ${active ? 'widget--dropdown--option_active' : ''} ${active ? 'widget--dropdown--option_selected' : ''}` }
                            >
                                {option.label}
                            </Listbox.Option>
                        ))}
                    </div>
                ))}
            </>
        )
    }

    if (data.length > 0 && !data[0].options) {
        return (
            <>
                {data.map(option => (
                    <Listbox.Option 
                        key={option.id.toString()}
                        value={option}
                        disabled={option.disabled ?? false}
                        className={({ active }) => `widget--dropdown--option ${active ? 'widget--dropdown--option_active' : ''} ${active ? 'widget--dropdown--option_selected' : ''}` }
                    >
                        {option.label}
                    </Listbox.Option>
                ))}
            </>
        )
    }

    return (
        <div>No Results</div>
    );
}

export default Options;