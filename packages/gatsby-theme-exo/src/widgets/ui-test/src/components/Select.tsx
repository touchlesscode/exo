import React from 'react';
import Label from './Label';

interface Option {
    label: string;
    value: any;
}

const Select = ({ options = [], title, value, onChange }: { options?: Option[]; title: string; value: string; onChange: (value: any) => void }) => {
    return (
        <div>
            <Label title={title} />
            <div className="mt-1 block rounded-md shadow-sm border border-gray-600">
                <select
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 sm:text-sm border-gray-300 rounded-md bg-transparent text-white"
                    value={value}
                    onChange={e => onChange(e.target.value)}>
                    {options.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Select;