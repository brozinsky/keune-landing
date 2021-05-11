import React, { useEffect, useRef } from 'react'
import './Section.scss'
import image1 from '../../assets/01_care.jpg'
import image2 from '../../assets/02_design.jpg'
import image3 from '../../assets/03_blend_1.jpg'
import image4 from '../../assets/04_koloryzacja.jpg'
import image5 from '../../assets/05_so_pure.jpg'
import gsap from 'gsap';

const InfoLink = () => {
    return (
        <a href='' className="o2__info-link">
            <span className="o2__info-line"></span>
            <span className="o2__info-text">odkryj serie</span>
            <span className="o2__info-arrow"></span>
        </a>
    )
}

const Section = () => {
    let titleRef = useRef(null);

    useEffect(() => {
        gsap.set([titleRef], { autoAlpha: 0 });
        const timeline = gsap.timeline({ defaults: { ease: 'power1.out' } });

        //added label to get rid of default delay between scenes
        timeline.addLabel('reveal')
            .fromTo(titleRef, { x: '-10vw' }, { duration: 1.4, x: '0', autoAlpha: 1, delay: 0.3 }, 'reveal')
    })


    // useEffect(() => {
    //     gsap.set([titlesRef, buttonsRef], { autoAlpha: 0 });
    //     const tl1 = gsap.timeline({ defaults: { ease: 'power1.out' } });

    //     titlesRef.fromTo(titlesRef, { x: '-10vw' }, { duration: 1.4, x: '0', autoAlpha: 1, delay: 0.3 }, 'reveal')
    //         .fromTo(buttonsRef, { x: '-100vw' }, { duration: 1.4, x: '0', autoAlpha: 1, delay: 1 }, 'reveal')
    // })

    // const animate = () => {
    //     gsap.fromTo(buttonsRef, { x: '-100vw', autoAlpha: 0, }, { duration: 1.4, x: '0', autoAlpha: 1, delay: 1 })
    //     gsap.fromTo(titlesRef, { x: '-100vw', autoAlpha: 0, }, { duration: 1.4, x: '0', autoAlpha: 1, delay: 1 })

    // }

    return (
        <section className='o2'>
            <div className="o2__item-small">
                <div className="o2__title">
                    <div className="o2__title-number section-number">o2.</div>
                    <h2
                        ref={element => { titleRef = element }}
                        className="o2__title-text">Marki <br /> Keune</h2>
                </div>
            </div>
            <div className="o2__item-big">
                <img className="o2__image" src={image1} alt="" />
                <div className="o2__info">
                    <h3
                        className="o2__info-title">Keune <br /> care</h3>
                    <InfoLink
                    />
                </div>
            </div>
            <div
                className="o2__item-small">
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
