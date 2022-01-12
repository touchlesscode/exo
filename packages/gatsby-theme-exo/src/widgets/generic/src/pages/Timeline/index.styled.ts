import styled from 'styled-components';

export const Wrapper = styled.div<{ height: number | null }>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: ${p => p.height ? `${p.height}px` : '100%'};
    min-height: ${p => p.height ? `${p.height}px` : '100%'};
    max-height: ${p => p.height ? `${p.height}px` : '100%'};
    background-color: ${p => p.theme.colors.backgrounds.secondary};
    overflow: hidden;
    box-sizing: border-box;
`

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    height: 32px;
    min-height: 32px;
    max-height: 32px;
    padding: 0 8px;
    background-color: ${p => p.theme.colors.backgrounds.white};
    border-bottom: 1px solid ${p => p.theme.colors.backgrounds.spacer};
    box-sizing: border-box;
`

export const SearchInput = styled.input`
    display: block;
    flex: 1;
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.regular};
    color: ${p => p.theme.colors.text.default};
    border-color: transparent;
    padding: 0 8px;

    &::placeholder {
        color: ${p => p.theme.colors.text.l2};
    }
`

export const Scroller = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    padding: 8px;
    overflow-x: hidden;
    overflow-y: scroll;
    background: transparent;
    box-sizing: border-box;
`

export const Container = styled.div`
    display: block;
    width: 100%;
    border-radius: 6px;
    border: 1px solid ${p => p.theme.colors.backgrounds.spacer};
    background-color: ${p => p.theme.colors.backgrounds.white};
    box-sizing: border-box;

    > div:not(:first-child) {
        border-top: 1px solid ${p => p.theme.colors.backgrounds.spacer};
    }
`
