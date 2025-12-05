"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container-nav">
                {/* Logo */}
                <Link href="#" className="navbar-logo">
                    <Image src="/images/img/logo.png" alt="Daffa Logo" width={50} height={50} />
                    <span>Daffa</span>
                </Link>

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
                    <ul className="navbar-links">
                        <li>
                            <Link href="#" onClick={closeMenu}>Home</Link>
                        </li>
                        <li>
                            <Link href="#about" onClick={closeMenu}>About</Link>
                        </li>
                        <li>
                            <Link href="#interest" onClick={closeMenu}>Interest</Link>
                        </li>
                        <li>
                            <Link href="#project" onClick={closeMenu}>Project</Link>
                        </li>
                        <li>
                            <Link href="#contact" onClick={closeMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
