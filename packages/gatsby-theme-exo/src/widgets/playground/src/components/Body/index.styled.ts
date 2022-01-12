import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    background: ${p => p.theme.colors.backgrounds.white};
    width: calc(100% - 380px - 350px - 48px);
`

export const Header = styled.div`
    display: flex;
    width: 100%;
    min-height: 59px;
    align-items: center;
    justify-content: space-between;
    padding: 0 0;
    background: ${p => p.theme.colors.backgrounds.white};
    border-bottom: 1px solid ${p => p.theme.colors.backgrounds.spacer};
    box-sizing: border-box;

    h2 {
        flex: 1;
        display: block;
        font-size: ${p => p.theme.fontSize.regular};
        font-weight: ${p => p.theme.fontWeight.medium};
        color: ${p=> p.theme.colors.text.default};
        padding-left: 16px;
        user-select: none;
    }

    div {
        width: auto;
    }
`

export const ContentArea = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #f0f1f4;
    background-image: url(./backdrop.svg);
    background-size: 33%;
`

export const TabContent = styled.div<{ visible?: boolean }>`
    display: ${p => p.visible ? 'flex' : 'none'};
    flex-direction: column;
    padding: 24px 16px;

    h3 {
        display: block;
        color: ${p => p.theme.colors.text.l1};
        font-size: ${p => p.theme.fontSize.medium};
        font-weight: ${p => p.theme.fontWeight.bold};
        text-align: center;
        margin-bottom: 24px;
        margin-top: 8px;
    }

    .form {
        padding: 16px;

        > div:not(:last-child) {
            margin-bottom: 16px;
        }
    }
        
`

export const ContentBox = styled.div`
    display: block;
    border-radius: 0.375rem;
    width: 100%;
    background-color: ${p => p.theme.colors.backgrounds.white};
    position: relative;
    margin: auto;
    box-shadow: 0 8px 16px rgb(128 128 128 / 25%);
    box-sizing: border-box;
    overflow: hidden;

    + * {
        margin-top: 24px;
    }
`

export const MessageBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 48px;
    background: ${p => p.theme.colors.backgrounds.white};
    border-top: 1px solid ${p => p.theme.colors.backgrounds.spacer};
    box-sizing: border-box;

    button {
        margin: 0 4px;
    }
`

export const SampleInput = styled.div`
    display: flex;
    flex: 1;
    font-size: ${p => p.theme.fontSize.regular};
    font-weight: ${p => p.theme.fontWeight.regular};
    color: ${p => p.theme.colors.text.l3};
    padding: 0 8px;
    user-select: none;
`

export const WidgetListItem = styled.div<{ colored?: boolean }>`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid ${p => p.theme.colors.backgrounds.spacer};
    line-height: ${p => p.theme.fontSize.medium};
    padding: 8px 16px;
    box-sizing: border-box;
    
    .title {
        display: inline-flex;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: min-content;
        white-space: nowrap;
        padding-right: 8px;
        font-size: ${p => p.theme.fontSize.regular};
        font-weight: ${p => p.theme.fontWeight.medium};
        color: ${p => p.colored ? p.theme.colors.primary.default : p.theme.colors.text.default};
        user-select: none;
    }

    .url {
        display: inline-flex;
        flex: 1;
        font-size: ${p => p.theme.fontSize.xsmall};
        font-weight: ${p => p.theme.fontWeight.regular};
        color: ${p => p.theme.colors.text.l2};        
        white-space: nowrap;
        text-overflow: ellipsis;
        box-sizing: border-box;
        overflow: hidden;
        margin-right: 8px;
    }

    .order {
        display: inline-flex;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: min-content;
        font-size: ${p => p.theme.fontSize.xsmall};
        font-weight: ${p => p.theme.fontWeight.bold};
        color: ${p => p.theme.colors.warning.default};
        background: ${p => p.theme.colors.warning.l2};
        letter-spacing: 0.02rem;
        text-transform: uppercase;
        border-radius: 0.375rem;
        padding: 2px 8px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        user-select: none;
    }

    .tag {
        display: inline-flex;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: min-content;
        font-size: ${p => p.theme.fontSize.xsmall};
        font-weight: ${p => p.theme.fontWeight.bold};
        color: ${p => p.theme.colors.info.default};
        background: ${p => p.theme.colors.info.l2};
        letter-spacing: 0.02rem;
        text-transform: uppercase;
        border-radius: 0.375rem;
        padding: 2px 8px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-left: 8px;
        user-select: none;
    }

    button {
        width: 80px;
        margin-left: 8px;
    }
`

export const SuccessBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${p => p.theme.fontSize.small};
    font-weight: ${p => p.theme.fontWeight.bold};
    text-align: center;
    background: ${p => p.theme.colors.success.default};
    color: ${p => p.theme.colors.success.l2};
    letter-spacing: 0.02rem;
    text-transform: uppercase;
    border-radius: 0.375rem;
    padding: 16px 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    user-select: none;
    margin-bottom: 24px;
`

export const WidgetListWrapper = styled.div`
    padding: 16px 0;

    > ${WidgetListItem}:last-child {
        border-bottom: 0;
    }
`

export const StatusWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    padding: 12px 16px;
    width: 100%;
    min-width: 175px;
    cursor: pointer;
    background: rgba(146,88,231,0.1);
    box-sizing: border-box;
`

export const StatusTitle = styled.div`
    margin-bottom: 4px;
    font-size: ${p => p.theme.fontSize.xsmall};
    font-weight: ${p => p.theme.fontWeight.bold};
    color: rgba(118,60,203,0.75);
`

export const StatusLabel = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: ${p => p.theme.fontSize.regular};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: #9258e7;
`

export const StatusArrow = styled.div`
    display: flex;
    margin-left: auto;
`