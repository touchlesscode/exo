import styled from 'styled-components';

export const Wrapper = styled.div`
    display: block;
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
`

export const Header = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
`

export const Date = styled.div`
    display: block;
    flex: 1;
    height: 16px;
    line-height: 16px;
    text-align: left;
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.theme.colors.text.l1};
    white-space: no-wrap;
    text-overflow: ellipsis;
    overflow: hidden;
    user-select: none;
`

export const ToggleButton = styled.div`
    display: block;
    flex: 1;
    height: 16px;
    line-height: 16px;
    text-align: right;
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.theme.colors.primary.default};
    cursor: pointer;
    user-select: none;
`