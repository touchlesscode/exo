import React from 'react'
import { Description, Title, Wrapper } from './index.styled';

interface ItemProps {
    title?: string;
    description: string;
}

const Item = ({ title, description }: ItemProps) => {
    return (
        <Wrapper>
            {title && <Title>{title}</Title>}
            <Description dangerouslySetInnerHTML={{ __html: description }} />
        </Wrapper>
    );
}

export default Item;