import React from 'react'
import './Section.scss'
import image1 from '../assets/01_care.jpg'
import image2 from '../assets/02_design.jpg'
import image3 from '../assets/03_blend_1.jpg'
import image4 from '../assets/04_koloryzacja.jpg'
import image5 from '../assets/05_so_pure.jpg'

const InfoLink = () => {
    return (
        <div className="o2__info-link">
            <span className="o2__info-line"></span>
            <span className="o2__info-text">odkryj serie</span>
            <span className="o2__info-arrow"></span>
        </div>
    )
}


const Section = () => {
    return (
        <section className='o2'>
            <div className="o2__item-small">
                <div className="o2__title">
                    <div className="o2__title-number section-number">o2.</div>
                    <h2 className="o2__title-text">Marki <br /> Keune</h2>
                </div>
            </div>
            <div className="o2__item-big">
                <img className="o2__image" src={image1} alt="" />
                <div className="o2__info">
                    <h3 className="o2__info-title">Keune <br /> care</h3>
                    <InfoLink />
                </div>
            </div>
            <div className="o2__item-small">
                <img className="o2__image" src={image2} alt="" />
                <div className="o2__info">
                    <h3 className="o2__info-title">Keune <br /> design</h3>
                    <InfoLink />
                </div>
            </div>
            <div className="o2__item-big">
                <img className="o2__image" src={image3} alt="" />
                <div className="o2__info">
                    <h3 className="o2__info-title">Keune <br /> blend</h3>
                    <InfoLink />
                </div>
            </div>
            <div className="o2__item-big">
                <img className="o2__image" src={image4} alt="" />
                <div className="o2__info">
                    <h3 className="o2__info-title">Keune <br /> koloryzacja</h3>
                    <InfoLink />
                </div>
            </div>
            <div className="o2__item-small">
                <img className="o2__image" src={image5} alt="" />
                <div className="o2__info">
                    <h3 className="o2__info-title">Keune <br /> so pure</h3>
                    <InfoLink />
                </div>
            </div>

        </section>
    )
}

export default Section;
