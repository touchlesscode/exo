import { Button, Text, Wrapper } from "./style";
import * as actions from "@contexts/Filters/actions";
import { Spinner } from "theme-ui";
import { useContext } from "react";
import { useFiltersContext } from "@contexts/Filters/context";

const ResetFilter = ({ isVisible }: { isVisible: boolean }) => {
  const { state: { totalSelected, loading }, dispatch } = useFiltersContext();

  return (
    <Wrapper isVisible={isVisible}>
      <Text onClick={() => dispatch(actions.resetSelected())}>Reset Filters</Text>
      <Button onClick={() => dispatch(actions.toggleFiltersOpen(false))} style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        See {" "}
        {!loading
          ? totalSelected
          : (
            <Spinner width='15px' height='15px' />
          )}
        {" "} cars
      </Button>
    </Wrapper>
  );
};

export default ResetFilter;
