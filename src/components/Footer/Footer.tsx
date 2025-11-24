import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { client } from '@/lib/sanity';
import { companyInfoQuery } from '@/lib/queries';

const Footer = async () => {
    const companyInfo = await client.fetch(companyInfoQuery);

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.column}>
                    <div className={styles.footerLogo}>
                        <Image src="/dgc-logo.png" alt="DGC Logo" width={150} height={50} style={{ objectFit: 'contain' }} />
                    </div>
                    <p>{companyInfo?.name || 'Digital Global Compliance'}</p>
                    <p>{companyInfo?.tagline || 'Your partner in compliance and testing.'}</p>
                </div>
                <div className={styles.column}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4>Contact</h4>
                    <p>Email: {companyInfo?.email || 'info@dgc.com'}</p>
                    <p>Phone: {companyInfo?.phone || '+1 234 567 890'}</p>
                    {companyInfo?.address && <p>Address: {companyInfo.address}</p>}
                </div>
            </div>
            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} {companyInfo?.name || 'Digital Global Compliance'}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
