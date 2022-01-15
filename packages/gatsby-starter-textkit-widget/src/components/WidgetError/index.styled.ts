import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 256px;
`

export const WarningWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const WarningCopy = styled.span`
    font-size: ${p => p.theme.fontSize.regular};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.theme.colors.text.default};
    line-height: 18px;
    width: 172px;
    text-align: center;
    margin-top: 12px;
`

export const ReloadWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
`

export const ReloadButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: transparent;
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.regular};
    color: ${p => p.theme.colors.primary.default};
    line-height: ${p => p.theme.fontSize.regular};
    text-align: center;
    cursor: pointer;
    svg {
        margin-right: 8px;
    }
`