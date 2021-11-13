import React, { FC } from 'react'

import { StyledButton } from "./style";
import { ButtonPropType } from "./type";

const Button:FC<ButtonPropType> = ({ label, ...props}) => {
    return (
        <StyledButton {...props}>
            {label}
        </StyledButton>
    )
}

export default Button
