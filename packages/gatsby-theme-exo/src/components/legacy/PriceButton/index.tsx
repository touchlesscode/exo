
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import {Button, Text, ThemeUIStyleObject } from "theme-ui";
import formatter from "@utils/currency";

interface Props {
  price: number
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const PriceButton: FC<Props> = ({ onClick, price }) => {
  return (
    <Button
      sx={styles.priceButton as ThemeUIStyleObject}
      type="button"
      onClick={onClick}
    >
      <Text sx={styles.priceValue as ThemeUIStyleObject}>
        {formatter.format(price)}
      </Text>
      <StaticImage
        src="../../assets/images/info.svg"
        width={13}
        height={13}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt="info"
        style={styles.icon}
      />
    </Button>
  );
};

const styles = {
  priceButton: {
    padding: 0,
    display: 'flex',
    color: "#3a5f96",
  },
  priceValue: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "30px",
    letterSpacing: "-0.02em",
    textAlign: "right",
  },
  icon: {
    marginTop: "8px",
    marginLeft: "4px",
  }
}
export default PriceButton;
