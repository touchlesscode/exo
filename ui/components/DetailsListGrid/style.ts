import styled from "styled-components";

interface DetailsListGridWrapperProp {
    cardThemeType : 'type1' | 'type2';
}
interface OptionsWrapperProp {
    columns ?: number;
    cardThemeType : 'type1' | 'type2';
}

export const DetailsListGridWrapper = styled.div<DetailsListGridWrapperProp>`
	box-sizing: border-box;
	background-color: ${(props) => props.theme.detailList[props.cardThemeType]["background-color"] ?? "white"};
	padding: ${(props) => props.theme.detailList[props.cardThemeType]["padding"] ?? "1.5rem 1.25rem"};
	// border: ${(props) => props.theme.detailList[props.cardThemeType]["border"] ?? "none"};
	// border-radius: ${(props) => props.theme.detailList[props.cardThemeType]["border-radius"] ?? 0};
	// box-shadow: ${(props) => props.theme.detailList[props.cardThemeType]["box-shadow"] ?? "none"};
`

export const TitleText = styled.h2`
    margin: 0;
    margin-bottom: 1.5rem;
`

export const OptionsWrapper = styled.div<OptionsWrapperProp>`
    display: grid;
    grid-template-columns: ${props => props.columns ? Array(props.columns).fill('auto').join(" ") : 'auto auto auto'};
    gap: ${props => props.theme.detailList[props.cardThemeType]['gap'] ?? '1.5rem'};
    align-items: baseline;
`

export const OptionWrapper = styled.div`
`

export const LabelText = styled.p`
    margin: 0;
    margin-top: 0.5rem;
`