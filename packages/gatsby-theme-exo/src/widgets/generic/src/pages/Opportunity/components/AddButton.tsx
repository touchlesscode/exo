import React from 'react';
import Plus from '../../../icons/Plus';
import styled, { useTheme } from 'styled-components';

interface ButtonProps {
    full?: boolean;
    label: string;
    onClick: () => void;
}

const Button = styled.button<{ full: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: ${p => p.full ? 'center' : 'flex-start'};
    font-family: 'BrandonText';
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.theme.colors.primary.default};
    background-color: ${p => p.full ? p.theme.colors.backgrounds.hover : 'transparent'};
    border: 0;
    width: ${p => p.full ? '100%' : 'auto'};
    padding: ${p => p.full ? '8px 0' : '0'};
    user-select: none;
    cursor: pointer;

    svg {
        margin-right: 4px;
    }
`

const AddButton = ({ full = false, label, onClick }: ButtonProps) => {
    const theme = useTheme();

    return (
        <Button full={full} onClick={onClick}>
            <Plus width={12} height={12} color={theme.colors.primary.default} />
            {label}
        </Button>
    )
}

export default AddButton;