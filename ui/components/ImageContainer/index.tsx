import React, { FC } from 'react'

import { ImageWrapper, ImageWrapperLink } from "./style";

interface LogoPropType {
    source: string;
    alt: string;
    url ?: string;
}

const ImageContainer:FC<LogoPropType> = ({ source, url, alt }) => {
    if(!!url){
        return (
            <ImageWrapperLink to={url}>
                <img src={source} alt={alt} />
            </ImageWrapperLink>
        )
    }
    return (
        <ImageWrapper>
            <img src={source} alt={alt} />
        </ImageWrapper>
    )
}

export default ImageContainer
