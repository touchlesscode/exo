import React, { ReactNode } from 'react';
import { Container, Date, Title, Value, ValueContainer, Wrapper } from './index.styled';

interface ListItemProps {
    date?: string | null;
    icon?: ReactNode;
    showDivider?: boolean;
    small?: boolean;
    tag?: ReactNode;
    title: string | JSX.Element;
    value: string | JSX.Element | null | undefined;
    hoverState?: boolean;
    onClick?: () => void;
}

const ListItem = ({ date, icon, showDivider = false, small  = false, tag, title, value, hoverState = false, onClick }: ListItemProps) => {
    return (
        <Wrapper hoverState={hoverState} clickable={onClick !== undefined} onClick={onClick}>
            <Container showDivider={showDivider}>
                <ValueContainer>
                    <Title>{title}</Title>
                    {tag}
                </ValueContainer>
                <ValueContainer>
                    <Value small={small}>{value ?? '—'}</Value>
                    {icon}
                    {date && <Date>{date}</Date>}
                </ValueContainer>
            </Container>
        </Wrapper>
    );
}

export default ListItem;