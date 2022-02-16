import React, { FC } from 'react'

import Typography from '@components/Typography';
import TabPanel from '@components/TabPanel';
import Link from '@components/Link';
import ImageContainer from '@components/ImageContainer';

import Check from "../../assets/icons/check.svg";

import { DetailsListWrapper, TitleWrapper, Title, Row, IconContainer, Label, MutedText, List } from "./style";
import { DetailsListPropType, ListOptionType } from "./type";

const DetailsList:FC<DetailsListPropType> = ({ 
    themeType="type1",
    tabHeader,
    width,

    title, 
    titleIcon,
    
    rowIconType="none",
    rowIconWidth,
    rowIconHeight,
    options,
    allOptions,
    ...props
}) => {

    const getListLabel = (option: ListOptionType) => {
        console.log("List options")
        if(option.url){
            return (
                <Link to={option.url}>
                    <Label>
                        {option.labelIconSrc && (
                            <IconContainer iconWidth="1.25rem" iconHeight="fit-content" margin="0 0.5rem 0 0">
                                <ImageContainer source={option.labelIconSrc} alt={option.label || ""} objectFit="fill" />
                            </IconContainer>
                        )}
                        <Typography type="p9" color="gray-100-v2">{option.label}</Typography>
                    </Label>
                </Link>
            )
        }
        return (
            <Label>
                {option.labelIconSrc && (
                    <IconContainer iconWidth="1.25rem" iconHeight="fit-content" margin="0 0.5rem 0 0">
                        <ImageContainer source={option.labelIconSrc} alt={option.label || ""} objectFit="fill" />
                    </IconContainer>
                )}
                <Typography type="p9" color="gray-100-v2">{option.label}</Typography>
            </Label>
        );
    }

    const getListIcon = (option:ListOptionType) => {
        if(rowIconType === "custom" && !!option.rowIconSrc) {
            return <ImageContainer source={option.rowIconSrc} alt={option.label || ""} />;
        }
        if(rowIconType === "tick"){
            return <ImageContainer source={Check} alt={option.label || ""} />;
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
                        {rowIconType !== "none" && (
                            <IconContainer iconWidth={rowIconWidth} iconHeight={rowIconHeight}>
                                {getListIcon(option)}
                            </IconContainer>
                        )}
                        <div>
                            <MutedText>
                                <Typography type="p8" color="gray-80">{option.mutedText}</Typography>
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
            width={width}
            cardThemeType={themeType}
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
                    {title && (
                        <TitleWrapper>
                            {titleIcon && (
                                <IconContainer iconWidth="1.375" iconHeight="auto">
                                    <ImageContainer source={titleIcon} alt={title} />
                                </IconContainer>
                            )}
                            <Title><Typography type="h2" color="gray-100-v2">{title}</Typography></Title>
                        </TitleWrapper> 
                    )}
                    <ListComp />
                </>
            }
            
        </DetailsListWrapper>
    )
}

export default DetailsList