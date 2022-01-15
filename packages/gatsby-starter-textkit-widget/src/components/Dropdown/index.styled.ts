import styled from 'styled-components';

export const Container = styled.div<{ openTop?: boolean, topMargin?: number }>`
    position: relative;
    display: block;
    width: 100%;
    box-sizing: border-box;
    text-align: left;
    .widget--dropdown {
        text-align: left;
        &--display {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 40px;
            width: 100%;
            background: ${p => p.theme.colors.backgrounds.white};
            border-radius: 6px;
            border-width: 1px;
            border-style: solid; 
            border-color: ${p => p.theme.colors.backgrounds.spacer};
            padding: 0 16px;
            cursor: pointer;
            &:focus, &:active, &:focus-visible, &_open {
                border-color: ${p => p.theme.colors.primary.default};
                outline: none;
            }
        }
        &--display_custom {
            display: inline-block;
            text-align: left;
            background: transparent;
            border-width: 0;
            border-style: solid; 
            border-color: transparent;
            cursor: pointer;
            padding: 0;
            &:focus, &:active, &:focus-visible {
                border-color: transparent;
                ouline: none;
            }
        }
        &--label {
            display: block;
            font-size: ${p => p.theme.fontSize.small};
            font-weight: ${p => p.theme.fontWeight.medium};
            line-height: ${p => p.theme.fontSize.regular};
            color: ${p => p.theme.colors.text.default};
            margin-bottom: 4px;
            text-align: left;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            user-select: none;
        }
        &--selected {
            display: block;
            flex: 1;
            font-family: 'BrandonText';
            font-weight: 400;
            font-size: ${p => p.theme.fontSize.regular};
            color: ${p => p.theme.colors.text.default};
            padding-right: 8px;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
            user-select: none;
        }
        &--placeholder {
            color: ${p => p.theme.colors.text.l2};
        }
        &--menu {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            height: auto;
            width: 100%;
            background: ${p => p.theme.colors.backgrounds.white};
            border-radius: 6px;
            border-width: 1px;
            border-style: solid; 
            border-color: ${p => p.theme.colors.backgrounds.spacer};
            overflow: hidden;
            box-shadow: 0px 4px 8px rgba(128, 128, 128, 0.2);
            outline: none;
            z-index: 10;
            bottom: ${p => p.openTop ? (p.topMargin) ? `${p.topMargin}px` : '40px' : 'auto'};
        }
        &--search {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-shrink: 0;
            flex-grow: 0;
            width: 100%;
            height: 32px;
            padding: 0 16px;
            border-bottom-width: 1px;
            border-bottom-style: solid;
            border-bottom-color: ${p => p.theme.colors.backgrounds.spacer};
            box-sizing: border-box;
            &_input {
                display: inline-block;
                border-color: transparent;
                font-family: 'BrandonText';
                font-size: ${p => p.theme.fontSize.small};
                font-weight: ${p => p.theme.fontWeight.regular};
                color: ${p => p.theme.colors.text.default};
                width: 100%;
                outline: none;
                box-sizing: border-box;
                &::placeholder {
                    color: ${p => p.theme.colors.text.l3};
                }
            }
        }
        &--options {
            flex: 1;
            width: 100%;
            overflow-x: hidden;
            overflow-y: auto;
        }
        &--group-wrapper {
            display: block;
            width: 100%;
            border-bottom-width: 1px;
            border-bottom-style: solid;
            border-bottom-color: ${p => p.theme.colors.backgrounds.spacer};
        }
        &--group_title {
            display: block;
            font-size: ${p => p.theme.fontSize.xsmall};
            font-weight: ${p => p.theme.fontWeight.medium};
            color: ${p => p.theme.colors.text.l3};
            text-align: left;
            text-transform: uppercase;
            padding: 16px 16px 6px 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        &--option {
            display: block;
            font-size: ${p => p.theme.fontSize.small};
            font-weight: ${p => p.theme.fontWeight.medium};
            color: ${p => p.theme.colors.text.default};
            text-align: left;
            padding: 8px 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            cursor: pointer;
            &:hover, &_active {
                color: ${p => p.theme.colors.text.default};
                background-color: ${p => p.theme.colors.backgrounds.hover};
            }
            &_selected {
                color: ${p => p.theme.colors.backgrounds.white};
                background-color: ${p => p.theme.colors.primary.default};
            }
        }
    }
`