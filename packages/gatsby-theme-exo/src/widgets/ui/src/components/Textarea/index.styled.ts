import styled from 'styled-components';

export const Wrapper = styled.div`
    display: block;
    width: 100%;
`

export const Textarea = styled.textarea`
    display: block;
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: ${p => p.theme.colors.backgrounds.spacer};
    border-radius: 6px;
    font-size: ${p => p.theme.fontSize.regular};
    font-weight: ${p => p.theme.fontWeight.regular};
    color: ${p => p.theme.colors.text.default};
    padding: 10px 16px;
    resize: none;
    margin-top: 2px;
    box-sizing: border-box;

    &::placeholder {
        font-size: ${p => p.theme.fontSize.regular};
        color: ${p => p.theme.colors.text.l3};
    }
`
