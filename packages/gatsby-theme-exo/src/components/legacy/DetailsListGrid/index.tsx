import React, { FC, useContext } from 'react'

import { ThemeContext } from 'styled-components';

import ImageContainer from '@components/ImageContainer';
import Typography from '@components/Typography';

import { DetailsListGridWrapper, TitleText, OptionsWrapper, OptionWrapper, LabelText, Label } from "./style";

type OptionType = {
    id: string;
    label: string;
    icon: string;
}

interface DetailsListGridPropType {
    title: string;
    themeType ?: string;
    iconInline ?: boolean;
    options: OptionType[];
}

const DetailsListGrid: FC<DetailsListGridPropType> = (props) => {
	
    const { title, themeType = "type1", iconInline=false, options } = props
    const themeContext = useContext(ThemeContext);

    const detailListTheme = themeContext.detailListGrid;
	
    return (
		<DetailsListGridWrapper cardThemeType={themeType} {...props}>
			<TitleText>
				<Typography 
                    name="details-list-grid-title" 
                    type={(detailListTheme && detailListTheme[themeType]?.titleFont) ?? "h2"}
                    color={(detailListTheme && detailListTheme[themeType]?.titleColor) ?? "gray-100-v2"}
                    fontWeight={(detailListTheme && detailListTheme[themeType]?.titleWeight)}
                >
					{title}
				</Typography>
			</TitleText>
			<OptionsWrapper cardThemeType={themeType}>
				{options.map((option) => (
					<OptionWrapper key={option.id} iconInline={iconInline}>
                        <div style={{ width: '2rem', height: '2rem' }}>
                            <ImageContainer source={option.icon} alt={option.label} objectFit="scale-down" />
                        </div>
						<LabelText iconInline={iconInline}>
							{/* <Typography 
                                name="details-list-grid-label" 
                                type={(detailListTheme && detailListTheme[themeType]?.labelFont) ?? "p4"}
                                color={(detailListTheme && detailListTheme[themeType]?.labelColor) ?? "gray-100-v2"}
                                fontWeight={(detailListTheme && detailListTheme[themeType]?.labelWeight)}
                            > */}
                            <Label themeType={themeType}>{option.label}</Label>
							{/* </Typography> */}
						</LabelText>
					</OptionWrapper>
				))}
			</OptionsWrapper>
		</DetailsListGridWrapper>
	)
}

export default DetailsListGrid