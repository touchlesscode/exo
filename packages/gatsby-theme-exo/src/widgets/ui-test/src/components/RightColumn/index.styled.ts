import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 380px;
    border-left: 1px solid ${p => p.theme.colors.background.spacer};
    background: ${p => p.theme.colors.background.secondary};
`