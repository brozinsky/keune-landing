import React, { useState, useEffect, useRef } from 'react'
import './Header.scss'
import sliderImg1 from '../assets/slide1-big.jpg'
import sliderImg2 from '../assets/slide2-big.jpg'
import ZnakKeune from './ZnakKeune.js'

const slider = [
    {
        img: sliderImg1,
        theme: 'black',
        titleLine1: 'Bez kompromisu.',
        titleLine2: 'Idealnie takie jak lubisz.',
        subtitle: 'Keune design'
    },
    {
        img: sliderImg2,
        theme: 'white',
        titleLine1: 'Lorem Ipsum.',
        titleLine2: 'Dolor sit amet.',
        subtitle: 'Lorem'
    },
]

const Carousel = ({ currentSlide }) => {
    return (
        <div className="o1__carousel">
            {slider.map((slide, index) => {
                return < img
                    className={index === currentSlide ?
                        "o1__carousel-img o1__carousel-img--active"
                        : "o1__carousel-img"}
                    src={slide.img} alt="" />
            })}
        </div>
    )
}

const Info = ({ theme, currentSlide }) => {
    return (
        <div className={`o1__info ${theme}`}>
            <div className={`o1__container section-number ${theme}`}>
                o1.
                </div>
            <h1 className={`o1__info-title ${theme}`}>
                {slider[currentSlide].titleLine1}
                <br />
                {slider[currentSlide].titleLine2}
                <br />
                <span className={`o1__info-subtitle ${theme}`} >
                    {slider[currentSlide].subtitle} < span className="o1__info-subtitle--bold">
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


const Header = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [theme, setTheme] = useState('black')
    const length = slider.length

    const autoPlayRef = useRef()


    useEffect(() => {
        autoPlayRef.current = nextSlide
    })

    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }

        const interval = setInterval(play, 5000)
        return () => clearInterval(interval)
    }, [])


    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1
            ? 0 : currentSlide + 1)
        setTheme(currentSlide === length - 1
            ? slider[0].theme
            : slider[currentSlide + 1].theme)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0
            ? length - 1 : currentSlide - 1)
        setTheme(currentSlide === length - 1
            ? slider[0].theme
            : slider[currentSlide + 1].theme)
    }

    return (
        <header className={`o1 ${theme}`} >
            <Carousel currentSlide={currentSlide} />
            <div className="o1__panel">
                <button
                    onClick={prevSlide}
                    className="o1__panel-button o1__panel-button--prev">
                    <span className="o1__panel-button-arrow"></span>
                </button>
                <button
                    onClick={nextSlide}
                    className="o1__panel-button o1__panel-button--next">
                    <span className="o1__panel-button-arrow"></span>
                </button>
                <div className="o1__panel-container">
                    <div className="o1__panel-label">
                        {currentSlide === 0 ?
                            <div className="o1__panel-label-logo">
                                <ZnakKeune fill="#fff" />
                            </div>
                            : null}
                    </div>
                    <div className="o1__panel-label">
                        {currentSlide === 1 ?
                            <div className="o1__panel-label-logo">
                                <ZnakKeune fill="#fff" />
                            </div>
                            : null}
                    </div>
                </div>
                <span className="o1__panel-line"></span>
                <span className="o1__panel-loading"></span>
            </div>
            <Info currentSlide={currentSlide} theme={theme} />
        </header >
    )
}

export default Header
