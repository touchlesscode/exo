import { useState } from 'react'
import styled, { css } from 'styled-components'
import arrow from '../../assets/images/faq/faq_arrow.svg'

interface IFaqAccordion {
    title: string
    text: string
}

const FaqAccordion = ({ title, text }: IFaqAccordion) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <AccordionWrapper>
                <Button onClick={() => setIsOpen(!isOpen)}>
                    <Title>{title}</Title>
                    <img src={arrow} alt="arrow" style={{ height: 15, width: 15, transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }} />
                </Button>
                <ContentWrapper isOpen={isOpen} style={{ padding: '0 1.5rem' }}>
                    <p>{text}</p>
                </ContentWrapper>
        </AccordionWrapper>
    )
}

const AccordionWrapper = styled.div`
    background-color: ${props => props.theme.colors['gray-0']};
    padding: 0.75rem 0;
    border-radius: 12px;
    margin-bottom: 0.25rem;
`

const Button = styled.button`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    border: 0;
    cursor: pointer;
`

const Title  = styled.div`
    font-family: ${props => props.theme.fontFamily};
    font-style: normal;
    text-align: left;
    font-weight: 500;
    font-size: 1.12500rem;
    line-height: 1.87500rem;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors['gray-100-v2']};
`
const ContentWrapper = styled.div<{ isOpen: boolean }>`
    ${props => !props.isOpen && css`
        height: 0;
        overflow: hidden;
        padding: 0;
        margin: 0;
    `}
`

export default FaqAccordion