import React, { FC } from 'react'

import Modal from '@components/Modal';
import Typography from '@components/Typography';

import { FilterHeader, FilterHeading, AllStylesText, FilterTileWrapper, FilterTile, OtherOptionsWrapper, OtherOptionsHeading } from "./style";
import { TileFilterProptype } from "./type";

const TileFilter:FC<TileFilterProptype> = ({ 
    selectedFilter, 
    filterOptions, 
    otherText, 
    allStylesText, 
    showModal,

    onModalClosed,
    onAllStylesClick, 
    onFilterClickHandler, 
    onOtherClick
}) => {

    return (
        <>
            <Modal show={showModal} onHide={onModalClosed}>
                <OtherOptionsWrapper>
                    <OtherOptionsHeading><Typography type="p6" color="black">{selectedFilter?.heading}</Typography></OtherOptionsHeading>
                    {selectedFilter && (
                        <FilterTileWrapper columns={3}>
                            {selectedFilter.tileOptions.map(tile => (
                                <FilterTile 
                                    key={tile.id}
                                    onClick={() => onFilterClickHandler(selectedFilter.id, tile.id)}
                                    checked={tile.checked}
                                >
                                    <Typography type="p6" color="black">{tile.label}</Typography>
                                </FilterTile>
                            ))}
                        </FilterTileWrapper>
                    )}
                </OtherOptionsWrapper>
            </Modal>
            {filterOptions.map(option => {
                const isLong = option.tileOptions.length > 7;
                const displayOptions = isLong ? option.tileOptions.slice(0,7) : [...option.tileOptions]
                return (
                    <div key={option.id}>
                        <FilterHeader>
                            <FilterHeading><Typography type="p6" color="gray-100">{option.heading}</Typography></FilterHeading>
                            {allStylesText && <AllStylesText onClick={onAllStylesClick}><Typography type="p7" color="primary">{allStylesText}</Typography></AllStylesText>}
                        </FilterHeader>
                        <FilterTileWrapper columns={option.columns}>
                            {displayOptions.map(tile => (
                                <FilterTile 
                                    key={tile.id}
                                    onClick={() => onFilterClickHandler(option.id, tile.id)}
                                    checked={tile.checked}
                                >
                                    <Typography type="p6" color="black">{tile.label}</Typography>
                                </FilterTile>
                            ))}
                            {isLong && otherText && <FilterTile other onClick={() => onOtherClick && onOtherClick(option.id)}><Typography type="p6" color="primary">{otherText}</Typography></FilterTile>}
                        </FilterTileWrapper>
                    </div>
                );
            })}
        </>
    )
}

export default TileFilter
