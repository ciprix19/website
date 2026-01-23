import './styles/header.css';
import { useRef, useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const ref = useRef<HTMLUListElement>(null);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="main-header">
            <div className="nav-wrapper wrapper">
                <a href='#landing'><img className='logo' src='images/logo.png' alt='logo' /></a>
                <button
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <nav className="primary-navigation">
                    <ul
                        ref={ref}
                        className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
                    >
                        <li>
                            <a href="#about">about</a>
                        </li>
                        <li>
                            <a href="#resume">resume</a>
                        </li>
                        <li>
                            <a href="#contact">contact</a>
                        </li>
                        <li>
                            <ul className="socials">
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/ciprix19/"
                                        target="_blank"
                                    >
                                        <img
                                            className="icon social-media"
                                            src="images/icons/linkedin.svg"
                                            alt="linkedin"
                                        ></img>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/ciprix19"
                                        target="_blank"
                                    >
                                        <img
                                            className="icon social-media"
                                            src="images/icons/github.svg"
                                            alt="github"
                                        ></img>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
