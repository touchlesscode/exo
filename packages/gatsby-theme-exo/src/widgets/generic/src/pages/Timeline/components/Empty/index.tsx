import React from 'react'
import Image from './Image';
import { Description, Title, Wrapper } from './index.styled';

const Empty = () => {
    return (
        <Wrapper>
            <Image />
            <Title>No Activity Yet</Title>
            <Description>All future activities and events will appear in this tab</Description>
        </Wrapper>
    )
}

export default Empty;