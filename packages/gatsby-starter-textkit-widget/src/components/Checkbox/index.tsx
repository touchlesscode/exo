import React, { FormEvent } from 'react';
import InputError from '../InputError';
import { Container, Copy, InputCheckbox, Label, Wrapper } from './index.styled';

interface CheckboxProps {
    checked?: boolean;
    error?: string;
    label: string;
    name: string;
    onChange: (e: FormEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ checked = false, error, label, name, onChange }: CheckboxProps) => {
    return (
        <Container>
            <Wrapper>
                <Label htmlFor={name}>
                    <InputCheckbox id={name} name={name} type="checkbox" checked={checked} onChange={onChange} />
                    <Copy>{label}</Copy>
                </Label>
            </Wrapper>
            <InputError error={error} />
        </Container>
    );
}

export default Checkbox;