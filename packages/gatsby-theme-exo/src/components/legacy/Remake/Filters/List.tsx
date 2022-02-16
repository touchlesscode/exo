import * as React from "react";
import Item from "./Item";
import { useFiltersContext } from "@contexts/Filters/context";

interface Props {
  options: {
    id: string;
    heading: string;
    values: any[];
  }[];
}

const List: React.FC<Props> = ({ options }) => {
  const {
    state: { hiddenOptions = [] },
  } = useFiltersContext();

  return (
    <>
      {options.map((option) => hiddenOptions.includes(option.id) ? null : (
        <Item
          key={option.id}
          title={option.heading}
          category={option.id}
          options={option.values}
        />
      ))}
    </>
  );
};

export default List;
