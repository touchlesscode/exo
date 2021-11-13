import React, { FC, useState } from 'react'
import { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import CardImageContainer from '@components/CardImageContainer';
import Button from '@components/Button';
import Typography from "@components/Typography"
import EmptyLike from "@assets/icons/Like.svg";

import useWindowSize from '@hooks/useWindowSize';

import { 
    CardWrapper,
    InfoWrapper,
    TitleTextWrapper,
    PriceWrapper,
    StyledPrice,
    DetailWrapper,
    DetailRow,
    Bold,
    ActionWrapper,
    ButtonWrapper,
    CardHelperWrapper,
    HeartWrapper
} from "./style";
import { CardType } from "../type";

const Card:FC<CardType> = ({
    id,
    cardStyleType="default",
    layout="default",
    inGrid,

    imageSrc,
    gatsbyImageSrc,
    imageWidth,
    imageHeight,
    imageGallery,
    carousel,
    absolutePreview,
    
    topText,
    titleLeft,
    descriptionLeft,
    titleRight,
    newTitleRight,
    descriptionRight,
    additionalDetails,
    actionButton,
    cardHelpers,
    hasHeartIcon,
    onHeartClick
}) => {
    const { type } = useWindowSize();
    const themeContext = useContext(ThemeContext);

	const [wishListed, setWishListed] = useState(false);

	const getActionButtons = () => {
		if (Array.isArray(actionButton)) {
			return actionButton.map((button, index) => (
				<Button
					btnType={"primary"}
					key={index}
					onClick={() => button.onClick && button.onClick(id)}
					label={button.text || ""}
				/>
			))
		}
		if (actionButton) {
			return (
				<Button
                    btnType={"primary"}
					onClick={() => actionButton.onClick && actionButton.onClick(id)}
					label={actionButton.text || ""}
				/>
			)
		}
	}

	const getHelperStrings = () => {
		if (Array.isArray(cardHelpers)) {
			return cardHelpers.map((text, index) => <p key={index}><Typography type={themeContext.card[cardStyleType].cardHelperType} fontFamily={themeContext.card[cardStyleType].cardHelperFontFamily} color={themeContext.card[cardStyleType].cardHelperColour}>{text}</Typography></p>)
		}
		if (cardHelpers) {
			return <p><Typography type={themeContext.card[cardStyleType].cardHelperType} fontFamily={themeContext.card[cardStyleType].cardHelperFontFamily} color={themeContext.card[cardStyleType].cardHelperColour}>{cardHelpers}</Typography></p>
		}
	}

	const onWishlistHandler = () => {
		setWishListed((prev) => {
			onHeartClick && onHeartClick(id, !prev)
			return !prev
		})
	}

    return (
        <CardWrapper id={id} layout={layout}>
            <CardImageContainer 
                imageSrc={imageSrc}
                gatsbyImageSrc={gatsbyImageSrc}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                imageGallery={imageGallery}
                carousel={carousel}
                absolutePreview={absolutePreview}
                layout={layout}
                inGrid={inGrid}
            />
            <InfoWrapper inGrid={inGrid} screenType={type} width={imageWidth} layout={layout}>
                <div style={{width: '100%'}}>
                    <TitleTextWrapper layout={layout} screenType={type}>
                        <div>
                            {topText && <p><Typography type={themeContext.card[cardStyleType].topTextType} color={themeContext.card[cardStyleType].topTextColour}>{topText}</Typography></p>}
                            <p><Typography name={"card-title-left"} type={themeContext.card[cardStyleType].titleType} color={themeContext.card[cardStyleType].titleColour}>{titleLeft}</Typography></p>
                            {descriptionLeft && <p><Typography type={themeContext.card[cardStyleType].descriptionType} color={themeContext.card[cardStyleType].descriptionColour}>{descriptionLeft}</Typography></p>}
                        </div>
                        <PriceWrapper layout={layout} screenType={type}>
                            {newTitleRight && (
                                <p><Typography type={themeContext.card[cardStyleType].discountedPriceType} color={themeContext.card[cardStyleType].discountedPriceColour}>{newTitleRight}</Typography></p>
                            )}
                            {titleRight && (
                                <StyledPrice isDiscounted={!!newTitleRight}>
                                    <Typography name={"titleRight"} type={!!newTitleRight ? themeContext.card[cardStyleType].priceMutedType : themeContext.card[cardStyleType].priceType} color={themeContext.card[cardStyleType].priceColour}>{titleRight}</Typography>
                                </StyledPrice>
                            )}
                            {descriptionRight && <p><Typography style={{ fontWeight: 500 }} type={themeContext.card[cardStyleType].priceHelperType} fontFamily={themeContext.card[cardStyleType].priceHelperFontFamily} color={themeContext.card[cardStyleType].priceHelperColour}>{descriptionRight}</Typography></p>}
                        </PriceWrapper>
                    </TitleTextWrapper>
                    {additionalDetails && (
                        <DetailWrapper>
                            {additionalDetails.map(detail => (
                                <DetailRow key={detail.id}><Bold>{detail.key}:</Bold>{` ${detail.value}`}</DetailRow>
                            ))}
                        </DetailWrapper>
                    )}
                </div>
                <ActionWrapper layout={layout} inGrid={inGrid} screenType={type}>
                    {actionButton && <ButtonWrapper layout={layout} inGrid={inGrid} screenType={type}>{getActionButtons()}</ButtonWrapper>}
                    {cardHelpers && <CardHelperWrapper inGrid={inGrid} screenType={type}>{getHelperStrings()}</CardHelperWrapper>}
                </ActionWrapper>
            </InfoWrapper>
            {hasHeartIcon && <HeartWrapper onClick={onWishlistHandler}>
                {wishListed ? 
                    <img src={EmptyLike} alt="" />:
                    <img src={EmptyLike} alt="" />
                }
            </HeartWrapper>}
        </CardWrapper>
    )
}

export default Card
