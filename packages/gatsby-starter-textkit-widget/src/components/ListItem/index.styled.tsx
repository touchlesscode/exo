import styled from 'styled-components';

interface WrapperProps {
    hoverState?: boolean;
    clickable?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
    display: flex;
    align-items: start;
    justify-content: start;
    padding: 0 0 0 16px;
    box-sizing: border-box;
    cursor: ${p => p.clickable ? 'pointer' : 'auto'};
    &:hover {
        background: ${ p => p.hoverState && p.theme.colors.backgrounds.hover}
    }
`

export const Container = styled.div<{ showDivider: boolean }>`
    flex: 1;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    padding: 8px 8px 8px 0px;
    border-style: solid;
    border-bottom-width: ${p => p.showDivider ? '1px' : '0px'};
    border-bottom-color: ${p => p.theme.colors.backgrounds.spacer};
    overflow: hidden;
    box-sizing: border-box;
`

export const Date = styled.div`
    display: inline-flex;
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.theme.colors.text.l3};
    text-align: right;
    margin-left: 4px;
`

export const Title = styled.div`
    display: block;
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    line-height: 16px;
    flex: 1;
    margin-bottom: 4px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
`

export const ValueContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    width: 100%;
`

export const Value = styled.div<{ small: boolean }>`
    display: block;
    font-size: ${p => p.small ? p.theme.fontSize.small : p.theme.fontSize.regular};
    font-weight: ${p => p.theme.fontWeight.regular};
    line-height: 18px;
    width: 100%;
    max-width: 100%;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
`