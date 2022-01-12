import React from 'react';
import styled, { useTheme } from 'styled-components';
import ChevronDown from '../../../icons/ChevronDown';
import ChevronUp from '../../../icons/ChevronUp';
import { Option } from '../../../components/Dropdown';

interface UserSelectProps {
    selected?: Option;
    open: boolean;
}

const Wrapper = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${p => p.theme.fontSize.small};
    color: ${p => p.theme.colors.primary.default};
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: ${p => p.theme.colors.primary.default};
    padding: 4px 8px;
`

const Label = styled.span`
    margin-right: 4px;
    user-select: none;
`

const UserSelect = ({ selected, open }: UserSelectProps) => {
    const theme = useTheme();

    return (
        <Wrapper>
            <Label>{selected?.label ?? 'Select'}</Label>
            {open && <ChevronUp width={8} height={6} color={theme.colors.primary.default} /> }
            {!open && <ChevronDown width={8} height={6} color={theme.colors.primary.default} /> }
        </Wrapper>
    );
}

export default UserSelect;