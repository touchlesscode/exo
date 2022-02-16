import styled from "styled-components";

interface TextWrapperProp {
    screenType ?: string;
}

export const Backdrop = styled.div`
    position: absolute;
    z-index: 7;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const Container = styled.div`
    position: relative;
`

export const TextWrapper = styled.div<TextWrapperProp>`
    display: flex;
    flex-direction:  row;
    gap: 0 0.625rem;
    @media only screen and (max-width: 768px){
      flex-direction: column;
      align-items: end
    }
`

export const DropdownButton = styled.button`
    font-size: 0.938rem;
    line-height: 1.406rem;
    font-weight: 600;
    font-family: Poppins;
    color: #242A52;
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0;
`

export const DropdownContainer = styled.div<TextWrapperProp>`
    position: absolute;
    display: flex;
    /* top: 0;*/
    left: ${props => props.screenType === "sm" ? '-20px': 0}; 
    width: 100%;
    min-width: fit-content;
    background-color: white;
    z-index: 7;
    box-shadow: 0px 4px 24px rgba(128, 128, 128, 0.2);
    border-radius: 6px;
`

export const DropdownUl = styled.ul`
    list-style-type: none;
    padding: 8px 12px;
    margin: 0;
    display: flex;
    flex-flow: column;
    gap: 4px;
    flex-shrink: 0;

    width: max-content;
`

export const DropdownLi = styled.li`
    font-family: Poppins;
    font-weight: 400;
    font-size: 0.94rem;
    color: #333333;
    line-height: 1.406rem;
    padding: 4px;
    cursor: pointer;
`