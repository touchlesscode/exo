import React from 'react';
import styled from 'styled-components';

interface InputErrorProps {
    error?: string;
}

const Label = styled.div`
    text-align: left;
    font-size: ${p => p.theme.fontSize.xsmall};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.theme.colors.error.default};
    margin-top: 4px;
`

const InputError = ({ error }: InputErrorProps) => {
    if (!error) {
        return null;
    }

    return (
        <Label>{error}</Label>
    );
}

export default InputError;