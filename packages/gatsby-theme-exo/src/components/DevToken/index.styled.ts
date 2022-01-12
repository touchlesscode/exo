import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    flex-direction: column;
`

export const Text = styled.p`
    display: block;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #2D2D2D;

    > strong {
        color: #C26715;
    }
`

export const Input = styled.input`
    display: block;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    padding: 0 16px;
    height: 40px;
    border-width: 1px;
    border-style: solid;
    border-color: #E6E6E6;
    border-radius: 6px;
    box-sizing: border-box;
    margin-bottom: 8px;
`

export const Button = styled.button`
    display: block;
    width: 100%;
    height: 40px;
    background: #4B64D7;
    border: 0;
    border-radius: 6px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;
    padding: 0 16px;
`
