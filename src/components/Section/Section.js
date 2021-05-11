import React from 'react'
import './Section.scss'
import image1 from '../../assets/01_care.jpg'
import image2 from '../../assets/02_design.jpg'
import image3 from '../../assets/03_blend_1.jpg'
import image4 from '../../assets/04_koloryzacja.jpg'
import image5 from '../../assets/05_so_pure.jpg'

const InfoLink = ({ link }) => {
    return (
        <div className="o2__info-link">
            <span className="o2__info-line"></span>
            <div className="o2__info-text-container">
                <span className="o2__info-text">odkryj serie</span>
                <span className="o2__info-text o2__info-text-secondary">odkryj serie</span>
            </div>
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
            <div className="o2__item o2__item-big">
                <img className="o2__image" src={image1} alt="" />
                <div className="o2__info">
                    <div className="o2__info-title-container">
                        <h3 className="o2__info-title">Keune <br /> care</h3>
                        <h3 className="o2__info-title o2__info-title-secondary">Keune <br /> care</h3>
                    </div>
                    <InfoLink link={'care'} />
                </div>
            </div>
            <div
                className="o2__item o2__item-small">
                <img className="o2__image" src={image2} alt="" />
                <div className="o2__info">
                    <div className="o2__info-title-container">
                        <h3 className="o2__info-title">Keune <br /> design</h3>
                        <h3 className="o2__info-title o2__info-title-secondary">Keune <br /> design</h3>
                    </div>
                    <InfoLink link={'design'} />
                </div>
            </div>
            <div className="o2__item o2__item-big">
                <img className="o2__image" src={image3} alt="" />
                <div className="o2__info">
                    <div className="o2__info-title-container">
                        <h3 className="o2__info-title">Keune <br /> blend</h3>
                        <h3 className="o2__info-title o2__info-title-secondary">Keune <br /> blend</h3>
                    </div>
                    <InfoLink link={'blend'} />
                </div>
            </div>
            <div className="o2__item o2__item-big">
                <img className="o2__image" src={image4} alt="" />
                <div className="o2__info">
                    <div className="o2__info-title-container">
                        <h3 className="o2__info-title">Keune <br /> koloryzacja</h3>
                        <h3 className="o2__info-title o2__info-title-secondary">Keune <br /> koloryzacja</h3>
                    </div>
                    <InfoLink link={'koloryzacja'} />
                </div>
            </div>
            <div className="o2__item o2__item-small">
                <img className="o2__image" src={image5} alt="" />
                <div className="o2__info">
                    <div className="o2__info-title-container">
                        <h3 className="o2__info-title">Keune <br /> so pure</h3>
                        <h3 className="o2__info-title o2__info-title-secondary">Keune <br /> so pure</h3>
                    </div>
                    <InfoLink link={'so-pure'} />
                </div>
            </div>

        </section>
    )
}

export default Section;
