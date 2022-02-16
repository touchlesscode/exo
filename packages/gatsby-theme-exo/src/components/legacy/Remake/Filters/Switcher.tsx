import * as React from "react"
import { Box, Button, Flex } from "theme-ui"
import RangeSlider from "./RangeSlider"
import { useFiltersContext } from "@contexts/Filters/context"
import { setCardsWillUnmount, setPrice } from "@contexts/Filters/actions"
import PaymentsForm from "@components/PaymentsForm"

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});


const Switcher: React.FC<{ option1: string, option2: string }> = ({ option1, option2 }) => {
  const { state, dispatch } = useFiltersContext();
  const { maxPrice, price, loading } = state
  const [active, setActive] = React.useState(0)

  const handlePriceChange = (price: number[]) => {
    typeof window !== 'undefined' && window.scrollTo(0, 0)
    const [min, max] = price
    dispatch(setCardsWillUnmount(true))
    setTimeout(() => {
      dispatch(setPrice([min, max]))
    }, 50);
  }
  return (
    <Box
      sx={{
        mb: '4rem',
        mt: '1rem'
      }}
    >
      <Box
        sx={{
          background: "rgba(118, 118, 128, 0.12)",
          borderRadius: "8px",
          height: "40px",
          position: "relative",
          display: "flex",
          marginBottom: "1.25rem",
          "&::after": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "2px",
            height: "calc(100% - 4px)",
            width: "50%",
            backgroundColor: "white",
            zIndex: 1,
            borderRadius: "6px",
            transform: "translateY(-50%)",
            transition: "all 100ms ease-in-out",
            ...(active === 1 && { transform: "translateY(-50%) translateX(calc(100% - 4px))" })
          }
        }}
      >
        {[option1, option2].map((option, idx) => (
          <Button
            key={idx}
            onClick={() => setActive(idx)}
            sx={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: ['1rem', "0.94rem"],
              lineHeight: "1.15rem",
              letterSpacing: "-0.015rem",
              width: "50%",
              backgroundColor: "transparent",
              border: "none",
              zIndex: 2,
              p: 0,
              position: "relative",
              height: "100%",
              display: "block",
              cursor: "pointer",
              color: 'black',
            }}
          >
            {option}
          </Button>
        ))}
      </Box>
      {active === 0 ? (
        <>
          <Flex
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: '1.5rem'
            }}
          >
            {price.map((value, idx) => (
              <Box
                key={idx}
                sx={{
                  border: "1px solid rgba(77, 137, 231, 0.25)",
                  borderRadius: "4px",
                  padding: "0.3rem 0.6rem",
                  fontSize: ['1.1rem', "1rem"],
                  lineHeight: "1.5rem",
                  letterSpacing: "-0.01em"
                }}
              >
                {formatter.format(Number(value))}
              </Box>
            ))}
          </Flex>
          <RangeSlider
            step={5000}
            disabled={loading}
            max={maxPrice}
            value={price as number[]}
            onValueChangeEnd={handlePriceChange}
          />
        </>
      ) : (
        <PaymentsForm filterType='PAYMENT' />
      )}
    </Box>
  )
}

export default Switcher