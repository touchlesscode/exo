import styled from "styled-components";

export const Wrapper = styled.div<{ active?: boolean }>`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 16px 0 0 16px;
    background: ${p => p.active ? p.theme.colors.primary.default : 'transparent'};
    color: ${p => p.active ? p.theme.colors.primary.text : p.theme.colors.text.l1};
    height: 108px;
    cursor: pointer;
    box-sizing: border-box;
    user-select: none;
    margin: 0;

    :hover {
        background-color: ${p => p.theme.colors.backgrounds.hover};

        .content {
            border-bottom-color: ${p => p.theme.colors.backgrounds.hover};
        }

        .title {
            color: ${p => p.theme.colors.text.l1};
        }

        .description {
            color: ${p => p.theme.colors.text.l2};
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        height: 92px;
        border-bottom: 1px solid ${p => p.active ? p.theme.colors.primary.default : p.theme.colors.backgrounds.spacer};
        padding: 0 16px 0 0;

        .action {
            margin-top: 4px;
        }
    }

    .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
    }

    .title {
        display: block;
        flex: 1;
        font-size: ${p => p.theme.fontSize.regular};
        font-weight: ${p => p.theme.fontWeight.bold};
        color: ${p => p.active ? p.theme.colors.backgrounds.white : p.theme.colors.text.l1};
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-right: 8px;
    }

    .tag {
        display: inlin-block;
        font-size: ${p => p.theme.fontSize.xsmall};
        font-weight: ${p => p.theme.fontWeight.bold};
        color: ${p => p.theme.colors.success.default};
        background: ${p => p.theme.colors.success.l2};
        letter-spacing: 0.02rem;
        text-transform: uppercase;
        border-radius: 0.375rem;
        padding: 4px 8px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .description {
        display: block;
        font-size: ${p => p.theme.fontSize.small};
        font-weight: ${p => p.theme.fontWeight.regular};
        color: ${p => p.active ? p.theme.colors.backgrounds.white : p.theme.colors.text.l2};
    }
`