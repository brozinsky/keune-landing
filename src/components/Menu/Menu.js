import React, { useState, useEffect, useContext } from 'react';
import './Menu.scss';
import { ReactComponent as Logo } from '../../assets/logo_KEUNE.svg';
import { ReactComponent as FbIcon } from '../../assets/fb.svg';
import { ReactComponent as YtIcon } from '../../assets/yt.svg';
import { ReactComponent as InstaIcon } from '../../assets/insta.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { ThemeContext } from '../../contexts/ThemeContext';
import { SectionDataContext } from '../../contexts/SectionDataContext';

const Menu = () => {
    const [theme,] = useContext(ThemeContext);
    const [sectionData,] = useContext(SectionDataContext);
    const [menuScroll, setMenuScroll] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [isDropped, setIsDropped] = useState(false);

    const handleBurger = () => {
        setIsOpen(current => !current)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    })

    //adds class to menu when scrolling down
    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            if (!menuScroll) {
                setMenuScroll('scroll');
            }
        } else {
            if (menuScroll) {
                setMenuScroll(null);
            }
        }
    }

    return (
        <nav className={menuScroll || isDropped || isOpen
            ? `menu menu--scroll`
            : `menu menu--${theme}`} >
            <div className='menu__wrapper'>
                <div className="menu__logo">
                    <Logo className={menuScroll || isDropped || isOpen
                        ? 'white' : theme}
                    />
                </div >
                <div
                    onClick={handleBurger}
                    className="menu__burger-menu">
                    <span
                        className={`menu__burger menu__burger--${theme}
                        ${isOpen ? 'menu__burger--open' : ''}
                        ${menuScroll ? 'menu__burger--scroll' : ''}`}></span>
                </div>
                <div className={`menu__container
                ${isOpen ? 'menu__container--open' : ''}`}>
                    <ul onMouseEnter={() => { setIsDropped(true) }}
                        onMouseLeave={() => { setIsDropped(false) }}
                        className={`menu__dropdown
                    ${isDropped ? 'menu__dropdown--active' : ''}`}>
                        {sectionData.map(({ link, title }, index) => {
                            return <li key={index}><a href={link}>{title}</a></li>
                        })}
                    </ul>
                    <ul className={`menu__tabs
                        menu__tabs--${theme}
                        ${isOpen ? 'menu__tabs--open' : ''}
                        ${menuScroll || isDropped || isOpen ? 'menu__tabs--scroll' : ''}
                        `}>
                        <li className='menu__tabs-item'>
                            <a href="nowości">Nowości</a>
                        </li>
                        <li className='menu__tabs-item menu__tabs-container'
                            onMouseEnter={() => { setIsDropped(true) }}
                            onMouseLeave={() => { setIsDropped(false) }}
                        >
                            <a href="produkty">Produkty </a>
                            <div className='menu__tabs-arrow-container'>
                                <span className={`menu__tabs-arrow
                                menu__tabs-arrow--${theme}
                                ${menuScroll || isDropped || isOpen ? 'menu__tabs-arrow--scroll' : ''}`} />
                            </div>
                        </li>
                        <li className='menu__tabs-item'>
                            <a href="trendy">Trendy</a>
                        </li>
                        <li className='menu__tabs-item'>
                            <a href="o-firmie">O firmie</a>
                        </li>
                        <li className='menu__tabs-item'>
                            <a href="salony">Salony</a>
                        </li>
                        <li className='menu__tabs-item'>
                            <a href="dystrybutorzy">Dystrybutorzy</a>
                        </li>
                        <li className='menu__tabs-item'>
                            <a href="kontakt">Kontakt</a>
                        </li>
                    </ul>
                    <div className="menu__social">
                        <a className="menu__social-icon menu__social-icon--push"
                            href="https://twitter.com/keunehq?lang=pl">
                            <TwitterIcon
                                className={menuScroll || isDropped || isOpen ? 'white' : theme}
                            />
                        </a>
                        <a className="menu__social-icon"
                            href="https://www.instagram.com/keunehaircosmeticspolska/?hl=pl">
                            <InstaIcon
                                className={menuScroll || isDropped || isOpen ? 'white' : theme}
                            />
                        </a>
                        <a className="menu__social-icon menu__social-icon--push"
                            href="https://pl-pl.facebook.com/keunepolska">
                            <FbIcon
                                className={menuScroll || isDropped || isOpen ? 'white' : theme}
                            />
                        </a>
                        <a className="menu__social-icon"
                            href="https://www.youtube.com/channel/UCOdtksu8bBylivZQ4znFulQ">
                            <YtIcon
                                className={menuScroll || isDropped || isOpen ? 'white' : theme}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Menu;