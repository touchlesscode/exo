import { Link } from "gatsby";
import styled, { css } from "styled-components";

interface DetailsListWrapperProp {
    cardThemeType : string;
    width ?: string;
}

interface IconContainerProp {
    iconWidth ?:string;
    iconHeight ?:string;
    margin ?:string;
}

export const DetailsListWrapper = styled.div<DetailsListWrapperProp>`
	box-sizing: border-box;
	background-color: ${props => (props?.theme?.detailList[props?.cardThemeType] && props?.theme?.detailList[props?.cardThemeType]["background-color"]) ?? 'white'};
	width: ${(props) => props.width ?? "100%"};
	margin: ${props => (props?.theme?.detailList[props?.cardThemeType] && props?.theme?.detailList[props?.cardThemeType]["margin"]) ?? 'auto'};
	padding: ${props => (props?.theme?.detailList[props?.cardThemeType] && props?.theme?.detailList[props?.cardThemeType]["padding"]) ?? '1.5rem 1.25rem'};
`

export const TitleWrapper = styled.div`
    display: flex;
    margin-bottom: 1.25rem;
    align-items: flex-end;
    gap: 0.5rem;
`

export const Title = styled.h2`
    margin: 0;
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const Row = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;

export const IconContainer = styled.div<IconContainerProp>`
    width: ${props => props.iconWidth ?? '1.5rem'};
    height: ${props => props.iconHeight ?? '1.5rem'};
    margin: ${props => props.margin ?? 0};
    flex-shrink: 1;
`;

export const Label = styled.div`
    margin: 0;
    display: flex;
    /* grid-column-gap: 0.5rem; */
    align-items: center;
`

export const MutedText = styled.p`
    margin: 0;
    margin-bottom: 0.5rem;
`