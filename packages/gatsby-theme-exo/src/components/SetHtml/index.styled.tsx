import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    padding: 0 16px;
    box-sizing: border-box;
`

export const Container = styled.div<{ showDivider: boolean }>`
    flex: 1;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    padding: 8px 0px;
    border-style: solid;
    border-bottom-width: ${p => p.showDivider ? '1px' : '0px'};
    border-bottom-color: ${p => p.theme.colors.backgrounds.spacer};
    overflow: hidden;
    box-sizing: border-box;
`

export const Title = styled.div`
    display: block;
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.medium};
    line-height: 16px;
    width: 100%;
    text-align: left;
    box-sizing: border-box;
`

export const DaysLeft = styled.div`
    font-size: 14px;
    line-height: 115%;
    letter-spacing: 0.01em;
    color: ${p => p.theme.colors.text.l2};
    margin: 10px 0px;
`;

export const Value = styled.div`
    display: block;
    font-size: ${p => p.theme.fontSize.regular};
    font-weight: ${p => p.theme.fontWeight.regular};
    line-height: 18px;
    width: 100%;
    text-align: left;
    box-sizing: border-box;
    ul {
        list-style: disc;
        margin-left: 24px;
        margin-top: 8px;
        margin-bottom: 16px;
        > li:not(:first-child) {
            margin-top: 8px;
        }
    }
    p {
        margin-bottom: 16px;
    }
    strong, b {
        font-weight: ${p => p.theme.fontWeight.bold};
    }
    ol {
        list-style: number;
        margin-left: 24px;
        margin-top: 8px;
        margin-bottom: 16px;
        > li:not(:first-child) {
            margin-top: 8px;
        }
    }
    a {
        color: ${p => p.theme.colors.primary.default};
    }
`