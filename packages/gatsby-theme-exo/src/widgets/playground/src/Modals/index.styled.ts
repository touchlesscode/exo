import styled from "styled-components";

export const Wrapper = styled.div`
    display: block;
    width: 100%;
    padding: 16px 0;
`

export const Title = styled.div`
    font-size: ${p => p.theme.fontSize.medium};
    font-weight: ${p => p.theme.fontWeight.bold};
    color: ${p => p.theme.colors.text.default};
    text-align: center;
    margin-bottom: 24px;
`

export const Copy = styled.p`
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.theme.colors.text.l2};
    line-height: ${p => p.theme.fontSize.medium};
    text-align: center;
    margin-bottom: 16px;
`

export const InputLabel = styled.label`
    display: inline-flex;
    border-radius: 0.375rem;
    color: ${p => p.theme.colors.primary.text.default};
    background: ${p => p.theme.colors.primary.default};
    border: 1px solid ${p => p.theme.colors.primary.default};
    letter-spacing: 0.02em;
    cursor: pointer;
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    align-items: center;
    justify-content: center;
    line-height: 115%;
    padding: 5px 12px;

    &:hover {
        color: ${p => p.theme.colors.primary.text.default};
        background: ${p => p.theme.colors.primary.hover};
        border: 1px solid ${p => p.theme.colors.primary.default};
    }

    > input {
        position: absolute;
        height: 1px;
        width: 1px;
    }
`

export const ActionBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 16px;

    button + button, label + label {
        margin-left: 16px;
    }
`
