import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    border-right: 1px solid ${p => p.theme.colors.background.spacer};
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background: ${p => p.theme.colors.background.highlight};
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
    line-height: 1em;
    color: ${p => p.theme.colors.text.default};
    user-select: none;
`

export const Search = styled.div`
    padding: 0 16px 16px 16px;
`

export const SearchInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 1px solid ${p => p.theme.colors.background.spacer};
    background: ${p => p.theme.colors.background.secondary};
    height: 36px;
    user-select: none;
`

export const SearchIcon = styled.div`
    padding: 0 14px;
    color: ${p => p.theme.colors.text.l3};
`

export const Placeholder = styled.div`
    display: block;
    width: 100%;
    font-size: 16px;
    color: ${p => p.theme.colors.text.l2};
`

export const Categories = styled.div`
    display: flex;
    width: 100%;
    background: ${p => p.theme.colors.background.highlight};
    border-bottom: 1px solid ${p => p.theme.colors.background.spacer};
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

export const ChatCard = styled.div<{ active?: boolean }>`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 16px;
    border-bottom: 1px solid ${p => p.theme.colors.background.spacer};
    background: ${p => p.active ? p.theme.colors.primary.default : 'transparent'};
    color: ${p => p.active ? p.theme.colors.primary.text : p.theme.colors.text.l1};
    height: 108px;
    cursor: pointer;
    user-select: none;

    :hover {
        color: ${p => p.theme.colors.text.l1};
        background-color: ${p => p.theme.colors.background.hover};

        div:last-child {
            color: ${p => p.theme.colors.text.l1};
        }
    }

    div:last-child {
        color: ${p => p.active ? p.theme.colors.primary.text : p => p.theme.colors.text.l2};
    }
`

export const ChatCardTitle = styled.div`
    display: block;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
`

export const ChatCardDescription = styled.div`
    display: block;
    font-size: 15px;
    font-weight: 400;
`