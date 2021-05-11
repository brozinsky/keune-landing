import React, { useContext } from 'react'
import './Section.scss'
import { SectionDataContext } from '../../contexts/SectionDataContext.js'
import SectionItem from './SectionItem'

const Section = () => {
    const [sectionData,] = useContext(SectionDataContext);

    return (
        <section className='o2'>
            <div className="o2__item-small">
                <div className="o2__title">
                    <div className="o2__title-number section-number">o2.</div>
                    <h2 className="o2__title-text">Marki <br /> Keune</h2>
                </div>
            </div>
            {sectionData.map(({ link, size, image, title }, index) => {
                return <SectionItem key={index} link={link} size={size} image={image} title={title} />
            })}
        </section>
    )
}

export default Section;
