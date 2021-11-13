import { Link } from "gatsby";
import styled, { css } from "styled-components";

interface DetailsListWrapperProp {
    fontFamily ?: string;
    titleFontSize ?: string;
    width ?: string;
    border ?: string;
    borderRadius ?: string;
    boxShadow ?: string;
}

interface IconContainerProp {
    iconWidth ?:string;
    iconHeight ?:string;
}

interface LabelProp {
    labelColor ?: string;
    labelFontSize ?: string;
}

interface MutedTextProp {
    mutedTextColor ?: string;
    mutedTextFontSize ?: string;
}

interface StyledLinkProp  {
    labelColor ?: string;
}

export const DetailsListWrapper = styled.div<DetailsListWrapperProp>`
	background-color: white;
	box-sizing: border-box;
	width: ${(props) => props.width ?? "100%"};
	margin: auto;
	// border-radius: ${(props) => props.borderRadius ?? "none"};
	// box-shadow: ${(props) => props.boxShadow ?? "5px 7px 24px 0px rgba(0,0,0,0.3)"};
	padding: 1.5rem 1.25rem;

	${(props) =>
		props.border &&
		css`
			border: ${props.border};
		`}

	${(props) =>
		props.fontFamily &&
		css`
			font-family: ${props.fontFamily};
		`}

    ${(props) =>
		props.titleFontSize &&
		css`
			font-size: ${props.titleFontSize};
		`}
`

export const Title = styled.h2`
    margin: 0;
    margin-bottom: 1rem;
    font-family: Inter;
    color: #222222; 
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.1875rem;
`;

export const Row = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;

export const IconContainer = styled.div<IconContainerProp>`
    width: ${props => props.iconWidth ?? '1.5rem'};
    height: ${props => props.iconHeight ?? '1.5rem'};
    flex-shrink: 0;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const StyledLink = styled(Link)<StyledLinkProp>`
    color: ${props => props.labelColor ?? 'black'};
    text-decoration: underline;
`

export const Label = styled.h5<LabelProp>`
    margin: 0;
    color: ${props => props.labelColor ?? '#1c1b1a'};
    font-size: ${props => props.labelFontSize ?? '1.25rem'};
    font-family: Inter;
`

export const MutedText = styled.p<MutedTextProp>`
    margin: 0;
    color: ${props => props.mutedTextColor ?? '#222222'};
    font-size: ${props => props.mutedTextFontSize ?? '1rem'};
    font-family: Inter;

`