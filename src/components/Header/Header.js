import React, { useContext } from 'react'
import './Header.scss'
import { ThemeContext } from '../../contexts/ThemeContext'
import Carousel from './Carousel'
import Info from './Info'
import Panel from './Panel'

// const slider = [
//     {
//         img: sliderImg1,
//         theme: 'black',
//         titleLine1: 'Bez kompromisu.',
//         titleLine2: 'Idealnie takie jak lubisz.',
//         subtitle: 'Keune design'
//     },
//     {
//         img: sliderImg2,
//         theme: 'white',
//         titleLine1: 'Lorem Ipsum.',
//         titleLine2: 'Dolor sit amet.',
//         subtitle: 'Lorem'
//     },
// ]

const Header = () => {
    const [theme,] = useContext(ThemeContext);

    return (
        <header className={`o1 ${theme}`} >
            <Carousel />
            <Panel />
            <Info />
        </header >
    )
}

export default Header