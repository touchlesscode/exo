import React, { FC, useEffect, useState } from 'react';

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Slider from '@components/Slider';

import {
	Container,
	ContainerWithBackgroundImage,
	CoverImageWrapper,
	PreviewBox,
	PreviewImage,
    AbsolutePreviewBox,
    AbsolutePreviewImage,
	SliderWrapper,
} from "./style"
import useWindowSize from "@hooks/useWindowSize"
import "./style.css"

interface CardImageContainerPropType {
	imageSrc?: string;
	gatsbyImageSrc?: any;
	imageWidth?: string;
	imageHeight?: string;
	imageGallery?: string[];
	carousel?: boolean;
	absolutePreview?: boolean;
    layout ?: "default" | "secondary";
	inGrid?: boolean;
}

const CardImageContainer: FC<CardImageContainerPropType> = ({
	imageSrc,
	gatsbyImageSrc,
	imageWidth,
	imageHeight,
	imageGallery = [],
	carousel,
    layout,
    absolutePreview,
	inGrid,
}) => {
	const { type } = useWindowSize()
	const [selectedImage, setSelectedImage] = useState<string | null>(null)
	const gatsbyImage = getImage(gatsbyImageSrc)

	useEffect(() => {
		setSelectedImage(imageGallery ? imageGallery[0] : null)
	}, [imageGallery])

	const onPreviewImageClickHandler = (url: string) => {
		setSelectedImage(url)
	}

	if (!((imageSrc && gatsbyImageSrc) || imageGallery)) return null

	if (carousel && imageGallery) {
		return (
			<SliderWrapper inGrid={inGrid} screenType={type} imageWidth={imageWidth} imageHeight={imageHeight} layout={layout}>
				<Slider content={imageGallery} />
			</SliderWrapper>
		)
	}

    if(imageGallery && absolutePreview){
        return (
            <Container inGrid={inGrid} screenType={type} layout={layout}>
                <CoverImageWrapper inGrid={inGrid} screenType={type} imageWidth={imageWidth} imageHeight={imageHeight} layout={layout}>
					
						 	 {imageGallery?.length > 0 && (
									<AbsolutePreviewBox inGrid={inGrid} screenType={type} imageWidth={imageWidth}>
										{imageGallery?.map((image, index) => {
											return (
												<AbsolutePreviewImage
													key={index}
													onClick={() => onPreviewImageClickHandler(image)}
												>
													<img src={image} alt={`preview-${index}`} />
												</AbsolutePreviewImage>
											)
										})}
									</AbsolutePreviewBox>
							 )}
						) : (
							<ContainerWithBackgroundImage img={selectedImage || imageSrc }>

								{imageGallery?.length > 0 && (
									<AbsolutePreviewBox inGrid={inGrid} screenType={type} imageWidth={imageWidth}>
										{imageGallery?.map((image, index) => {
											return (
												<AbsolutePreviewImage
													key={index}
													onClick={() => onPreviewImageClickHandler(image)}
												>
													<img src={image} alt={`preview-${index}`} />
												</AbsolutePreviewImage>
											)
										})}
									</AbsolutePreviewBox>
								)}
                   		 	</ContainerWithBackgroundImage>
                </CoverImageWrapper>
            </Container>
        )
    }

	return (
		<Container inGrid={inGrid} screenType={type} layout={layout}>
			<CoverImageWrapper inGrid={inGrid} screenType={type} imageWidth={imageWidth} imageHeight={imageHeight} layout={layout}>
			<ContainerWithBackgroundImage img={selectedImage || imageSrc}>
				{gatsbyImage && (
				 <GatsbyImage style={{height:'100%', width:'100%'}} image={gatsbyImage} alt='test'/>
				)}
			</ContainerWithBackgroundImage>
			</CoverImageWrapper>
			{imageGallery?.length > 0 && (
				<PreviewBox inGrid={inGrid} screenType={type} imageWidth={imageWidth} layout={layout}>
					{imageGallery?.map((image, index) => {
						return (
							<PreviewImage
								inGrid={inGrid}
								screenType={type}
								key={index}
                                layout={layout}
								onClick={() => onPreviewImageClickHandler(image)}
							>  
								<img src={image} alt={`preview-${index}`} />
							</PreviewImage>
						)
					})}
				</PreviewBox>
			)}
		</Container>
	)
}

export default CardImageContainer
