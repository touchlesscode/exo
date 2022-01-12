import React from 'react';
import Button from './Button';

interface LogProps {
    title: string;
    log: string;
    onClear: () => void;
}

const Log = ({ title, log, onClear }: LogProps) => {
    return (
        <div className="rounded-lg bg-gray-200 border border-gray-600 shadow-xl p-4">
            <p className="text-lg text-gray-700 font-semibold">{title}</p>
            <div className="w-full overflow-scroll h-96">
                <pre className="text-gray-600 text-sm">
                    <code dangerouslySetInnerHTML={{ __html: log }} />
                </pre>
            </div>
            <Button title="Clear log" onPress={onClear} />
        </div>
    );
}

export default Log;