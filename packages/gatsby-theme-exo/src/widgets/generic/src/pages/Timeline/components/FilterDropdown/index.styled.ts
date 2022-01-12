import styled from 'styled-components';

export const Wrapper = styled.div`
    .filter-button {
        border: transparent;
        background-color: transparent;
        cursor: pointer;
    }

    .filter-items {
        position: absolute;
        top: 16px;
        right: 8px;
        display: block;
        width: 278px;
        min-height: 200px;
        border-radius: 6px;
        padding: 24px;
        background-color: ${p => p.theme.colors.backgrounds.white};
        box-shadow: 0px 4px 10px rgba(128, 128, 128, 0.3);
        box-sizing: border-box;
        z-index: 1;
    }
`

export const TitleBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;
    box-sizing: border-box;

    h2 {
        flex: 1;
        font-size: ${p => p.theme.fontSize.regular};
        font-weight: ${p => p.theme.fontWeight.medium};
        text-align: left;
        color: ${p => p.theme.colors.text.default};
        user-select: none;
    }
`

export const CloseButton = styled.div`
    dispplay: flex;
    align-items: center;
    justify-content: center;
    width: 12px;
    height: 12px;
    cursor: pointer;
`

export const ActionBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    box-sizing: border-box;
`

export const ResetButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    padding: 4px 16px 4px 0;
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    line-height: ${p => p.theme.fontSize.regular};
    color: ${p => p.theme.colors.primary.default};
    border: transparent;
    background-color: ${p => p.theme.colors.backgrounds.white};
    box-sizing: border-box;
    cursor: pointer;
`

export const ApplyButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 3;
    display: inline-flex;
    padding: 4px 8px;
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    line-height: ${p => p.theme.fontSize.regular};
    color: ${p => p.theme.colors.text.white};
    border: transparent;
    background-color: ${p => p.theme.colors.primary.default};
    border-radius: 6px;
    box-sizing: border-box;
    cursor: pointer;
`

