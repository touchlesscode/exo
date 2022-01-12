import React, { FormEvent } from 'react';
import InputError from '../InputError';
import Label from '../Label';
import { Wrapper, Textarea as TextInput } from './index.styled'

interface TextareaProps {
    error?: string;
    label: string;
    name?: string;
    placeholder?: string;
    rows?: number;
    value?: string;
    onChange: (e: FormEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({ error, label, name, placeholder, rows = 5, value = '', onChange }: TextareaProps) => {
    return (
        <Wrapper>
            <Label label={label} />
            <TextInput 
                name={name}
                rows={rows}
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
            />
            <InputError error={error} />
        </Wrapper>
    );
}

export default Textarea;