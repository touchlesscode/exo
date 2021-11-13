import React, { FC, useEffect, useState } from 'react'

import Typography from '@components/Typography';
import Backdrop from "@components/Backdrop";
import TileFilter from './TileFilter';
import ListFilter from './ListFilter';
import ArrowLeft from "@assets/icons/arrow-left_v2.svg";

import useWindowSize from '@hooks/useWindowSize';

import { FilterWrapper, WrapperHeader, WrapperHeaderLeftText, WrapperHeaderRightButton, BackTextWrapper, BackText, FilterContainer } from "./style";
import { FilterPropType, FilterOption } from "./type";

const Filter:FC<FilterPropType> = ({ 
    type="tile",
    headerLeftText, 
    headerRightText, 
    backToAllText,
    backToAllIcon,
    otherText,
    allStylesText,
    filterOptions,
    onRightHeaderTextCLick,
    onFilterClick,
    onOtherClick,
    onAllStylesClick
}) => {

    const screenSize =  useWindowSize();
    const [filterOptionsState, setFilterOptionsState] = useState<FilterOption[] | null>(null);
    const [selectedFilter, setSelectedFilter] = useState<FilterOption | null>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if(filterOptions) setFilterOptionsState(JSON.parse(JSON.stringify(filterOptions)));
    }, [filterOptions]);

    const onTileFilterClickHandler = (optionId: string, tileId: string ) => {
        if(!filterOptionsState) return;
        const updatedFilterOptionsState = [...filterOptionsState];
        const selectedFilter = updatedFilterOptionsState.findIndex(opt => opt.id === optionId);
        const selectedTile = updatedFilterOptionsState[selectedFilter].tileOptions.findIndex(opt => opt.id === tileId);
        updatedFilterOptionsState[selectedFilter].tileOptions[selectedTile].checked = !updatedFilterOptionsState[selectedFilter].tileOptions[selectedTile].checked;
        setFilterOptionsState(updatedFilterOptionsState);
        onFilterClick && onFilterClick(updatedFilterOptionsState[selectedFilter])
    }

    const viewMoreFilterOptions = (optId: string) => {
        if(!filterOptionsState) return;
        const updatedFilterOptionsState = [...filterOptionsState];
        const filter = updatedFilterOptionsState.find(opt => opt.id === optId);
        if(!filter) return;
        setSelectedFilter(filter);
        if(type === "tile"){
            setShowModal(true);
        }
    }

    const onResetHandler = () => {
        const updatedFilter = JSON.parse(JSON.stringify(filterOptions));
        setFilterOptionsState(updatedFilter);
        onRightHeaderTextCLick && onRightHeaderTextCLick()
    }

    const onOtherOptionsModalClose = () => {
        setShowModal(false);
        setSelectedFilter(null);
    }

    if(!filterOptionsState) return null;
    
    return (
        <>
            {screenSize.type === "lg" && <Backdrop />}
            <FilterWrapper screenSize={screenSize.type}>
                <WrapperHeader>
                    {!!selectedFilter && type === "list" ? 
                    <BackTextWrapper onClick={() => setSelectedFilter(null)}>
                        <img src={backToAllIcon || ArrowLeft} alt="" />
                        <BackText><Typography type="p6" color="primary">{backToAllText}</Typography></BackText>
                    </BackTextWrapper>
                    :
                    headerLeftText && <WrapperHeaderLeftText><Typography type="p6" color="gray-20">{headerLeftText}</Typography></WrapperHeaderLeftText>
                    }
                    {headerRightText && <WrapperHeaderRightButton onClick={onResetHandler}><Typography type="p6" color="primary">{headerRightText}</Typography></WrapperHeaderRightButton>}
                </WrapperHeader>
                <FilterContainer>
                    {type === "tile" && (
                        <TileFilter 
                            selectedFilter={selectedFilter}
                            filterOptions={filterOptionsState}
                            allStylesText={allStylesText}
                            otherText={otherText}
                            showModal={showModal}
                            onModalClosed={onOtherOptionsModalClose}
                            onFilterClickHandler={onTileFilterClickHandler}
                            onAllStylesClick={onAllStylesClick}
                            onOtherClick={viewMoreFilterOptions}
                        />
                    )}
                    {type === "list" && (
                        <ListFilter 
                            selectedFilter={selectedFilter}
                            listOptions={filterOptionsState}
                            onListItemClick={viewMoreFilterOptions}
                            onFilterClickHandler={onTileFilterClickHandler}
                        />
                    )}
                </FilterContainer>
            </FilterWrapper>
        </>
    )
}

export default Filter
