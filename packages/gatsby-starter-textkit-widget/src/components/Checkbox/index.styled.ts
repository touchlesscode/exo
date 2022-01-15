import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
`

export const Label = styled.label`
    display: flex;
    text-align: left;
    cursor: pointer;
`

export const InputCheckbox = styled.input`
    margin-left: 0;
    width: 16px;
    height: 16px;
    border-width: 1px;
    border-style: solid;
    border-color: ${p => p.theme.colors.backgrounds.spacer};
    border-radius: 4px;
    appearance: none;
    &:checked {
        background-color: ${p => p.theme.colors.primary.default};
        &:after {
            content: '✓';
            font-size: 13px;
            font-weight: ${p => p.theme.fontWeight.medium};
            color: ${p => p.theme.colors.text.white};
            line-height: 16px;
            padding-left: 2px;
        }
    }
`

export const Copy = styled.span`
    flex: 1;
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.theme.colors.text.default};
    padding-left: 8px;
    text-align: left;
    user-select: none;
`