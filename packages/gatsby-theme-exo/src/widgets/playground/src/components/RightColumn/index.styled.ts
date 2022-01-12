import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 380px;
    min-width: 380px;
    max-width: 380px;
    border-left: 1px solid ${p => p.theme.colors.backgrounds.spacer};
    background: ${p => p.theme.colors.backgrounds.secondary};
`

export const InfoBox = styled.div`
    display: block;
    width: 100%;
    padding: 24px 0px 8px 0;
    background: ${p => p.theme.colors.backgrounds.white};
    border-bottom: 1px solid ${p => p.theme.colors.backgrounds.spacer};

    h2 {
        display: block;
        font-size: ${p => p.theme.fontSize.medium};
        font-weight: ${p => p.theme.fontWeight.bold};
        color: ${p => p.theme.colors.text.default};
        text-align: center;
        margin-bottom: 16px;
    }
`

export const ListItem = styled.div<{ colored?: boolean }>`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 16px;
    font-size: ${p => p.theme.fontSize.regular};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.colored ? p.theme.colors.primary.default : p.theme.colors.text.default};

    > svg {
        margin-right: 16px;
    }
`

export const Scroller = styled.div<{ scrollable?: boolean }>`
    flex: 1;
    width: 100%;
    overflow-x: hidden;
    overflow-y: ${p => p.scrollable ? 'auto' : 'hidden'};
    box-sizing: border-box;
`

export const ActionBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 48px;
    background: ${p => p.theme.colors.backgrounds.white};
    border-top: 1px solid ${p => p.theme.colors.backgrounds.spacer};
    box-sizing: border-box;
`

export const ActionMenu = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 48px;
    padding: 8px 0;
    border-radius: 0.375rem 0.375rem 0 0;
    border-top-right-radius: 0.375rem;
    background: ${p => p.theme.colors.backgrounds.white};
    box-shadow: 0px -1px 8px rgb(128 128 128 / 25%);
    box-sizing: border-box;
    z-index: 10;
`

export const ActionMenuItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    letter-spacing: 0.02em;
    line-height: ${p => p.theme.fontSize.regular};
    color: ${p => p.theme.colors.text.l1};
    padding: 8px 16px;
    cursor: pointer;

    &:hover {
        background: ${p => p.theme.colors.backgrounds.hover};
    }
`
