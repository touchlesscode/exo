import styled, { css } from "styled-components";

interface StyledPriceProp {
    isDiscounted ?: boolean;
}

interface InfoWrapperProp {
    width ?: string;
    screenType ?: string;
    inGrid ?: boolean;
    layout ?: "default" | "secondary";
}

interface ButtonWrapperProp {
    screenType ?: string;
    inGrid ?: boolean;
    layout ?: "default" | "secondary";
}

interface CardWrapperProp {
    layout: "default" | "secondary";
    boxShadow ?: string;
    border ?: string;
}

interface ActionWrapperProp {
    screenType ?: string;
    inGrid ?: boolean;
    layout ?: "default" | "secondary";
}


export const CardWrapper = styled.div<CardWrapperProp>`
	position: relative;
	width: 100%;
	background-color: ${(props) => (props.theme.themeType === "dark" ? props.theme.darkThemeSecondaryColor : "white")};
	box-shadow: ${(props) => props.theme.card.boxShadow ?? "none"};
	border-radius: ${(props) => props.theme.card.borderRadius}rem;
	border: ${(props) => props.theme.card.border};

	${(props) =>
		props.layout === "secondary" &&
		css`
			display: flex;
			flex-direction: row;
			gap: 2rem;
			padding: 2rem;
		`}
`


export const InfoWrapper = styled.div<InfoWrapperProp>`
	width: ${(props) => props.width ?? "100%"};
	padding: 24px 20px 32px;
	box-sizing: border-box;
    word-break: break-all;
    ${props => (!props.inGrid && props.screenType === 'lg') && css`
        display: flex;
        gap: 32px;
        justify-content: space-between;
        align-items: center;
    `}

    ${props => props.layout === "secondary" && css<InfoWrapperProp>`
        display: flex;
        flex-direction: column;
        width: 40%;
        padding: 0;
        height: fit-content;
        gap: ${props => props.screenType !== 'lg' && '1rem'}
    `}
`

export const TitleTextWrapper = styled.div<ActionWrapperProp>`
    display: flex;
    width: 100%;
    flex: 1;
    justify-content: space-between;

    p,h2 {
        margin: 0
    }

    ${props => props.screenType === "sm" && props.layout === "secondary" && css`
        flex-direction: column;
    `}
`

export const PriceWrapper = styled.div<ActionWrapperProp>`
    text-align: right;
    align-self: flex-end;

    ${props => props.screenType === "sm" && props.layout === "secondary" && css`
        text-align: left;
        align-self: flex-start;
        margin-top: 1rem;
    `}
`

export const StyledPrice = styled.p<StyledPriceProp>`
    ${props => props.isDiscounted && css`
        text-decoration: line-through;
    `}
`

export const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
    margin-top: 1.5rem;
`

export const DetailRow = styled.p`
    margin: 0;
    font-size: 17px;
    line-height: 18px;
    font-weight: 500;
    color: #656565;
    font-family: ${props => props.theme.fontFamily};
`

export const Bold = styled.span`
    font-size: 15px;
    line-height: 18px;
    font-weight: 700;
    color: #222;
`

export const ButtonWrapper = styled.div<ButtonWrapperProp>`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 1rem;

    ${props => (!props.inGrid && props.screenType === "lg") && css`
        width: 323px;
        height: 56px;
    `}
    ${props => props.layout === "secondary" && css`
        width: 100%;
        margin-top: 0;
    `}
`

export const ActionWrapper = styled.div<ActionWrapperProp>`
    ${props => (!props.inGrid && props.screenType === "lg") && css`
        align-self: flex-start;
    `}

    ${props => props.layout === "secondary" && css`
        width: 100%;
    `}
`

export const CardHelperWrapper = styled.div<ActionWrapperProp>`
    display: flex;
    flex-direction: column;
    margin-top: ${props => (!props.inGrid && props.screenType === "lg") ? '0.25rem' : '1rem'};
    text-align: center;

    p {
        margin: 0;
    }
`

export const HeartWrapper = styled.div`
    position: absolute;
    top: 21.5px;
    right: 20px;
    cursor: pointer;
    filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.35));
`