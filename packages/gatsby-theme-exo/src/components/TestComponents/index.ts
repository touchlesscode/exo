import styled from "styled-components";

export const TestWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: left;
    padding: 8px;
    box-sizing: border-box;
    h1 {
        display: block;
        text-align: center;
        font-size: ${p => p.theme.fontSize.regular};
        font-weight: ${p => p.theme.fontWeight.medium};
        color: ${p => p.theme.colors.text.default};
        box-sizing: border-box;
        margin-bottom: 16px;
    }
    button {
        display: block;
        border-radius: 0.375rem;
        margin-bottom: 8px;
        padding: 8px 8px;
        font-size: ${p => p.theme.fontSize.small};
        font-weight: ${p => p.theme.fontWeight.bold};
        color: ${p => p.theme.colors.text.white};
        background: ${p => p.theme.colors.primary.default};
        border: 1px solid ${p => p.theme.colors.primary.default};
        cursor: pointer;
        
        &:hover {
            background: ${p => p.theme.colors.primary.hover};
            border: 1px solid ${p => p.theme.colors.primary.hover};
        }
    }
    .item {
        display: flex;
        color: ${p => p.theme.colors.text.default};
        flex-direction: column;
        margin-bottom: 8px;
        h2 {
            font-size: ${p => p.theme.fontSize.xsmall};
            font-weight: ${p => p.theme.fontWeight.bold};
            color: ${p => p.theme.colors.text.l2};
            text-transform: uppercase;
            margin-bottom: 4px;
        }
        span {
            display: block;
            width: 100%;
        }
    }
    .scrollBody {
        display: block;
        width: 100%;
        border-top: 1px solid ${p => p.theme.colors.backgrounds.spacer};
        padding-top: 4px;
    }
`