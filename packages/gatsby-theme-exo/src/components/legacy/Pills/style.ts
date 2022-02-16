import styled from "styled-components"


export const PillsContainer = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: row;
    flex-wrap: wrap;

`;

export const PillContainer = styled.div`
    padding: 4px 12px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.11);
    backdrop-filter: blur(24px);
    width: fit-content;
    box-sizing: "border-box";

    font-family: Poppins;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
`
