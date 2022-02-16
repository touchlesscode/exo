import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import { Text } from 'theme-ui';
import { CustomInput, CustomInputTextArea, InputWrapper } from './style';

interface InputLabelProps {
  label?: string;
  subtitle?: string;
  placeholder?: string;
  validate?: boolean;
  initValue?: any;
  onChange?: (value: any) => void;
  id?: string;
  name?: string;
  error?: string | boolean;
  onBlur?: (value: any) => void;
  value?: string;
  disabled?: boolean;
  width?: number;
  labelStyles?: any;
  style?: React.CSSProperties;
  inputStyles?: React.CSSProperties;
  type?: "text" | "textarea" | "mask";
  autoComplete?: string;
  ref?: any;
  required?: boolean;
}

const InputWithLabel = React.forwardRef<any, InputLabelProps>(
  (
    {
      initValue,
      label,
      placeholder,
      onChange,
      id,
      name,
      error,
      onBlur,
      disabled,
      width,
      required,
      labelStyles,
      subtitle,
      style,
      inputStyles,
      type,
      autoComplete,
    },
    ref
  ) => {
    const [value, setValue] = useState("");

    useEffect(() => {
      initValue ? setValue(initValue) : setValue("");
    }, [initValue]);

    const onChangeHandler = (e: any) => {
      setValue(e.target.value);
      onChange && onChange(e);
    };

    return (
      <InputWrapper style={style}>
        {label && <Text sx={labelStyles}>{label}</Text>}
        {subtitle && <Text sx={{color: "grey", margin: "4px 0 8px 0",fontSize: "12px"}}>{subtitle}</Text>}
      {type === "textarea" ? (
        <CustomInputTextArea
          placeholder={placeholder}
          onChange={onChangeHandler}
          onBlur={onBlur}
          value={value}
          id={id}
          name={name}
          disabled={disabled}
          style={inputStyles}
        />
      ) : (
        <CustomInput
          ref={ref}
          placeholder={placeholder}
          onChange={onChangeHandler}
          onBlur={onBlur}
          value={value}
          id={id}
          name={name}
          disabled={disabled}
          style={inputStyles}
          autoComplete={autoComplete}
        />
      )}
      {/* {!!error && <ErrorLabel>{error}</ErrorLabel>} */}
    </InputWrapper>
    )

  
  }
)

export default InputWithLabel;