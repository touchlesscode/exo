import React from 'react';
import { Container, Value, Wrapper, Title, DaysLeft } from './index.styled';

interface SetHtmlProps {
    title?: string;
    showDivider?: boolean;
    value?: string;
    daysLeft?: number;
    dateRetired?: string;
};

const SetHtml = ({ showDivider = false, value, title, daysLeft, dateRetired }: SetHtmlProps) => {

    const renderDaysLine = () =>{
        if (daysLeft && dateRetired) {
            const date = new Date(dateRetired + 'T00:00:00');
            const month = date.toLocaleString('default', { month: 'long' });
            const parsedDate = `${month} ${date.getDate()}, ${date.getFullYear()}`;
            return `Expiry Date: ${parsedDate} (in ${daysLeft} ${daysLeft >= 1 ? 'days' : 'day'}).`
        }
        return 'Expiry Date Unavalable' 
    };

    return (
        <Wrapper>
            <Container showDivider={showDivider}>
                <Title>{title}</Title>
                <DaysLeft>{renderDaysLine()}</DaysLeft>
                <Container showDivider={showDivider}>
                    <Value dangerouslySetInnerHTML={{ __html: value ?? '<p></p>' }} />
                </Container>
            </Container>
        </Wrapper>
    )
};

export default SetHtml
