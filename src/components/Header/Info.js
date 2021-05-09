import React, { useContext } from 'react'
import './Header.scss'
import { CurrentSlideContext } from '../../contexts/CurrentSlideContext';
import { SliderDataContext } from '../../contexts/SliderDataContext';
import { ThemeContext } from '../../contexts/ThemeContext';

const Info = () => {
    const [currentSlide,] = useContext(CurrentSlideContext);
    const [sliderData,] = useContext(SliderDataContext);
    const [theme,] = useContext(ThemeContext);

    return (
        <div className={`o1__info ${theme}`}>
            <div className={`o1__container section-number ${theme}`}>
                o1.
                </div>
            <h1 className={`o1__info-title ${theme}`}>
                {sliderData[currentSlide].titleLine1}
                <br />
                {sliderData[currentSlide].titleLine2}
                <br />
                <span className={`o1__info-subtitle ${theme}`} >
                    {sliderData[currentSlide].subtitle} < span className="o1__info-subtitle--bold">
                        Design
                    </span>
                </span>
                <div className={`o1__button ${theme}`}>
                    <span className={`o1__button-line o1__button-line--${theme}`}></span>
                    <span className={`o1__button-link o1__button-link--${theme}`}>
                        <span className={`o1__button-arrow o1__button-arrow--${theme}`}></span>
                    </span>
                </div>
            </h1>
        </div >
    )
}

export default Info