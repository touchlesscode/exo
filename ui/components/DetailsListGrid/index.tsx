import Grid from '@components/Grid';
import Typography from '@components/Typography';
import React, { FC } from 'react'

import { DetailsListGridWrapper, TitleText, OptionsWrapper, OptionWrapper, LabelText } from "./style";

type OptionType = {
    id: string;
    label: string;
    icon: string;
}

interface DetailsListGridPropType {
    title: string;
    columns ?: number;
    cardThemeType ?: 'type1' | 'type2';
    options: OptionType[];
}

const DetailsListGrid: FC<DetailsListGridPropType> = (props) => {
	const { title, columns, cardThemeType = "type1", options } = props
	return (
		<DetailsListGridWrapper cardThemeType={cardThemeType} {...props}>
			<TitleText>
				<Typography name="details-list-grid-title" type="h2" color="gray-100-v2">
					{title}
				</Typography>
			</TitleText>
			<OptionsWrapper columns={columns} cardThemeType={cardThemeType}>
				{options.map((option) => (
					<OptionWrapper key={option.id}>
						<img src={option.icon} alt={option.label} />
						<LabelText>
							<Typography name="details-list-grid-label" type="p4" color="gray-100-v2">
								{option.label}
							</Typography>
						</LabelText>
					</OptionWrapper>
				))}
			</OptionsWrapper>
		</DetailsListGridWrapper>
	)
}

export default DetailsListGrid
