import * as React from 'react';
import { Box, Slider, ThemeUIStyleObject } from 'theme-ui';
import Skeleton from '../Skeleton';


interface RangeSliderProps {
  value: number[]
  max: number;
  onValueChange?: (range: number[]) => void
  onValueChangeEnd?: (range: number[]) => void
  step?: number;
  disabled?: boolean
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  onValueChange,
  onValueChangeEnd,
  value = [],
  max = 0,
  step = 100,
  disabled
}) => {
  const [val, setVal] = React.useState<number[]>([])
  const [prev, setPrev] = React.useState(value)
  const [zInd, setZ] = React.useState([0, 0])
  React.useEffect(() => {
    setVal(value.map(val => Number(val)))
    setPrev(value)
  }, [value, max])
  const handleChange = (num: number, from: number) => {
    if (from === 0 ? val[1] - num < step : num - val[0] < step) {
      if (from === 0) {
        onValueChange && onValueChange([val[1] - step, val[1]])
        setVal([val[1] - step, val[1]])
        setZ([1, 0])
      } else {
        onValueChange && onValueChange([val[0], val[0] + step])
        setVal([val[0], val[0] + step])
        setZ([0, 1])
      }
      return
    } else {
      if (from === 0) {
        onValueChange && onValueChange([num, val[1]])
        setVal([num, val[1]])
      }
      else {
        onValueChange && onValueChange([val[0], num])
        setVal([val[0], num])
      }
    }
  }
  return val.length ? (
    <Box
      sx={{
        height: "3px",
        position: "relative",
        background: "#ddd",
        borderRadius: "5px",
      }}
    >
      <Progress range={val} max={max} />
      <Box
        sx={{
          position: 'relative',
        }}
      >
        {val.map((value, idx) => (
          <Thumb
            label={idx === 0 ? 'Chose Min Price' : 'Chose Max Price'}
            key={idx}
            index={idx}
            disabled={disabled}
            min={0}
            max={max}
            value={value}
            zIndex={zInd[idx]}
            onValueChange={(num) => handleChange(num, idx)}
            onPointerUp={() => {
              if (String(prev) !== String(val)) {
                onValueChangeEnd && onValueChangeEnd(val);
              }
            }}
          />
        ))}
      </Box>
    </Box >
  ) : (
    <Box
      sx={{
        position: 'relative',
        height: '3px'
      }}
    >
        <Box
        sx={{
            height: '20px',
          position: 'absolute',
          transform: 'translateY(-50%)'
        }}
      />
    </Box>
  )
}

export default RangeSlider;


interface Props {
  onValueChange: (range: number) => void;
  min?: number;
  max: number;
  value: number;
  onPointerUp?: () => void;
  zIndex: number;
  index?: number;
  disabled?: boolean;
  label: string;
}

const Thumb: React.FC<Props> = (({ onValueChange, min, max, value, onPointerUp, zIndex, disabled, label }) => {
  const thumbStyles: ThemeUIStyleObject = {
    height: "20px",
    width: "20px",
    borderRadius: "50%",
    background: "#fff",
    pointerEvents: disabled ? "none" : "auto",
    WebkitAppearance: "none",
    boxShadow: 'inset 0 0 0 2px #3A5F96',
    cursor: 'grab',
    "&:hover": {
      boxShadow: "0 0 0 2px #3A5F96, rgb(0 0 0 / 50%) 0px 0px 5px 1px"
    },
    "&:focus": {
      boxShadow: "0 0 0 2px #3A5F96, rgb(0 0 0 / 50%) 0px 0px 5px 1px"
    }
  }
  return (
    <>
      <label
        htmlFor={zIndex.toString()}
        style={{
          display: 'none',
          visibility: 'hidden'
        }}
      >
        {label}
      </label>
      <Slider
        id={zIndex.toString()}
        onChange={(e) => onValueChange(Number(e.target.value))}
        onTouchEnd={onPointerUp}
        onPointerUp={onPointerUp}
        min={min}
        max={max}
        value={value}
        tabIndex={0}
        sx={{
          p: 0,
          m: 0,
          position: "absolute",
          width: "100%",
          height: "5px",
          background: "none",
          pointerEvents: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
          zIndex,
          '&::-webkit-slider-thumb': thumbStyles,
          '&::-moz-range-thumb': thumbStyles
        }}
      />
    </>
  )
})

const Progress = ({ range, max }: { range: number[], max: number }) => {
  const left = `${((range[0] / max) * 100) || 0}%`
  const right = `${100 - (range[1] / max) * 100 || 0}%`
  return (
    <Box
      sx={{
        height: "100%",
        position: "absolute",
        borderRadius: "5px",
        background: "#3A5F96",
        pointerEvents: "none",
        zIndex: 0
      }}
      style={{
        left,
        right,
      }}
    />
  )
}