import { usePrevious } from "@radix-ui/react-use-previous";
import { useEffect, useState } from "react";
import {
  FilterSliderWrapper,
  SliderAmount,
  SliderAmountWrapper,
  StyledSlider,
  StyledTrack,
  StyledRange,
  StyledThumb
} from "./style";

const FilterSlider = ({
  min,
  max,
  defaultValue,
  value,
  filterType,
  onValueChange,
  steps
}: {
  value: number[],
  min?: number,
  max: number,
  defaultValue?: number[],
  filterType: "PRICE" | "PAYMENT",
  onValueChange?: (range: number[]) => void;
  steps?: number
  }) => {
  const [range, setRange] = useState<number[]>([]);
  const prevValue = usePrevious(value);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  useEffect(() => {
    !range.length && setRange(value)
  }, [value])

  return (
    <FilterSliderWrapper
      filterType={filterType}
      aria-hidden={filterType === "PAYMENT" ? true : false}
    >
      <SliderAmountWrapper>
        <SliderAmount>
          {formatter.format(range[0])}
        </SliderAmount>
        <SliderAmount>
          {formatter.format(range[1])}
        </SliderAmount>
      </SliderAmountWrapper>
      <form>
        <StyledSlider
          defaultValue={defaultValue}
          value={range}
          min={min}
          max={max}
          step={steps}
          minStepsBetweenThumbs={steps}
          aria-label="Volume"
          onValueChange={(range) => setRange(range)}
        >
          <StyledTrack>
            <StyledRange />
          </StyledTrack>
          <StyledThumb
            onPointerUp={() => {
              if (String(prevValue) !== String(range)) {
                onValueChange && onValueChange(range);
              }
            }}
          />
          <StyledThumb
            onPointerUp={() => {
              if (String(prevValue) !== String(range)) {
                onValueChange && onValueChange(range);
              }
            }}
          />
        </StyledSlider>
      </form>
    </FilterSliderWrapper>
  );
};

export default FilterSlider;