import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex: 1;
    min-height: 420px;
    max-height: 420px;
    flex-direction: column;
    box-sizing: border-box;
    background: ${p => p.theme.colors.backgrounds.white};
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    min-height: 48px;
    max-height: 48px;
    border-bottom: 1px solid ${p => p.theme.colors.backgrounds.spacer};
    background: ${p => p.theme.colors.backgrounds.highlight};
    box-sizing: border-box;
    font-size: ${p => p.theme.fontSize.regular};
    font-weight: ${p => p.theme.fontWeight.bold};
    color: ${p => p.theme.colors.text.l1};
    padding: 0 16px;

    span:last-child {
        display: inline-block;
        width: 200px;
    }
`

export const Content = styled.div`
    display: flex;
    flex: 1;
    max-width: 100%;
    flex-direction: column;
    overflow-x: auto;
    overflow-y: auto;
`

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    min-height: 48px;
    max-height: 48px;
    line-height: 48px;
    border-top: 1px solid ${p => p.theme.colors.backgrounds.spacer};
    box-sizing: border-box;
    font-size: ${p => p.theme.fontSize.regular};
    font-weight: ${p => p.theme.fontWeight.bold};
    background: ${p => p.theme.colors.backgrounds.highlight};
    color: ${p => p.theme.colors.text.l1};
    padding: 0 16px;
`

export const EntryWrapper = styled.div`
    display: block;
    margin-bottom: 8px;
    padding: 16px 0 16px 0;
    margin-left: 16px;
    box-sizing: border-box;
    border-bottom: 1px solid ${p => p.theme.colors.backgrounds.spacer};
`

export const EntryDate = styled.div`
    display: block;
    line-height: ${p => p.theme.fontSize.regular};
    box-sizing: border-box;
    margin-bottom: 4px;

    span:first-child {
        display: inline-block;
        width: 50px;
        font-size: ${p => p.theme.fontSize.small};
        font-weight: ${p => p.theme.fontWeight.medium};
        color: ${p => p.theme.colors.text.l1};
    }

    span:last-child {
        display: inline-block;
        font-size: ${p => p.theme.fontSize.small};
        font-weight: ${p => p.theme.fontWeight.bold};
        color: ${p => p.theme.colors.text.default};
    }
`

export const EntryEventType = styled.div`
    display: block;
    line-height: ${p => p.theme.fontSize.regular};
    box-sizing: border-box;
    margin-bottom: 4px;
    
    span:first-child {
        display: inline-block;
        width: 50px;
        font-size: ${p => p.theme.fontSize.small};
        font-weight: ${p => p.theme.fontWeight.medium};
        color: ${p => p.theme.colors.text.l1};
    }

    span:last-child {
        display: inline-block;
        font-size: ${p => p.theme.fontSize.regular};
        color: ${p => p.theme.colors.text.success};
    }
`

export const EntryEventName = styled.div`
    display: block;
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.theme.colors.text.l1};
    line-height: ${p => p.theme.fontSize.regular};
    box-sizing: border-box;
    margin-bottom: 4px;

    span:first-child {
        display: inline-block;
        width: 50px;
        font-size: ${p => p.theme.fontSize.small};
        font-weight: ${p => p.theme.fontWeight.medium};
        color: ${p => p.theme.colors.text.l1};
    }

    span:last-child {
        display: inline-block;
        font-size: ${p => p.theme.fontSize.regular};
        font-weight: ${p => p.theme.fontWeight.regular};
        color: ${p => p.theme.colors.text.l1};
    }
`

export const EntryEventValue = styled.div`
    display: block;
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.theme.colors.text.l1};
    line-height: ${p => p.theme.fontSize.regular};
    box-sizing: border-box;

    span:first-child {
        display: inline-block;
        width: 50px;
        font-size: ${p => p.theme.fontSize.small};
        font-weight: ${p => p.theme.fontWeight.medium};
        color: ${p => p.theme.colors.text.l1};
    }

    span:last-child {
        display: inline-block;
        font-size: ${p => p.theme.fontSize.regular};
        font-weight: ${p => p.theme.fontWeight.regular};
        color: ${p => p.theme.colors.text.l2};
    }
`