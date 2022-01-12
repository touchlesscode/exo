import React, { CSSProperties } from 'react';
import styled from 'styled-components';

interface LabelProps {
    label: string;
    style?: CSSProperties;
}

const Title = styled.label`
    display: block;
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    line-height: ${p => p.theme.fontSize.regular};
    color: ${p => p.theme.colors.text.default};
    width: 100%;
    text-align: left;
`

const Label = ({ label, style }: LabelProps) => {
    return (
        <Title style={style}>{label}</Title>
    )
}

export default Label;