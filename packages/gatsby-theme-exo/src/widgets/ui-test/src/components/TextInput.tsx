import React from 'react';
import Label from './Label';

const TextInput = ({ title, value, onChange, placeholder }: { title: string; placeholder?: string; value: string; onChange: (value: string) => void }) => {
    return (
        <>
            <Label title={title} />
            <div className="mt-1 block rounded-md shadow-sm border border-gray-500">
                <input
                    className="focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full px-3 py-2 sm:text-sm rounded-md text-gray-500"
                    type="text"
                    value={value ?? ''}
                    onChange={e => onChange(e.target.value)}
                    placeholder={placeholder}
                />
            </div>
        </>
    );
}

export default TextInput;