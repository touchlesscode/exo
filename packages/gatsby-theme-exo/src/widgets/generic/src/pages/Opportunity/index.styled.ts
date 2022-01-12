import styled from 'styled-components';

export const Wrapper = styled.div<{ dark?: boolean, padded?: boolean }>`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    padding: ${p => p.padded ? '16px' : '0'};
    background: ${p => p.dark ? p.theme.colors.backgrounds.secondary : p.theme.colors.backgrounds.white};
    box-sizing: border-box;
`

export const WhiteBox = styled.div`
    display: block;
    width: 100%;
    background: ${p => p.theme.colors.backgrounds.white};
`

export const Scroller = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    background: ${p => p.theme.colors.backgrounds.white};
`

export const ItemCount = styled.input`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    width: 100%;
    background: ${p => p.theme.colors.backgrounds.white};
    border-radius: 6px;
    border-width: 1px;
    border-style: solid; 
    border-color: ${p => p.theme.colors.backgrounds.spacer};
    padding: 0 16px;
    cursor: pointer;
    box-sizing: border-box;

    &:focus, &:active, &:focus-visible, &_open {
        border-color: ${p => p.theme.colors.primary.default};
        outline: none;
    }
`

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

export const OutlineButton = styled.button<{ disable: boolean }>`
    display: inline-block;
    height: 32px;
    border: 0;
    text-align: center;
    font-family: 'BrandonText';
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.disable ? p.theme.colors.primary.disabled : p.theme.colors.primary.default};
    border-width: 1px;
    border-style: solid;
    border-color: ${p => p.disable ? p.theme.colors.primary.disabled : p.theme.colors.primary.default};
    background-color: transparent;
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

export const DeleteButton = styled.button<{ strong?: boolean }>`
    display: inline-block;
    height: 32px;
    width: 100%;
    margin: 0 auto;
    border: 0;
    text-align: center;
    font-family: 'BrandonText';
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.strong ? p.theme.colors.text.white : p.theme.colors.text.danger};
    background-color: ${p => p.strong ? p.theme.colors.text.danger : p.theme.colors.backgrounds.white};
    border-radius: 6px;
    cursor: pointer;
    &:hover {
        background-color: ${p => p.theme.colors.warning}
    }
`

export const NoteCopy = styled.span`
    display: inline-block;
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.regular};
    color: ${p => p.theme.colors.text.l2};
    text-align: left;
    box-sizing: border-box;

    > strong {
        font-weight: ${p => p.theme.fontWeight.medium};
    }
`

export const DeleteDialogue = styled.div`
    z-index: 10;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 8px;
    width: calc(364px - 48px);
    height: 152px;
    box-shadow: 0px 4px 10px rgba(128, 128, 128, 0.3);
    border-radius: 6px 6px 0px 0px;
    padding: 24px;
`