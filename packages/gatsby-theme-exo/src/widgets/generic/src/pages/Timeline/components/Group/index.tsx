import React, { useState } from 'react'
import { Date, Header, ToggleButton, Wrapper } from './index.styled';

interface GroupProps {
    children: (open: boolean) => React.ReactNode;
    date: string;
}

const Group = ({ children, date}: GroupProps) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Wrapper onClick={() => setOpen(open => !open)}>
            <Header>
                <Date>{date}</Date>
                <ToggleButton>{open ? `Show Less` : `Details`}</ToggleButton>
            </Header>
            {children(open)}
        </Wrapper>
    );
};

export default Group;