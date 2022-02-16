import styled from "styled-components";

export const BackdropWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 13;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.42);
    backdrop-filter: blur(0.25rem);
`