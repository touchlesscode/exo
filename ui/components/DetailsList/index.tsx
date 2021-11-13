import React, { FC } from 'react'

import Typography from '@components/Typography';
import TabPanel from '@components/TabPanel';
import Check from "../../assets/icons/check.svg";

import { DetailsListWrapper, Title, Row, IconContainer, Label, MutedText, List, StyledLink } from "./style";
import { DetailsListPropType, ListOptionType } from "./type";

const DetailsList:FC<DetailsListPropType> = ({ 
    title, 
    titleFontSize,
    iconType="none",
    options,
    fontFamily,
    mutedTextColor,
    mutedTextFontSize,
    labelColor,
    labelFontSize,
    width,
    iconWidth,
    iconHeight,
    border,
    borderRadius,
    boxShadow,
    tabHeader,
    allOptions,
    ...props
}) => {

    const getListLabel = (option: ListOptionType) => {
        console.log("Changed")
        if(option.type === "link"){
            return (
                <StyledLink labelColor={labelColor} to={option.url || "/"}>
                    <Label labelColor={labelColor} labelFontSize={labelFontSize}>
                        <Typography type="p5">{option.label}</Typography>
                    </Label>
                </StyledLink>
            )
        }
        return <Label labelColor={labelColor} labelFontSize={labelFontSize}><Typography type="p5">{option.label}</Typography></Label>;
    }

    const getListIcom = (option:ListOptionType) => {
        if(iconType === "custom" && !!option.iconSrc) {
            return <img src={option.iconSrc} alt="" />;
        }
        if(iconType === "tick"){
            return <img src={Check} alt="" />;
        }
        return null;
    }

    const ListComp = ({id}: any) => {

        let displayOptions = null;
        if(tabHeader){
            displayOptions = allOptions && allOptions.find(opt => opt.id === id)?.options;
        }else{
            displayOptions= options;
        }
        if(!displayOptions) return null;

        return (
            <List>
                {displayOptions.map(option => (
                    <Row key={option.id}>
                        {iconType !== "none" && (
                            <IconContainer iconWidth={iconWidth} iconHeight={iconHeight}>
                                {getListIcom(option)}
                            </IconContainer>
                        )}
                        <div>
                            <MutedText mutedTextColor={mutedTextColor} mutedTextFontSize={mutedTextFontSize}>
                                <Typography type="p4">{option.mutedText}</Typography>
                            </MutedText>
                            {getListLabel(option)}
                        </div>
                    </Row>
                ))}
            </List>
        )
    }

    return (
        <DetailsListWrapper 
            fontFamily={fontFamily} 
            titleFontSize={titleFontSize}
            width={width} 
            border={border}
            borderRadius={borderRadius}
            boxShadow={boxShadow}
            {...props}
        >
            {tabHeader ? (
                <TabPanel options={allOptions?.map(opt => {
                    return {
                        id: opt.id,
                        heading: opt.title,
                        active: opt.active,
                        disabled: opt.disabled
                    }
                }) || []}>
                    <ListComp />
                </TabPanel>
            ):
            <>
                {title && <Title><Typography type="h2">{title}</Typography></Title> }
                <ListComp />
            </>
            }
            
        </DetailsListWrapper>
    )
}

export default DetailsList
