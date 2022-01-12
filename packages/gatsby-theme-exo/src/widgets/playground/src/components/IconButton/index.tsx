import React from "react";
import styled from "styled-components";

interface IconButtonProps {
    disabled?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    color: ${p => p.theme.colors.primary.default};
    background: ${p => p.theme.colors.backgrounds.white};
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;

    &:hover {
        background-color: ${p => p.theme.colors.backgrounds.hover};
    }

    &:disabled {
        background-color: transparent;
        cursor: not-allowed;
    }
`

const IconButton = ({ disabled = false, children, onClick }: IconButtonProps) => {
    return (
        <Button disabled={disabled} onClick={onClick}>
            {children}
        </Button>
    )
}

export default IconButton;