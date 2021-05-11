import React, { useState, createContext } from 'react';
import image1 from '../assets/01_care.jpg'
import image2 from '../assets/02_design.jpg'
import image3 from '../assets/03_blend_1.jpg'
import image4 from '../assets/04_koloryzacja.jpg'
import image5 from '../assets/05_so_pure.jpg'

export const SectionDataContext = createContext();

export const SectionDataProvider = ({ children }) => {
    const [sectionData, setSectionData] = useState([
        {
            link: 'care',
            size: 'big',
            image: image1,
            title: 'care',
        },
        {
            link: 'design',
            size: 'small',
            image: image2,
            title: 'design',
        },
        {
            link: 'blend',
            size: 'big',
            image: image3,
            title: 'blend',
        },
        {
            link: 'koloryzacja',
            size: 'big',
            image: image4,
            title: 'koloryzacja',
        },
        {
            link: 'so-pure',
            size: 'small',
            image: image5,
            title: 'so pure',
        },
    ])

    return (
        <SectionDataContext.Provider value={[sectionData, setSectionData]}>
            {children}
        </SectionDataContext.Provider>
    );
}