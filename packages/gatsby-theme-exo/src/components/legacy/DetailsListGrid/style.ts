import { getThemeObjectByType } from "@utils/index";
import styled, { css } from "styled-components";

interface DetailsListGridWrapperProp {
    cardThemeType : string;
}
interface OptionsWrapperProp {
    cardThemeType : string;
}

interface OptionWrapperProp {
    iconInline : boolean;
}

interface LabelTextProp {
    iconInline : boolean;
}

export const DetailsListGridWrapper = styled.div<DetailsListGridWrapperProp>`
	box-sizing: border-box;
	background-color: ${(props) => (props?.theme?.detailListGrid[props?.cardThemeType] && props?.theme?.detailListGrid[props?.cardThemeType]["background-color"]) ?? "white"};
	padding: ${(props) => (props?.theme?.detailListGrid[props?.cardThemeType] && props?.theme?.detailListGrid[props?.cardThemeType]["padding"]) ?? "1.5rem 1.25rem"};
	border: ${(props) => (props?.theme?.detailListGrid[props?.cardThemeType] && props?.theme?.detailListGrid[props?.cardThemeType]["border"]) ?? "none"};
	border-radius: ${(props) => (props?.theme?.detailListGrid[props?.cardThemeType] && props?.theme?.detailListGrid[props?.cardThemeType]["border-radius"]) ?? 0};
	box-shadow: ${(props) => (props?.theme?.detailListGrid[props?.cardThemeType] && props?.theme?.detailListGrid[props?.cardThemeType]["box-shadow"]) ?? "none"};
`

export const TitleText = styled.h2`
    margin: 0;
    margin-bottom: 1.5rem;
`

export const OptionsWrapper = styled.div<OptionsWrapperProp>`
    display: flex;
    flex-flow: wrap;
    gap: ${props => (props?.theme?.detailListGrid[props?.cardThemeType] && props?.theme?.detailListGrid[props?.cardThemeType]['gap']) ?? '1.5rem'};
    align-items: baseline;
    margin: ${props => (props?.theme?.detailListGrid[props?.cardThemeType] && props?.theme?.detailListGrid[props?.cardThemeType]['optionsMargin']) ?? '0'};;
`

export const OptionWrapper = styled.div<OptionWrapperProp>`
    ${props => props.iconInline && css`
        display: inline-flex;
        gap: 0.5rem;
        align-items: center;
    `}
`

export const LabelText = styled.p<LabelTextProp>`
    width: 8.125rem;
    margin: 0;
    margin-top: ${props => props.iconInline ? 0: '0.5rem'};
`

interface LabelProp {
    themeType ?: string;
}

export const Label = styled.p<LabelProp>`
    margin: 0;
    ${props => getThemeObjectByType((props?.theme?.detailListGrid && props?.theme.detailListGrid[props?.themeType || ""]?.labelFont) ?? "p4", props?.theme?.text)};
    font-family: ${props => props?.theme?.fontFamily};
    font-weight: ${(props => props?.theme?.detailListGrid && props?.theme?.detailListGrid[props?.themeType || ""]?.labelWeight)};
    color: ${(props => props?.theme?.detailListGrid && props?.theme?.detailListGrid[props?.themeType || ""]?.color)};
`