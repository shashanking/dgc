import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <Image src="/dgc-logo.png" alt="DGC Logo" width={120} height={40} style={{ objectFit: 'contain' }} />
                </Link>
                <ul className={styles.navLinks}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
                <Link href="/contact" className="btn btn-primary">
                    Get a Quote
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
