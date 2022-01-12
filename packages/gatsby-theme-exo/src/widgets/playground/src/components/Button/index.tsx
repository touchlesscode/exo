import styled from "styled-components";

const Button = styled.button<{ cancel?: boolean, success?: boolean, default?: boolean }>`
    display: inline-flex;
    border-radius: 0.375rem;
    color: ${p => p.success ? p.theme.colors.success.default : p.default ? p.theme.colors.text.default : p.cancel ? p.theme.colors.primary.default : p.theme.colors.primary.text.default};
    background: ${p => p.success ? p.theme.colors.success.l2 : p.default ? p.theme.colors.backgrounds.highlight : p.cancel ? p.theme.colors.backgrounds.white : p.theme.colors.primary.default};
    border: 1px solid ${p => p.success ? p.theme.colors.success.l2 : p.default ? p.theme.colors.backgrounds.spacer : p.cancel ? p.theme.colors.backgrounds.white : p.theme.colors.primary.default};
    letter-spacing: 0.02em;
    cursor: pointer;
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    align-items: center;
    justify-content: center;
    line-height: 115%;
    padding: 5px 12px;

    &:hover {
        color: ${p => p.success ? p.theme.colors.success.l2 : p.default ? p.theme.colors.text.default : p.cancel ? p.theme.colors.primary.default : p.theme.colors.primary.text.default};
        background: ${p => p.success ? p.theme.colors.success.default : p.default ? p.theme.colors.backgrounds.secondary : p.cancel ? p.theme.colors.backgrounds.hover : p.theme.colors.primary.hover};
        border: 1px solid ${p => p.success ? p.theme.colors.success.default : p.default ? p.theme.colors.backgrounds.secondary : p.cancel ? p.theme.colors.backgrounds.hover : p.theme.colors.primary.default};
    }
`

export default Button;