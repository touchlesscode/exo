import React from 'react';
import Label from './Label';

const TextArea = ({ title, value, onChange }: { title: string; value: string; onChange: (value: string) => void }) => {
    return (
        <div>
            <Label title={title} />
            <div className="mt-1 block rounded-md shadow-sm border border-gray-600">
                <textarea
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 sm:text-sm border-gray-300 rounded-md bg-transparent text-white"
                    rows={5}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                />
            </div>
        </div>
    );
}

export default TextArea;