import styled from "styled-components";

export const Backdrop = styled.div<{ visible?: boolean }>`
    display: ${p => p.visible ? `flex` : `none`};
    position: absolute;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.25);
    z-index: 100;
`

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 550px;
    min-height: 200px;
    border-radius: 0.375rem;
    background: ${p => p.theme.colors.backgrounds.white};
    box-shadow: 0 8px 16px rgb(128 128 128 / 25%);
    box-sizing: border-box;
    padding: 16px;
` 