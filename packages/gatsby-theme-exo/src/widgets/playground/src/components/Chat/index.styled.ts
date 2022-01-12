import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    min-width: 350px;
    max-width: 350px;
    border-right: 1px solid ${p => p.theme.colors.backgrounds.spacer};
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background: ${p => p.theme.colors.backgrounds.highlight};
`

export const HeaderIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
    line-height: 1em;
    color: ${p => p.theme.colors.text.default};
    user-select: none;
`

export const Search = styled.div`
    position: relative;
    padding: 0 16px 16px 16px;
`

export const SearchInput = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 1px solid ${p => p.theme.colors.backgrounds.spacer};
    background: ${p => p.theme.colors.backgrounds.secondary};
    color: ${p => p.theme.colors.text.default};
    height: 36px;
    padding: 0 16px 0 36px;
    width: 100%;

    &:focus {
        background: ${p => p.theme.colors.backgrounds.white};
    }

    &::placeholder {
        color: ${p => p.theme.colors.text.l2};
    }
`

export const SearchIcon = styled.div`
    position: absolute;
    top: 11px;
    padding: 0 14px;
    color: ${p => p.theme.colors.text.l3};
`

export const Categories = styled.div`
    display: flex;
    width: 100%;
    background: ${p => p.theme.colors.backgrounds.highlight};
    border-bottom: 1px solid ${p => p.theme.colors.backgrounds.spacer};
`

export const Category = styled.div<{ active?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 16px 0 8px 0;
    flex: 1;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background: ${p => p.active ? 'rgba(146,88,231,0.1)' : 'transparent'};
    user-select: none;
`

export const CategoryIcon = styled.div<{ active?: boolean }>`
    width: 16px;
    height: 16px;
    margin-bottom: 4px;
    color: ${p => p.active ? '#763ccb' : p.theme.colors.text.l2};
`

export const CategoryLabel = styled.div<{ active?: boolean }>`
    font-size: 14px;
    font-weight: 500;
    color: ${p => p.active ? '#763ccb' : p.theme.colors.text.l2};
`

export const Scrollbar = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
`