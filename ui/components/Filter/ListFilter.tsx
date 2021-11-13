import React, { FC } from 'react'

import ArrowRight from "@assets/icons/arrow-right_v2.svg";

import { ListWrapper, ListItem, ListOptionsWrapper, FilterTileWrapper, FilterTile, FilterTileLabel } from "./style";
import { ListFilterPropType } from "./type";
import Typography from '@components/Typography';

const ListFilter:FC<ListFilterPropType> = ({ selectedFilter, listOptions, onFilterClickHandler, onListItemClick }) => {

    return (
        <div>
            {selectedFilter ? 
                <ListOptionsWrapper>
                    <FilterTileWrapper columns={selectedFilter.columns}>
                        {selectedFilter.tileOptions.map(option => (
                            <FilterTile 
                                key={option.id}
                                padding="8px 21.75px 8px 8px"
                                onClick={() => onFilterClickHandler(selectedFilter.id, option.id)}
                                checked={option.checked}
                            >
                                {option.icon && <img src={option.icon} alt={option.label} />}
                                <FilterTileLabel><Typography type="p6" color="black">{option.label}</Typography></FilterTileLabel>
                            </FilterTile>
                        ))}
                    </FilterTileWrapper>
                </ListOptionsWrapper>
            :
                <ListWrapper>
                    {listOptions.map(option => (
                        <ListItem key={option.id} onClick={() => onListItemClick(option.id)}>
                            <p><Typography type="p3" color="black">{option.heading}</Typography></p>
                            <img src={ArrowRight} alt="" />
                        </ListItem>
                    ))}
                </ListWrapper>
            }
        </div>
    )
}

export default ListFilter
