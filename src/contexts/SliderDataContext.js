import React, { useState, createContext } from 'react';
import sliderImg1 from '../assets/slide1-big.jpg'
import sliderImg2 from '../assets/slide2-big.jpg'

export const SliderDataContext = createContext();

export const SliderDataProvider = ({ children }) => {
    const [sliderData, setSliderData] = useState([
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
    ])

    return (
        <SliderDataContext.Provider value={[sliderData, setSliderData]}>
            {children}
        </SliderDataContext.Provider>
    );
}