import * as React from "react";
import { InputWrapper } from "./style";
import CurrencyInput from "react-currency-input";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  initialText: string;
  label: string;
  options?: Array<{
    text: string;
  }>;
  disabled: boolean;
}

const PaymentInput = (props: InputProps) => {
  const [state, setState] = React.useState<string>(props.initialText);

  const textInput = (
    <CurrencyInput
      value={state}
      onChangeEvent={(e: any) => setState(e.target.value)}
      prefix="$ "
      precision="0"
      disabled={props.disabled}
    />
  );

  const selectInput = (
    <select
      name={props.label}
      id={props.label}
      value={state}
      onChange={({ target }) => setState(target.value)}
    >
      {props.options?.map((option) => (
        <option key={option.text} value={option.text}>{option.text}</option>
      ))}
    </select>
  );

  return (
    <InputWrapper value={state}>
      {props.type === "text" ? textInput : null}
      {props.type === "select" ? selectInput : null}
      <label htmlFor={props.label}>{props.label}</label>
    </InputWrapper>
  );
};

export default PaymentInput;
