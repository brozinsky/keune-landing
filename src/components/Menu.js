import React from 'react';
import './Menu.scss';
import { ReactComponent as Logo } from '../assets/logo_KEUNE.svg';
import { ReactComponent as FbIcon } from '../assets/fb.svg';
import { ReactComponent as YtIcon } from '../assets/yt.svg';
import { ReactComponent as InstaIcon } from '../assets/insta.svg';
import { ReactComponent as TwitterIcon } from '../assets/twitter.svg';


const Menu = () => {

    return (
        <nav className="menu">
            <div className="menu__wrapper">
                <div>
                    <Logo />
                </div >
                <div className="menu__container">
                    <ul>
                        <li>
                            <a href="#">Nowości</a>
                        </li>
                        <li>
                            <a href="#">Produkty</a>
                        </li>
                        <li>
                            <a href="#">Trendy</a>
                        </li>
                        <li>
                            <a href="#">O firmie</a>
                        </li>
                        <li>
                            <a href="#">Salony</a>
                        </li>
                        <li>
                            <a href="#">Dystrybutorzy</a>
                        </li>
                        <li>
                            <a href="#">Kontakt</a>
                        </li>
                    </ul>
                    <div className="menu__social">
                        <a className="menu__social-icon menu__social-icon--push"
                            href="https://twitter.com/keunehq?lang=pl">
                            <TwitterIcon fill="#fff" />
                        </a>
                        <a className="menu__social-icon"
                            href="https://www.instagram.com/keunehaircosmeticspolska/?hl=pl">
                            <InstaIcon fill="#fff" />
                        </a>
                        <a className="menu__social-icon menu__social-icon--push"
                            href="https://pl-pl.facebook.com/keunepolska">
                            <FbIcon fill="#fff" />
                        </a>
                        <a className="menu__social-icon"
                            href="https://www.youtube.com/channel/UCOdtksu8bBylivZQ4znFulQ">
                            <YtIcon fill="#fff" />
                        </a>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Menu;