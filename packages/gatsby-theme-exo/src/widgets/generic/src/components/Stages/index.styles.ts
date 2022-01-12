import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

export const Stage = styled.div<{ active: boolean, completed: boolean }>`
    display: inline-block;
    width: 20px;
    height: 8px;
    border-radius: 2px;
    background-color: ${p => p.completed ? p.theme.colors.success.default : p.active ? p.theme.colors.warning.l1 : p.theme.colors.backgrounds.spacer};
    margin-left: 4px;
`