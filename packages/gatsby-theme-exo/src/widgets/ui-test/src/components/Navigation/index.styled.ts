import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 48px;
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
    flex: 1;
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