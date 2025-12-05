"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { theme, toggleTheme, mounted } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsLangOpen(false);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsLangOpen(false);
    };

    const handleLanguageChange = (lang) => {
        toggleLanguage(lang);
        setIsLangOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container-nav">
                {/* Logo */}
                <Link href="#" className="navbar-logo">
                    <Image src="/images/img/logo.png" alt="Daffa Logo" width={50} height={50} />
                    <span>Daffa</span>
                </Link>

                {/* Desktop Controls */}
                <div className="navbar-controls">
                    {/* Theme Toggle */}
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {mounted && theme === "dark" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        )}
                    </button>

                    {/* Language Selector */}
                    <div className="language-selector">
                        <button
                            className="language-toggle"
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            aria-label="Select language"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                            <span>{language.toUpperCase()}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`chevron ${isLangOpen ? 'open' : ''}`}>
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        {isLangOpen && (
                            <div className="language-dropdown">
                                <button
                                    className={`lang-option ${language === 'en' ? 'active' : ''}`}
                                    onClick={() => handleLanguageChange('en')}
                                >
                                    🇺🇸 English
                                </button>
                                <button
                                    className={`lang-option ${language === 'id' ? 'active' : ''}`}
                                    onClick={() => handleLanguageChange('id')}
                                >
                                    🇮🇩 Indonesia
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Toggle Button */}
                <div
                    className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Navbar Menu */}
                <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
                    {/* Mobile Controls */}
                    <div className="mobile-controls">
                        <button
                            className="theme-toggle"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            {mounted && theme === "dark" ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="23"></line>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line x1="21" y1="12" x2="23" y2="12"></line>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            )}
                            <span>{mounted && theme === "dark" ? "Light" : "Dark"}</span>
                        </button>
                        <div className="mobile-lang-selector">
                            <button
                                className={`mobile-lang-btn ${language === 'en' ? 'active' : ''}`}
                                onClick={() => handleLanguageChange('en')}
                            >
                                EN
                            </button>
                            <button
                                className={`mobile-lang-btn ${language === 'id' ? 'active' : ''}`}
                                onClick={() => handleLanguageChange('id')}
                            >
                                ID
                            </button>
                        </div>
                    </div>

                    <ul className="navbar-links">
                        <li>
                            <Link href="#" onClick={closeMenu}>{t("nav.home")}</Link>
                        </li>
                        <li>
                            <Link href="#about" onClick={closeMenu}>{t("nav.about")}</Link>
                        </li>
                        <li>
                            <Link href="#interest" onClick={closeMenu}>{t("nav.interest")}</Link>
                        </li>
                        <li>
                            <Link href="#project" onClick={closeMenu}>{t("nav.project")}</Link>
                        </li>
                        <li>
                            <Link href="#contact" onClick={closeMenu}>{t("nav.contact")}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
