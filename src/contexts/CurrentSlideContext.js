import React, { useState, createContext } from 'react';

export const CurrentSlideContext = createContext();

export const CurrentSlideProvider = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    return (
        <CurrentSlideContext.Provider value={[currentSlide, setCurrentSlide]}>
            {children}
        </CurrentSlideContext.Provider>
    );
}