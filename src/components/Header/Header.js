import React, { useContext } from 'react'
import './Header.scss'
import { ThemeContext } from '../../contexts/ThemeContext'
import Carousel from './Carousel'
import Info from './Info'
import Panel from './Panel'

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