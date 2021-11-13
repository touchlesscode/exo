import styled, { css } from "styled-components";

interface FilterWrapperProp {
    screenSize ?: string;
}

interface FilterTileWrapperProp {
    columns ?: number;
}

interface FilterTileProp {
    grow ?: boolean;
    flex ?: string;
    shrink ?: boolean;
    other ?: boolean;
    checked ?: boolean;
    padding ?: string;
}

export const FilterWrapper = styled.div<FilterWrapperProp>`

    position: fixed;
    z-index: 400;
    background-color: white;

    ${props => props.screenSize !== "lg" && css`
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
    `}

    ${props => props.screenSize === "lg" && css`
        width: 70%;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `};

    padding: 1rem;
    box-sizing: border-box;
    overflow: auto;
`

export const WrapperHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 8px 10px;
`

export const WrapperHeaderLeftText = styled.p`
    margin: 0;
    /* font-size: 15px;
    line-height: 18px; */
    color: #828282;
`

export const WrapperHeaderRightButton = styled.button`
    background: transparent;
    border: none;
    color: #4D89E7;
    /* font-size: 15px;
    line-height: 18px; */
    cursor: pointer;
`

export const BackTextWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.colors.primary};
`  

export const BackText = styled.p`
    margin: 0;
    flex-shrink: 0;
`

export const FilterContainer = styled.div`
    margin-top: 34px;
`

export const FilterHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
    margin-bottom: 10px;
`

export const FilterHeading = styled.h4`
    margin: 0;
    font-weight: lighter;
`

export const AllStylesText = styled.button`
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    font-family: ${props => props.theme.fontFamily};
`

export const FilterTileWrapper = styled.div<FilterTileWrapperProp>`
    display: grid;
    grid-template-columns: ${props => props.columns ? Array(props.columns).fill('auto').join(" ") : 'auto auto auto auto'};
    gap: 6px;
    padding-right: 10px;
`

export const FilterTile = styled.button<FilterTileProp>`
    background-color: #F1F1F1;
    border: none;
    padding: ${props => props.padding ?? '8px 12px'};
    border-radius: 6px;
    font-size: 15px;
    line-height: 18px;
    font-style: normal;
    font-weight: lighter;
    flex: ${props => props.flex};
    text-align: center;
    cursor: pointer;

    /* white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; */

    ${props => props.other && css`
        background: transparent;
        border: none;
        color: ${props => props.theme.colors.primary ?? '#4D89E7'};
    `}

    ${props => props.checked && css`
        background-color: ${props => props.theme.colors["primary-light"] ?? '#EEF3FF'};
        color: ${props => props.theme.colors.primary ?? '#4D89E7'};
    `}
`

export const ListOptionsWrapper = styled.div`
    margin: 4px;
`

export const ListWrapper = styled.ul`
    list-style-type: none;
    padding: 0 2px 0 10px;
`

export const FilterTileLabel = styled.p`
    margin: 0;
`

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
`

export const OtherOptionsWrapper = styled.div`
    padding: 8px 16px;
`

export const OtherOptionsHeading = styled.p`
    margin: 0;
    margin-bottom: 10px;
    font-family: ${props => props.theme.fontFamily};
    cursor: pointer;
`