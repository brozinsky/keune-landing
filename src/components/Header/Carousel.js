import React, { useContext } from 'react'
import './Header.scss'
import { CurrentSlideContext } from '../../contexts/CurrentSlideContext';
import { SliderDataContext } from '../../contexts/SliderDataContext';

const Carousel = () => {
    const [currentSlide,] = useContext(CurrentSlideContext);
    const [sliderData,] = useContext(SliderDataContext);

    return (
        <div className="o1__carousel">
            {sliderData.map((slide, index) => {
                return < img
                    className={index === currentSlide ?
                        "o1__carousel-img o1__carousel-img--active"
                        : "o1__carousel-img"}
                    src={slide.img} alt="" />
            })}
        </div>
    )
}

export default Carousel