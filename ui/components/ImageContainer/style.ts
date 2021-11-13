import styled from "styled-components";
import { Link } from "gatsby";

export const ImageWrapper = styled.div`
    width: inherit;
    height: inherit;

    img {
        width: inherit;
        height: inherit;
    }
`;

export const ImageWrapperLink = styled(Link)`
    height: inherit;
    display: block;
    width: auto ;

    img {
        width: inherit;
        height: inherit;
    }
`;
