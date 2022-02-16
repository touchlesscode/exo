import * as React from "react";
import Filter from "@components/Filter";
import { ChildrenWrapper, LayoutWrapper } from "./styles";
import { useSelector } from "react-redux";
import Footer from "@components/Footer/Footer.component";
import { Box } from "theme-ui";
import { useFiltersContext } from "@contexts/Filters/context";

const FiltersLayout = ({ children }: { children: React.ReactNode }) => {
  const { state: { options } } = useFiltersContext();
  const showFilters = true

  return (
    <LayoutWrapper className="hello">
      <Filter
        type="list"
        headerLeftText="2 filters applied"
        headerRightText="Reset Filters"
        backToAllText="Back to all"
        filterOptions={options}
        otherText="More"
        allStylesText="All styles"
        onRightHeaderTextCLick={() => console.log("RightHeader Clicked")}
        onFilterClick={(opt) => console.log("Filter Tile Click", opt)}
        onOtherClick={() => console.log("on Other click")}
        onAllStylesClick={() => console.log("on all styles clicked")}
      />
      <ChildrenWrapper aria-hidden={showFilters} tabIndex={showFilters ? -1 : 0}>
        <>
          <Box sx={{ flexGrow: 1, minHeight: '100vh' }}>
            {children}
          </Box>
        </>
      </ChildrenWrapper>
    </LayoutWrapper>
  );
};

export default FiltersLayout;
