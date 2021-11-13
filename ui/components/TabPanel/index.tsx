import useWindowSize from '@hooks/useWindowSize';
import React, { FC, useEffect, useState, cloneElement } from 'react'

import { TabHeadingWrapper, TabHeadingItem } from "./style";

interface OptionType {
    id: string;
    heading: string;
    active ?: boolean;
    disabled ?: boolean;
}

interface TabPanelPropType {
    options: OptionType[]
}

const TabPanel:FC<TabPanelPropType> = ({ options, children }) => {

    const { type } = useWindowSize();
    const [tabOptions, setTabOptions] = useState<OptionType[] | null>(null);
    const [activeOptionId, setActiveOptionId] = useState<string | null>(null);

    useEffect(() => {
        if(options){
            const activeOptionIndex = options.findIndex(opt => opt.active);
            const activeId = activeOptionIndex >=0 ? options[activeOptionIndex].id : options[0].id;
            setActiveOptionId(activeId);
            setTabOptions(JSON.parse(JSON.stringify(options)));
        }
    }, [options]);

    const onTabClickHandler = (optId: string) => {
        if(!tabOptions) return;
        // debugger;
        const updatedOptions = tabOptions.map(opt => {
            return {
                ...opt,
                active : opt.id === optId
            }
        });
        setTabOptions(updatedOptions);
        setActiveOptionId(optId);
    }

    const childrenWithProps = React.Children.map(children, (child) => {
        // Checking isValidElement is the safe way and avoids a typescript
        // error too.
        return React.cloneElement(child as React.ReactElement<React.PropsWithChildren<any>>, { id: activeOptionId });
    });

    return (
		<>
			<TabHeadingWrapper screenType={type}>
				{tabOptions &&
					tabOptions.map((option) => {
						return (
							<TabHeadingItem
								key={option.id}
								active={option.active}
								disabled={option.disabled}
								{...(!option.disabled && { onClick: () => onTabClickHandler(option.id) })}
								screenType={type}
							>
								{option.heading}
							</TabHeadingItem>
						)
					})}
			</TabHeadingWrapper>
			{childrenWithProps}
		</>
	)
}

export default TabPanel
