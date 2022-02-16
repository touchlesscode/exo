import { useFiltersContext } from "@contexts/Filters/context";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledFiltersButton } from "./style";

const FilterButton = ({
  onClick
}: {
  onClick: () => void
  }) => {
  const { state: { totalSelected } } = useFiltersContext();

  return (
    <StyledFiltersButton
      allSelectedFiltersLength={totalSelected}
      onClick={onClick}
    >
      Filters{" "}
      {totalSelected ? (
        <span>({totalSelected})</span>
      ) : null}
    </StyledFiltersButton>
  );
};

export default FilterButton;
