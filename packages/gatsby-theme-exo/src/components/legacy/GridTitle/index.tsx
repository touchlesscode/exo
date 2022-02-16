import styled from 'styled-components'

interface IGridTitleProps {
    text: string
    longBorder?: boolean
}

const GridTitle = ({ text, longBorder }: IGridTitleProps ) => {
    return (
        <Title longBorder={longBorder}>{text}</Title>
    )
}

const Title = styled.h2<{ longBorder?: boolean }>`
    font-family: ${props => props.theme.fontFamily};
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.37500rem;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors['gray-100-v2']};
    position: relative;
    max-width: max-content;
    margin-bottom: 40px;
    padding-top: 6px;

   
`

export default GridTitle