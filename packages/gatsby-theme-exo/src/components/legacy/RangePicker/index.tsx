/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Flex from "@components/Flex";
import React, { useEffect, useState } from "react";
import { RangeBubbleText, RangePickerContainer } from "./style";

interface RangePickerProps {
  min: number;
  max: number;
}
function RangePicker(props: RangePickerProps) {
  const [values, setValues] = useState({ min: 0, max: 0 });

  useEffect(() => {
    setValues({
      min: props.min,
      max: props.max,
    });
  }, [props.max, props.min]);
  const onRangeChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const { min, max } = values;

  return (
    <RangePickerContainer>
      <div className="price-slider">
        <Flex>
          <RangeBubbleText>{min}</RangeBubbleText>

          <div style={{ width: 300 }}></div>
          <RangeBubbleText>{max}</RangeBubbleText>
        </Flex>
        <br />
        <input
          onChange={onRangeChange}
          name="min"
          value={min}
          min={props.min}
          max={props.max}
          step={5}
          type="range"
        />
        <input
          name={"max"}
          onChange={onRangeChange}
          value={max}
          min={props.min}
          max={props.max}
          step={5}
          type="range"
        />
      </div>
    </RangePickerContainer>
  );
}

export default RangePicker;
