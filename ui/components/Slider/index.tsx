import React, {FC, useState} from 'react'

import SliderButton from '@components/SliderButton';

import { SlideContainer, Slide } from "./style";

interface SliderPropType {
    content: string[];
}

const Slider:FC<SliderPropType> = ({ content }) => {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== content.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === content.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(content.length)
        }
    }

    return (
        <SlideContainer>
            {content.map((obj, index) => {
                return (
                    <Slide key={index} active={slideIndex === index + 1}>
                        <img src={obj} alt={`slide-${index}`} />
                    </Slide>
                )
            })}
            <SliderButton moveSlide={nextSlide} direction="left" />
            <SliderButton moveSlide={prevSlide} direction="right" />
        </SlideContainer>
    )
}

export default Slider;