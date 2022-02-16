import styled from "styled-components";
import { Link } from "gatsby";

interface ImageWrapperProp {
    objectFit ?: string;
}

export const ImageWrapper = styled.div<ImageWrapperProp>`
    width: inherit;
    height: inherit;
    img {
        width: inherit;
        height: inherit;
        object-fit: ${props => props.objectFit};
    }
`;

export const ImageWrapperLink = styled(Link)<ImageWrapperProp>`
    height: inherit;
    display: block;
    width: auto ;
    img {
        width: inherit;
        height: inherit;
        object-fit: ${props => props.objectFit};
    }
`;