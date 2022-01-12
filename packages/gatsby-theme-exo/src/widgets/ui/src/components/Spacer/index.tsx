import styled from 'styled-components';

const SpacerDiv = styled.div`
    height: 8px;
    background-color: ${p => p.theme.colors.backgrounds.secondary};
    width: 100%;
    border-top: 1px solid ${p => p.theme.colors.backgrounds.spacer};
    border-bottom: 1px solid ${p => p.theme.colors.backgrounds.spacer};
`;

const Spacer = () => {
    return <SpacerDiv />
}

export default Spacer;