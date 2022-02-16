import React from "react";
import { Box, Button } from "theme-ui";
import checkImage from "@assets/images/check-icon.svg";
import Skeleton from "../Skeleton";
import { keyframes } from "@emotion/react";

interface OptionProps {
  visible: boolean;
  showSkeleton?: boolean;
  onClick: (value: any) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>, value: any) => void
  option: {
    id: string;
    label: string;
    label_formatted: string;
  };
  checked: boolean
  disabled: boolean
}

const Option: React.FC<OptionProps> = ({ showSkeleton, disabled, visible, onClick, onKeyDown, checked, option }) => {
  return (
    <Button
      as='li'
      sx={{
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        position: "relative",
        textAlign: "left",
        p: 0,
        paddingLeft: "0.75rem",
        width: "100%",
        color: "#000",
        cursor: "pointer",
        opacity: disabled ? '0.4 !important' : 0,
        pointerEvents: disabled ? 'none' : 'auto',
        animation: `${fadeIn} 300ms forwards`,
        "&:hover": {
          bg: "#f1f1f1",
        },
        input: inputStyles,
        label: labelStyles(checked, disabled),
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        id={option.id}
        name={option.label}
        value={option.label}
        tabIndex={visible ? 0 : -1}
        onChange={() => onClick(option)}
        onKeyDown={(e) => onKeyDown && onKeyDown(e, option)}
      />
      <label htmlFor={option.id}>{option.label_formatted}</label>
    </Button>
  )
}

export default Option;



const inputStyles = {
  order: 1,
  opacity: 0,
  "&:focus + label": {
    textDecoration: "underline",
    "&::after, &::before": { outline: "2px solid black" }
  },
  "&:checked + label": { "&::before": { opacity: 1 } }
}

const labelStyles = (checked: boolean, disabled: boolean) => ({
  opacity: disabled ? '0.4 !important' : 1,
  pointerEvents: disabled ? 'none' : 'auto',
  fontWeight: checked ? 600 : 400,
  order: 2,
  padding: "0.75rem",
  paddingLeft: "1rem",
  fontStyle: "normal",
  fontSize: ['1.1rem', "0.875rem"],
  lineHeight: "1.125rem",
  letterSpacing: "-0.02em",
  cursor: 'pointer',
  width: "100%",
  '&::after': {
    content: '""',
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    height: "16px",
    width: "16px",
    backgroundColor: "#ffff",
    border: "1px solid #e6e6e6",
    borderRadius: "2.82353px",
    zIndex: 1,
    left: "0.75rem"
  },
  '&::before': {
    left: "0.75rem",
    opacity: 0,
    content: '""',
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    height: "16px",
    width: "16px",
    backgroundColor: "#242a52",
    backgroundImage: `url(${checkImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundPosition: "center",
    borderRadius: "2.82353px",
    zIndex: 2
  }
})

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})