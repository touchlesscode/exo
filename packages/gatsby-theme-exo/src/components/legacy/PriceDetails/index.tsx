/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC, useEffect, useState } from "react";

import ButtonVDP from "@components/ButtonVDP";
import PriceGrid from "@components/PriceGrid";
import {
  Text,
  Flex,
  ThemeUIStyleObject,
  Button,
  Box,
  Label,
  Input,
  Select,
} from "theme-ui";
import GoBack from "../GoBack";
import down from "@assets/images/down.svg";
import styled from "@emotion/styled";
import formatter from "@utils/currency";
import { useVehicleContext } from "@contexts/useVehicleContext";
import { useIconListContext } from "@contexts/useIconListContext";
import { useCardViewContext } from "@contexts/CardViewContext";
import PriceButton from "@components/PriceButton";

type PaymentInfoType = {
  customize: boolean;
  downValue: string;
  creditTier: string;
  termLength: string;
  monthlyPrice: number;
  totalFee: number;
  errorMessage: string;
};

interface Props {
  priceData?: any;
  setPaymentInfo: React.Dispatch<React.SetStateAction<PaymentInfoType>>;
  paymentInfo: PaymentInfoType;
}

const PriceDetails: FC<Props> = (props) => {
  const { priceData, paymentInfo, setPaymentInfo } = props;
  const {
    activeView,
    selectedMode,
    previousView,
    setPreviousView,
    setActiveView,
    setSelectedMode,
  } = useCardViewContext();
  const vehicle = useVehicleContext();
  const iconList = useIconListContext();
  const FormOption = styled.option``;
  const vehiclePrice = vehicle.price_msrp || vehicle.price;
  const savings =
    (vehicle.price > 0 && vehicle.price_msrp) > vehicle.price
      ? vehicle.price - vehicle.price_msrp
      : 0;
  const ourPrice =
    vehicle.price_msrp < vehicle.price
      ? vehicle.price
      : vehiclePrice + savings + paymentInfo.totalFee;

  const infoIcon = iconList.info?.image;
  const paymentData = {
    info: [
      {
        item: vehicle.listing === "N" ? "MSRP" : "Kelley Blue Book Price",
        value: formatter.format(vehiclePrice),
        notify: false,
        icon: infoIcon,
        textColor: "#4f4f4f",
      },
      savings !== 0
        ? {
            item: "Our Savings",
            value: formatter.format(savings),
            notify: false,
            icon: infoIcon,
            textColor: "#219653",
          }
        : null,
      paymentInfo.totalFee !== 0
        ? {
            item: "Est. Tax, Titles, & Fees",
            value: `+ ${formatter.format(paymentInfo.totalFee)}`,
            notify: true,
            icon: infoIcon,
            textColor: "#4f4f4f",
          }
        : null,
      {
        item: "Our Price",
        value: formatter.format(ourPrice),
        notify: false,
        icon: infoIcon,
        textColor: "#000000",
      },
    ],
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <Flex sx={styles.wrapper as ThemeUIStyleObject}>
      <GoBack text="Back to all details" title="Price Details" />
      <PriceGrid
        priceGridData={{
          priceInfo: paymentData.info.filter((n) => !!n) as {
            item: string;
            value: string;
            notify: boolean;
            icon: any;
            textColor: string;
          }[],
        }}
        priceGridConfig={{ onClick: () => {} }}
        priceGridTheme={styles.priceStyles}
      />
      <Flex sx={styles.formWrapper as ThemeUIStyleObject}>
        <Box as="form" sx={styles.formParent as ThemeUIStyleObject}>
          <Flex sx={styles.innerParent as ThemeUIStyleObject}>
            <Flex sx={styles.parentRow as ThemeUIStyleObject}>
              <Text sx={styles.title as ThemeUIStyleObject}>
                Estimated Montly Price
              </Text>
              {paymentInfo.monthlyPrice > 0 && (
                <PriceButton
                  price={paymentInfo.monthlyPrice}
                  onClick={() => {
                    setPreviousView({
                      ...previousView,
                      disclaimer: {
                        prev: activeView,
                        selectedMode: selectedMode,
                      },
                    });
                    setActiveView("disclaimer");
                    setSelectedMode("full");
                  }}
                />
              )}
            </Flex>
            <Button
              sx={styles.button as ThemeUIStyleObject}
              className={paymentInfo.customize ? "show" : ""}
              type="button"
              onClick={() =>
                setPaymentInfo({
                  ...paymentInfo,
                  customize: !paymentInfo.customize,
                })
              }
            >
              Customize Payments
            </Button>
            {paymentInfo.customize ? (
              <Flex sx={styles.formField as ThemeUIStyleObject}>
                <Label
                  sx={styles.formLabel as ThemeUIStyleObject}
                  htmlFor="down_payment"
                >
                  Down Payment
                  <Input
                    sx={styles.formInput as ThemeUIStyleObject}
                    type="text"
                    name="down_payment"
                    id="down_payment"
                    defaultValue=""
                    onChange={(e) =>
                      setPaymentInfo({
                        ...paymentInfo,
                        downValue: e.target.value,
                      })
                    }
                  />
                </Label>
                <Label
                  sx={styles.formLabel as ThemeUIStyleObject}
                  htmlFor="credit_tier"
                >
                  Credit Rating
                  <Select
                    sx={styles.formSelect as ThemeUIStyleObject}
                    name="credit_tier"
                    id="credit_tier"
                    value={paymentInfo.creditTier}
                    onChange={(e) =>
                      setPaymentInfo({
                        ...paymentInfo,
                        creditTier: e.target.value,
                      })
                    }
                  >
                    <FormOption value="1">
                      {`Good (670-739 FICO® Score)`}
                    </FormOption>
                    <FormOption value="2">
                      {`Very Good (670-739 FICO® Score)`}
                    </FormOption>
                    <FormOption value="3">
                      {`Excellent (670-739 FICO® Score)`}
                    </FormOption>
                  </Select>
                </Label>
                <Label
                  sx={styles.formLabel as ThemeUIStyleObject}
                  htmlFor="term_length"
                >
                  Term Length
                  <Select
                    sx={styles.formSelect as ThemeUIStyleObject}
                    name="term_length"
                    id="term_length"
                    value={paymentInfo.termLength}
                    onChange={(e) =>
                      setPaymentInfo({
                        ...paymentInfo,
                        termLength: e.target.value,
                      })
                    }
                  >
                    <FormOption value="48">{`48 months`}</FormOption>
                    <FormOption value="72">{`72 months`}</FormOption>
                  </Select>
                </Label>
              </Flex>
            ) : null}
          </Flex>

          <ButtonVDP
            ButtonVDPConfig={{
              onClick: handleSubmit,
              type: "primary",
              arrowIcon: false,
              attr: {
                type: "submit",
                disabled: false,
              },
            }}
            ButtonVDPData={{
              buttonText: "Get Started",
            }}
            ButtonVDPTheme={{
              buttonStyle: {
                borderRadius: "8px",
              },
              arrowStyle: {},
            }}
          />
          {paymentInfo.errorMessage !== "" && (
            <Text sx={styles.errorMessage as ThemeUIStyleObject}>
              {paymentInfo.errorMessage}
            </Text>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

const styles = {
  wrapper: {
    flexDirection: "column",
    marginTop: "0",
  },
  priceStyles: {
    priceGridStyle: {
      flexDirection: "column",
      margin: "8px 0 16px",
    },
    itemStyle: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "18px",
      lineHeight: "30px",
      letterSpacing: "-0.02em",
      color: "#4f4f4f",
    },
    textStyle: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "18px",
      lineHeight: "30px",
      letterSpacing: "-0.02em",
      color: "#4f4f4f",
    },
    iconwrapper: {
      width: "17px",
      flexDirection: "column",
      justifyContent: "center",
    },
    iconStyle: {},
  },
  formWrapper: {
    flexDirection: "column",
    margin: "0 0 24px",
  },
  formParent: {
    display: "flex",
    flexDirection: "column",
  },
  innerParent: {
    width: "100%",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "12px",
    minHeight: "72px",
    background: "#f2f2f2",
    borderRadius: "8px",
    marginBottom: "27px",
  },
  parentRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "30px",
    letterSpacing: "-0.02em",
    color: "#4f4f4f",
    textAlign: "left",
  },
  value: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "30px",
    letterSpacing: "-0.02em",
    textAlign: "right",
    color: "#151f2a",
  },
  button: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "18px",
    paddingLeft: "0",
    paddingRight: "0",
    textAlign: "left",
    color: "#3a5f96",
    position: "relative",
    marginRight: "auto",
    cursor: "pointer",
    background: "transparent",
    backgroundColor: "transparent",
    outline: "none",
    border: "unset",
    boxShadow: "unset !important",
    "&:hover": {
      outline: "none",
      border: "unset",
      boxShadow: "unset !important",
    },
    "&:focus": {
      outline: "none",
      borderRadius: "2px",
      boxShadow:
        "0 0 0 1px #151f2a, 0 0 0 3px #ffffff, 0 0 0 5px #eca400 !important",
    },
    "&::after": {
      content: '""',
      display: "block",
      position: "absolute",
      background: ` url(${down}) center/cover no-repeat`,
      width: "10px",
      height: "8px",
      top: "50%",
      right: "-6px",
      transform: "translate(100%, -50%)",
    },
    "&.show&::after": {
      transform: "translate(100%, -50%) rotate(-180deg)",
    },
  },
  formField: {
    display: "flex",
    flexDirection: "column",
    marginTop: "24px",
    width: "100%",
  },
  formLabel: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "115%",
    letterSpacing: "0.01em",
    color: "#2d2d2d",
    marginBottom: "24px",
  },
  formInput: {
    width: "100%",
    height: "40px",
    background: "#ffffff !important",
    backgroundColor: "#ffffff !important",
    border: "1px solid #e6e6e6",
    boxSizing: "border-box",
    borderRadius: "8px",
    padding: "10px 36px 10px 16px !important",
    margin: "5px 0 0 !important",
    outline: "none",
    boxShadow: "unset",
    " &:hover": {
      outline: "none",
      border: "1px solid #e6e6e6 !important",
      boxShadow: "unset !important",
    },
    "&:focus": {
      outline: "none",
      borderRadius: "2px",
      boxShadow:
        "0 0 0 1px #151f2a, 0 0 0 3px #ffffff, 0 0 0 5px #eca400 !important",
    },
    "@media screen and (max-width: 768px)": {
      maxWidth: "100%",
    },
  },
  formSelect: {
    width: "100%",
    height: "40px",
    background: "#ffffff",
    backgroundColor: "#ffffff",
    border: "1px solid #e6e6e6",
    boxSizing: "border-box",
    borderRadius: "8px",
    padding: "10px 36px 10px 16px",
    margin: "5px 0 0 !important",
    "&:hover": {
      outline: "none",
      border: " 1px solid #e6e6e6",
      boxShadow: "unset !important",
    },
    "&:focus": {
      outline: "none",
      borderRadius: "2px",
      boxShadow:
        "0 0 0 1px #151f2a, 0 0 0 3px #ffffff, 0 0 0 5px #eca400 !important",
    },
    "@media screen and (max-width: 768px)": {
      maxWidth: "100%",
    },
  },
  formOption: {
    width: "100%",
    height: "40px",
    background: "#ffffff",
    backgroundColor: "#ffffff",
    border: "1px solid #e6e6e6",
    boxSizing: "border-box",
    borderRadius: "8px",
    padding: "10px 36px 10px 16px",
    "&:hover": {
      outline: "none",
      border: "1px solid #e6e6e6",
      boxShadow: "unset !important",
    },
    "&:focus": {
      outline: " none",
      borderRadius: "2px",
      boxShadow:
        "0 0 0 1px #151f2a, 0 0 0 3px #ffffff, 0 0 0 5px #eca400 !important",
    },
    "@media screen and (max-width: 768px)": {
      maxWidth: "100%",
    },
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
    marginTop: "1rem",
  },
  priceButton: {},
};

export default PriceDetails;
