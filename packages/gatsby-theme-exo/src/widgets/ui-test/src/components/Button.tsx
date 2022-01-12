import React from 'react';

interface ButtonProps {
    color?: string;
    disabled?: boolean;
    title: string;
    onPress: () => void;
}

const Button = ({ color = 'indigo', disabled = false, title, onPress }: ButtonProps) => {
    return (
        <button
            className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-${color}-600 text-base font-medium text-white hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 sm:w-auto sm:text-sm${disabled ? ' opacity-50' : ''}`}
            type="button"
            disabled={disabled}
            onClick={onPress}
        >
            {title}
        </button>
    );
}

export default Button;