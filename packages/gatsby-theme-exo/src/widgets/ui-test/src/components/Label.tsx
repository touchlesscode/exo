import React from 'react';

const Label = ({ title }: { title: string }) => {
    return (
        <label className="block text-sm font-semibold text-gray-500">{title}</label>
    );
}

export default Label;