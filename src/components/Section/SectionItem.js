import React from 'react';
import InfoLink from './InfoLink'

const SectionItem = ({ link, size, image, title }) => {

    return (
        <a href={link} className={`o2__item o2__item-${size}`}>
            <img className="o2__image" src={image} alt={title} />
            <div className="o2__info">
                <div className="o2__info-title-container">
                    <h3 className="o2__info-title">Keune <br /> {title}</h3>
                    <h3 className="o2__info-title o2__info-title-secondary">Keune <br /> {title}</h3>
                </div>
                <InfoLink />
            </div>
        </a>
    )
}

export default SectionItem;