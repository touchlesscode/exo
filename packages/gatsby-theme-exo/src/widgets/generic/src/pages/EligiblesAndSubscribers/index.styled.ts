import styled from 'styled-components';

export const Phone = styled.span<{ primary: string }>`
    font-weight: ${p => p.primary === '1' && p.theme.fontWeight.bold};
    font-size: ${p => p.theme.fontSize.small};
    color: ${p => p.theme.colors.primary.default};
    line-height: 16px;
    vertical-align: bottom;
`

export const StyledLink = styled.div`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    color: ${ p => p.theme.colors.text.default};

    &> div:first-child {
        &> div:first-child {
            padding: 16px 8px 16px 0;
        }
    }

    & .list-item__campaign {
        font-weight: ${ p => p.theme.fontWeight.medium };
    }
`;

export const Title = styled.div`
    & > svg:first-child {
        margin-right: 5px;
        vertical-align: middle;
    }
    & > svg:last-child {
        margin-left: 5px;
    }
`;

export const ExpandedItem = styled.div`
    & > div:first-child {
        margin: 8px 0 12px 0;
        font-weight: ${p => p.theme.fontWeight.medium}
    }
    & > div:nth-child(2) {
        margin-bottom: 12px;
        line-height: 118%;
    }
    & > div:nth-child(3) {
        line-height: 118%;
    }
`;

export const StyledDate = styled.span`
    color: ${p => p.theme.colors.text.l2};
    font-size: ${p => p.theme.fontSize.small};
    float: right;
    padding-right: 8px;
`;

export const EmptyContainer = styled.div<{expanded?: boolean}>`
    height: ${ p => p.expanded ? '380px' : '500px'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div:first-of-type {
        font-size: ${ p => p.theme.fontSize.medium};
        font-weight: ${ p => p.theme.fontWeight.medium};
    }
`;

export const InfoBlock = styled.div`
    text-align: left;
    margin-bottom: 16px;
    & > div:first-child {
        font-size: ${ p => p.theme.fontSize.small};
        font-weight: ${ p => p.theme.fontWeight.medium};
    }
`;

export const InfoWrapper = styled.div`
    padding: 24px 16px;
    & > div:last-child {
        margin-bottom: 0;
    }
`;