import { FormEvent } from 'react';
import InputError from '../InputError';
import { Container, Copy, InputCheckbox, Label, Wrapper } from './index.styled';

interface CheckboxProps {
    checked?: boolean;
    error?: string;
    label: string;
    name: string;
    onChange: (value: boolean) => void;
}

const Checkbox = ({ checked = false, error, label, name, onChange }: CheckboxProps) => {
    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.checked);
    }

    return (
        <Container>
            <Wrapper>
                <Label htmlFor={name}>
                    <InputCheckbox
                        id={name}
                        name={name}
                        type="checkbox"
                        checked={checked}
                        onChange={handleChange}
                    />
                    <Copy>{label}</Copy>
                </Label>
            </Wrapper>
            <InputError error={error} />
        </Container>
    );
}

export default Checkbox;