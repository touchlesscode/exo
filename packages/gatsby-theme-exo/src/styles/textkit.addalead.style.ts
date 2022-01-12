import styled from 'styled-components';

export const SpacerGap = styled.div<{ height: number }>`
    display: block;
    width: 100%;
    height: ${p => p.height}px;
    box-sizing: border-box;
`

export const FlexRow = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
`

export const FlexBox = styled.div<{ flex: number }>`
    display: block;
    text-align: left;
    flex: ${p => p.flex};
`

export const CancelButton = styled.button`
    display: inline-block;
    height: 32px;
    width: 100%;
    border: 0;
    text-align: center;
    font-family: 'BrandonText';
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.theme.colors.primary.default};
    background-color: ${p => p.theme.colors.backgrounds.white};
    border-radius: 6px;
    cursor: pointer;
`

export const SubmitButton = styled.button<{ disable: boolean }>`
    display: inline-block;
    height: 32px;
    width: 100%;
    border: 0;
    text-align: center;
    font-family: 'BrandonText';
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.theme.colors.text.white};
    background-color: ${p => p.disable ? p.theme.colors.primary.disabled : p.theme.colors.primary.default};
    border-radius: 6px;
    cursor: pointer;
`

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: ${p => p.theme.colors.backgrounds.spacer};
`