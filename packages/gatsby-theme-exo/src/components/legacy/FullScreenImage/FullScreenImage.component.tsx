import { IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import GatsbyImage from "@components/GatsbyImage";
import styled from "styled-components";
import useLockBodyScroll from "@hooks/useLockBodyScroll";
import Close from "@components/Close";

interface FullScreenImageProps {
  image: IGatsbyImageData;
  alt: string;
  backgroundColor?: string;
  onClose: () => void;
  onClick?: () => void;
  closeBtnCss?: any;
  isOpen: boolean;
  loading?: "lazy" | "eager";
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({
  image,
  alt,
  backgroundColor = "rgba(38, 38, 38, 1)",
  onClose,
  closeBtnCss,
  isOpen,
  onClick,
  loading = "lazy",
}) => {
  useLockBodyScroll(isOpen);
  return (
    <FullScreenContainer
      bgColor={backgroundColor}
      isOpen={isOpen}
      onClick={!isOpen ? onClick : null}
      onKeyDown={onClick}
    >
      <GatsbyImage
        loading={loading}
        image={image}
        alt={alt}
        objectFit={isOpen ? "contain" : "cover"}
      />
      {isOpen ? (
        <Close
          closeTheme={{ closeStyle: closeBtnCss }}
          closeConfig={{
            onClick: onClose,
          }}
        />
      ) : null}
    </FullScreenContainer>
  );
};

export default FullScreenImage;

interface ContainerType {
  bgColor: string;
  isOpen: boolean;
}

const FullScreenContainer = styled.div<ContainerType>`
  ${({ isOpen }) =>
    isOpen
      ? `
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    z-index: 14;
  `
      : `
    width: 100%;
    height: 100%;
    cursor: zoom-in;
  `}
  background-color: ${({ bgColor }) => bgColor};
`;
