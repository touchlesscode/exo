import styled from "styled-components";

export const InputWrapper = styled.div`
  display: block;
  /* flex-direction: column;
  align-items: flex-start; */
  position: relative;
  width: 100%;
  margin: 16px 0;
  img {
    cursor: pointer;
    position: absolute;
    top: 36px;
    right: 5px;
  }
`;

export const CustomInputTextArea = styled.textarea`
  height: 154px;
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  outline-style: none;
  position: relative;
  padding: 10px 5px;

  &::placeholder {
    color: #c4c4c4;
    font-size: 16px;
  }
  background-color: ${(props: { disabled?: boolean }) =>
    props.disabled ? "#c4c4c4" : "white"};
`;


export const CustomInput = styled.input`
  height: 42px;
  width: 100%;
  border: 1px solid #000; //c4c4c4
  border-radius: 4px;
  outline-style: none;
  position: relative;
  padding: 0 5px;
  box-sizing:border-box;
  /* margin: 5px 0; */
  &::placeholder {
    color: #c4c4c4;
    font-size: 16px;
  }
  background-color: ${(props: { disabled?: boolean }) =>
    props.disabled ? "#c4c4c4" : "white"};
`;

export const ErrorLabel = styled.span`
  color: #c94c43;
  font-size:12px;
`;