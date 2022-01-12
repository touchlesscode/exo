import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`

export const Title = styled.h2`
    display: block;
    font-size: ${p => p.theme.fontSize.regular};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.theme.colors.text.default};
    line-height: ${p => p.theme.fontSize.medium};
    text-align: center;
    box-sizing: border-box;
    margin-top: 24px;
    margin-bottom: 8px;
`

export const Description = styled.p`
    display: block;
    width: 236px;
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.regular};
    color: ${p => p.theme.colors.text.l2};
    line-height: ${p => p.theme.fontSize.regular};
    text-align: center;
    box-sizing: border-box;
`