import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
    width: 100%;

    h4 {
        display: block;
        font-size: ${p => p.theme.fontSize.regular};
        font-weight: ${p => p.theme.fontWeight.bold};
        line-height: ${p => p.theme.fontSize.medium};
        color: ${p => p.theme.colors.text.l2};
        margin: 16px 0;
    }
`