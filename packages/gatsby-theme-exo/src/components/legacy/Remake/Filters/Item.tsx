import { updateSingleUrlParamState } from "@utils/replaceUrlState";
import { setCardsWillUnmount, setFetchFilters, toggleSelected } from "@contexts/Filters/actions";
import { useFiltersContext } from "@contexts/Filters/context"
import * as React from 'react';
import { Box, Button, Spinner } from "theme-ui";
import PlusIcon from '@assets/icons/plus.inline.svg'
import MinusIcon from '@assets/icons/minus.inline.svg'
import Option from "./Option";

interface Props {
  title: string;
  options: {
    label: string;
    id: string;
    label_formatted: string;
    parent: string;
    disabled?: boolean;
  }[];
  category: string;
}

const Item: React.FC<Props> = ({ options, title, category }) => {
  const { state: { selected, initialRender, loading, fetchFilters }, dispatch } = useFiltersContext();
  const [isOpen, setisOpen] = React.useState(false)
  const [alreadyOpen, setAlreadyOpen] = React.useState(false)
  const [disabled, setDisabled] = React.useState(false)
  const targetFilters = selected[category] || {}
  const targetFiltersLength = Object.keys(targetFilters || {})?.length

  const TotalSelectedOfCurrentCategory = ({ title }: { title: number }) =>
    title > 0 ? <span>({title})</span> : null

  React.useEffect(() => {
    if (!isOpen || alreadyOpen) return
    setAlreadyOpen(true)
  }, [isOpen])

  React.useEffect(() => {
    !loading ? setDisabled(false) : setDisabled(true)
  }, [loading])

  const handleOpen = () => {
    if (disabled) return
    setisOpen(!isOpen)
    !options.length && dispatch(setFetchFilters(true))
  }

  const handleKeyDown = (e: React.KeyboardEvent, val: { label: string, parent: string }) => {
    if (e.key === "Enter") {
      handleChange(val)
    }
  };

  const handleChange = (val: {
    label: string;
    parent: string;
  }) => {
    if (disabled) return
    setDisabled(true)
    dispatch(setCardsWillUnmount(true))
    !initialRender && updateSingleUrlParamState(category, val.label)
    setTimeout(() => {
      dispatch(toggleSelected({ key: val.parent, value: val.label }, true))
    }, 50)
  };

  return (
    <Box
      sx={{
        borderBottom: "0.1px solid rgba(0, 0, 0, 0.1)"
      }}
    >
      <Button
        onClick={handleOpen}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 0.5rem",
          paddingRight: '0',
          width: "100%",
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
          fontWeight: 500,
          color: 'black',
          borderRadius: 0,
          fontSize: ['1.2rem', '1rem'],
        }}
      >
        <Box>
          {title}{" "}
          <TotalSelectedOfCurrentCategory
            title={targetFiltersLength}
          />
        </Box>
        <Box sx={{ px: '4px' }}>
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </Box>
      </Button>
      <Box
        as="ul"
        sx={{
          p: 0,
          listStyle: "none",
          overflow: "hidden",
          padding: "0",
          margin: "0",
          height: isOpen ? "auto" : 0,
        }}
      >
        {options?.length ? (
          options?.map((val) => isOpen ? (
            <Option
              key={val.label}
              disabled={val.disabled || disabled}
              showSkeleton={loading}
              visible={isOpen}
              option={val}
              checked={val.id in targetFilters ? true : false}
              onClick={handleChange}
              onKeyDown={handleKeyDown}
            />
          ) : null)
        ) : (
          <Box sx={{ textAlign: "center" }}>
            <Spinner
              color="#ebebeb"
              width="40px"
              height="40px"
              sx={{ strokeWidth: "3px" }}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Item