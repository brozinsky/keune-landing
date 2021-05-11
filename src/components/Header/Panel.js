import React, { useEffect, useContext, useRef } from 'react'
import './Header.scss'
import { CurrentSlideContext } from '../../contexts/CurrentSlideContext';
import { SliderDataContext } from '../../contexts/SliderDataContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ReactComponent as ZnakKeune } from '../../assets/znak_keune.svg';
import gsap from 'gsap';

const Panel = () => {
    const [currentSlide, setCurrentSlide] = useContext(CurrentSlideContext);
    const [sliderData,] = useContext(SliderDataContext);
    const [theme, setTheme] = useContext(ThemeContext);

    const length = sliderData.length
    const autoPlayRef = useRef()

    useEffect(() => {
        autoPlayRef.current = nextSlide
    })

    //auto change slides
    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }
        const interval = setInterval(play, 5000)

        return () => clearInterval(interval)
    }, [])

    //loading line animation
    let loadingRef = useRef(null);
    useEffect(() => {
        gsap.fromTo(loadingRef, { x: '-230px' }, { duration: 5, x: '0', autoAlpha: 1, delay: 0, ease: 'linear' })
    })

    //button functions
    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1
            ? 0 : currentSlide + 1)
        setTheme(currentSlide === length - 1
            ? sliderData[0].theme
            : sliderData[currentSlide + 1].theme)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0
            ? length - 1 : currentSlide - 1)
        setTheme(currentSlide === length - 1
            ? sliderData[0].theme
            : sliderData[currentSlide + 1].theme)
    }

    const changeSlide = (index) => {
        setCurrentSlide(index)
        setTheme(sliderData[index].theme)
    }

    return (
        <div className="o1__panel">
            <div className="o1__panel-button-container">
                <button onClick={prevSlide}
                    className={`o1__panel-button o1__panel-button-prev o1__panel-button--${theme}`}>
                    <span className={`o1__panel-button-arrow o1__panel-button-arrow--${theme}`}></span>
                </button>
                <button onClick={nextSlide}
                    className={`o1__panel-button o1__panel-button--${theme}`}>
                    <span className={`o1__panel-button-arrow o1__panel-button-arrow--${theme}`}></span>
                </button>
            </div>
            <div className="o1__panel-container">
                <div onClick={() => changeSlide(0)}
                    className={`o1__panel-label o1__panel-label--${theme}`}>
                    {currentSlide === 0 ?
                        <div className="o1__panel-label-logo">
                            <ZnakKeune fill={theme} />
                        </div>
                        : null}
                </div>
                <div onClick={() => changeSlide(1)}
                    className={`o1__panel-label o1__panel-label--${theme}`}>
                    {currentSlide === 1 ?
                        <div className="o1__panel-label-logo">
                            <ZnakKeune fill={theme} />
                        </div>
                        : null}
                </div>
            </div>
            <span className={`o1__panel-line o1__panel-line--${theme}`}></span>
            <div className={`o1__panel-loading-container`}>
                <span ref={element => { loadingRef = element }}
                    className={`o1__panel-loading o1__panel-loading--${theme}`}></span>
            </div>
        </div>
    )
}

export default Panel
