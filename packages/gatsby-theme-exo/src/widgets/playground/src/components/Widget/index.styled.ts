import styled from "styled-components";

export const WidgetWrapper = styled.div<{ visible?: boolean, collapsed?: boolean, timeline?: boolean, timelineHeight?: number, fullscreen?: boolean, partialfull?: boolean }>`
    display: flex;
    position: ${p => !p.visible ? 'absolute' : p.fullscreen ? 'absolute' : 'relative'};
    flex-grow: 1;
    background: ${p => p.timeline ? 'transparent' : p.theme.colors.backgrounds.white};
    margin: ${p => p.fullscreen || p.timeline ? '0' : '8px'};
    box-sizing: border-box;
    border-radius: 0.375rem;
    width: ${p => p.fullscreen || p.timeline ? '379px' : '363px'};
    border: ${p => p.timeline || p.fullscreen ? '0' : '1px'} solid ${p => p.theme.colors.backgrounds.spacer};
    overflow: hidden;
    flex-direction: column;
    box-sizing: border-box;
    z-index: ${p => p.fullscreen ? '10' : '1'};
    top: ${p => p.partialfull ? '25px' : p.fullscreen ? '0' : 'auto'};
    right: ${p => !p.visible ? '-9999px' : p.fullscreen ? '0' : 'auto'};
    bottom: ${p => p.fullscreen ? '0' : 'auto'};
    box-shadow: ${p => p.partialfull ? `0px -2px 8px rgb(39 40 51 / 12%);` : 'none'};

    .headerFullscreen {
        height: 59px;
        font-size: ${p => p.theme.fontSize.small};
        color: ${p => p.theme.colors.text.default};
        font-weight: ${p => p.theme.fontWeight.bold};
        border-bottom: 1px solid ${p => p.theme.colors.backgrounds.spacer};
        display: flex;
        align-items: center;

        button {
            display: flex;
            align-items: center;
            padding: 0 16px;
            height: 44px;
            position: absolute;
            font-size: ${p => p.theme.fontSize.small};
            font-weight: ${p => p.theme.fontWeight.medium};
            color: ${p => p.theme.colors.primary.default};
            user-select: none;

            svg {
                transform: rotate(180deg);
                margin-right: 4px;
            }
        }

        span {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin: 14px 16px 14px 0;
            padding-left: 14px;
        }
    }

    .header {
        height: 44px;
        font-size: ${p => p.theme.fontSize.small};
        color: ${p => p.theme.colors.text.default};
        font-weight: ${p => p.theme.fontWeight.bold};
        border-bottom: 1px solid ${p => p.theme.colors.backgrounds.spacer};
        display: flex;
        align-items: center;

        > span {
            display: flex;
            flex: 1;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin: 14px 16px 14px 0;
            padding-left: 14px;
        }

        &-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 44px;
            transform: ${p => p.collapsed ? 'none' : 'rotate(-90deg)'};
        }

        > button {
            background: transparent;
            border: 0;
        }
    }

    .content {
        display: ${p => p.collapsed ? 'none' : 'block'};
        max-height: ${p => p.timeline ? `${p.timelineHeight}px` : p.fullscreen ? 'auto' : '385px'};

        iframe {
            flex: 1;
            width: 100%;
        }
    }

    .footer {
        height: 40px;
        font-size: ${p => p.theme.fontSize.small};
        font-weight: ${p => p.theme.fontWeight.medium};
        border-top: 1px solid ${p => p.theme.colors.backgrounds.spacer};
        display: ${p => p.collapsed ? 'none' : 'flex'};
        align-items: center;
        justify-content: center;
        color: ${p => p.theme.colors.primary.default};
        cursor: pointer;
        box-sizing: border-box;
    }
`