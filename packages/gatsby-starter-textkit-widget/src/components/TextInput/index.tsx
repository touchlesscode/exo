import React, { FormEvent, FocusEvent } from 'react';
import { CSSProperties } from 'styled-components';
import InputError from '../InputError';
import Label from '../Label';
import { Wrapper, Input } from './index.styled'

interface TextareaProps {
    error?: string;
    label: string;
    name: string;
    placeholder?: string;
    type?: string;
    value?: string;
    style?: CSSProperties;
    onChange: (e: FormEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<any>) => void;
}

const TextInput = ({ error, label, name, placeholder, type = 'text', value = '', style, onChange, onBlur }: TextareaProps) => {
    return (
        <Wrapper>
            <Label label={label} />
            <Input 
                type={type}
                name={name}
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                style={style}
                autocomplete="off"
                data-lpignore="true" 
                data-form-type="text"
            />
            <InputError error={error} />
        </Wrapper>
    );
}

export default TextInput;