import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 48px;
    min-width: 48px;
    max-width: 48px;
    background: ${p => p.theme.colors.sidebar.default};
    padding: 16px 0;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
`

export const Bottom = styled(Top)`
    justify-content: flex-end;
`

export const Avatar = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    overflow: hidden;
`

export const NavItems = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 24px 0;
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        background: transparent;
        border: 0;
        cursor: pointer;
        & + button {
            margin-top: 4px;
        }
    }
` 