import React, { useState, useEffect, useContext } from 'react';
import './Menu.scss';
import { ReactComponent as Logo } from '../../assets/logo_KEUNE.svg';
import { ReactComponent as FbIcon } from '../../assets/fb.svg';
import { ReactComponent as YtIcon } from '../../assets/yt.svg';
import { ReactComponent as InstaIcon } from '../../assets/insta.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { ThemeContext } from '../../contexts/ThemeContext';


const Menu = () => {
    const [theme,] = useContext(ThemeContext);
    const [menuScroll, setMenuScroll] = useState();
    const [isOpen, setIsOpen] = useState(false);

    const handleBurger = () => {
        setIsOpen(current => !current)
    }

    const mediaQuery = window.matchMedia('(min-width: 768px)')

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    })

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
        <nav className={menuScroll !== null
            ? `menu menu--${menuScroll}`
            : `menu menu--${theme}`} >

            <div className='menu__wrapper'>
                <div className="menu__logo">
                    <Logo
                    className={menuScroll ? 'white' : theme}
                    />
                </div >
                <div
                    onClick={handleBurger}
                    className="menu__burger-menu">
                    <span
                        className={`menu__burger menu__burger--${theme}
                        ${isOpen ? 'menu__burger--open' : ''}`}></span>
                </div>
                <div className={`menu__container
                ${isOpen ? 'menu__container--open' : ''}`}
                >
                    <ul
                        className={`menu__tabs
                        menu__tabs--${theme}
                        ${isOpen ? 'menu__tabs--open' : ''}
                        ${menuScroll !== null ? 'menu__tabs--scroll' : ''}
                        `}>
                        <li>
                            <a href="nowości">Nowości</a>
                        </li>
                        <li>
                            <a href="produkty">Produkty</a>
                        </li>
                        <li>
                            <a href="trendy">Trendy</a>
                        </li>
                        <li>
                            <a href="o-firmie">O firmie</a>
                        </li>
                        <li>
                            <a href="salony">Salony</a>
                        </li>
                        <li>
                            <a href="dystrybutorzy">Dystrybutorzy</a>
                        </li>
                        <li>
                            <a href="kontakt">Kontakt</a>
                        </li>
                    </ul>
                    <div className="menu__social">
                        <a className="menu__social-icon menu__social-icon--push"
                            href="https://twitter.com/keunehq?lang=pl">
                            <TwitterIcon
                                className={menuScroll ? 'white' : theme}
                            />
                        </a>
                        <a className="menu__social-icon"
                            href="https://www.instagram.com/keunehaircosmeticspolska/?hl=pl">
                            <InstaIcon
                                className={menuScroll ? 'white' : theme}
                            />
                        </a>
                        <a className="menu__social-icon menu__social-icon--push"
                            href="https://pl-pl.facebook.com/keunepolska">
                            <FbIcon
                                className={menuScroll ? 'white' : theme}
                            />
                        </a>
                        <a className="menu__social-icon"
                            href="https://www.youtube.com/channel/UCOdtksu8bBylivZQ4znFulQ">
                            <YtIcon
                                className={menuScroll ? 'white' : theme}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Menu;