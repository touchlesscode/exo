import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding-top: 16px;
    box-sizing: border-box;
`

export const IconHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 20px;
    box-sizing: border-box;
`

export const InfoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    flex: 1;
    padding-left: 8px;
    text-align: left;
    box-sizing: border-box;

    > div {
        > div:first-child {
            padding-top: 8px;
        }
        > div:not(:first-child) {
            padding-top: 16px;
        }
    }
`

export const Title = styled.div`
    display: block;
    width: 100%;
    font-size: ${p => p.theme.fontSize.regular};
    font-weight: ${p => p.theme.fontWeight.regular};
    color: ${p => p.theme.colors.text.default};
    line-height: 20px;

    > b, strong {
        font-weight: ${p => p.theme.fontWeight.medium};
    }
`