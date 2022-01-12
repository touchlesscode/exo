import styled from 'styled-components';

export const Wrapper = styled.div`
    display: block;
    width: 100%;
`

export const Title = styled.div`
    display: block;
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.theme.colors.text.l1};
    line-height: 16px;
    box-sizing: border-box;
    margin-bottom: 4px;
`

export const Description = styled.div`
    display: block;
    font-size: ${p => p.theme.fontSize.regular};
    font-weight: ${p => p.theme.fontWeight.regular};
    color: ${p => p.theme.colors.text.default};
    line-height: 20px;
    box-sizing: border-box;
`