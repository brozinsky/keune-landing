import React, { useContext, useEffect, useRef } from 'react'
import './Header.scss'
import { CurrentSlideContext } from '../../contexts/CurrentSlideContext';
import { SliderDataContext } from '../../contexts/SliderDataContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import gsap from 'gsap';

const Info = () => {
    const [currentSlide,] = useContext(CurrentSlideContext);
    const [sliderData,] = useContext(SliderDataContext);
    const [theme,] = useContext(ThemeContext);

    let sectionTitleRef = useRef(null);
    let titleRef = useRef(null);
    let subtitleRef = useRef(null);
    let buttonRef = useRef(null);

    useEffect(() => {
        gsap.set([sectionTitleRef, titleRef, subtitleRef, buttonRef], { autoAlpha: 0 });
        const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

        //added label to get rid of default delay between scenes
        tl.addLabel('reveal')
            .fromTo(sectionTitleRef, { y: '-10vh' }, { duration: 1.4, y: '0', autoAlpha: 1, delay: 0.3 }, 'reveal')
            .fromTo(titleRef, { x: '-10vw' }, { duration: 1.4, x: '0', autoAlpha: 1, delay: 0.3 }, 'reveal')
            .fromTo(subtitleRef, { y: '100vh' }, { duration: 2, y: '0', autoAlpha: 1, delay: 1 }, 'reveal')
            .fromTo(buttonRef, { x: '-100vw' }, { duration: 1.4, x: '0', autoAlpha: 1, delay: 1 }, 'reveal')
    })

    return (
        <div className={`o1__info ${theme}`}>
            <div
                ref={element => { sectionTitleRef = element }}
                className={`o1__container section-number ${theme}`}>
                o1.
                </div>
            <div
                className={`o1__info-title ${theme}`}
            >
                <h1
                    ref={element => { titleRef = element }}
                >
                    {sliderData[currentSlide].titleLine1}
                    <br />
                    {sliderData[currentSlide].titleLine2}
                    <br />
                </h1>
                <span
                    ref={element => { subtitleRef = element }}
                    className={`o1__info-subtitle ${theme}`}
                >
                    {sliderData[currentSlide].subtitle} < span className="o1__info-subtitle--bold">
                        Design
                    </span>
                </span>
                <div
                    ref={element => { buttonRef = element }}
                    className={`o1__button ${theme}`}>
                    <span
                        className={`o1__button-line o1__button-line--${theme}`}></span>
                    <span
                        className={`o1__button-link o1__button-link--${theme}`}>
                        <span className={`o1__button-arrow o1__button-arrow--${theme}`}></span>
                    </span>
                </div>
            </div>
        </div >
    )
}

export default Info