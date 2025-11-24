'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <Image src="/dgc-logo.png" alt="DGC Logo" width={120} height={40} style={{ objectFit: 'contain' }} />
                </Link>

                {/* Mobile Menu Button */}
                <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Menu */}
                <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                    <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
                    <li><Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
                    <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                    <li className={styles.mobileCta}>
                        <Link href="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>
                            Get a Quote
                        </Link>
                    </li>
                </ul>

                <Link href="/contact" className={`btn btn-primary ${styles.desktopCta}`}>
                    Get a Quote
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
