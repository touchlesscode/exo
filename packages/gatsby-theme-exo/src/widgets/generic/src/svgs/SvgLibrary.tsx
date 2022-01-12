import React from 'react';
import AppleLogo from './AppleLogo';
import AndroidLogo from './AndroidLogo';
import Star from './Star';
import Calendar from './Calendar';

export interface IconProps {
    width?: number;
    height?: number;
    color?: string;
}

export interface IconComponentProps {
    iconProps: IconProps;
}

interface Props {
    name: string;
    iconProps?: IconProps;
}

const SvgLibrary = ({name, iconProps}: Props): JSX.Element => {
    const pickSvg = (name: string, iconProps: IconProps = {}): JSX.Element => {
        let pickedSvg;
        switch (name) {
            case 'apple':
                pickedSvg = <AppleLogo iconProps={iconProps} />
                break;
            case 'android':
                pickedSvg = <AndroidLogo iconProps={iconProps} />
                break;
            case 'star':
                pickedSvg = <Star iconProps={iconProps} />
                break;
            case 'calendar':
                pickedSvg = <Calendar iconProps={iconProps} />
                break;
            default:
                pickedSvg = <AndroidLogo iconProps={iconProps} />
        }
        return pickedSvg;
    }

    return (
        <>
            {pickSvg(name, iconProps)} 
        </>
    );
}

export default SvgLibrary;
