import { Metadata } from 'next';
import { client } from '@/lib/sanity';
import { companyInfoQuery } from '@/lib/queries';
import styles from './contact.module.css';

export const revalidate = 60;

export const metadata: Metadata = {
    title: 'Contact Us | Digital Global Compliance',
    description: 'Get in touch with us for your compliance needs.',
};

export default async function ContactPage() {
    const companyInfo = await client.fetch(companyInfoQuery);
    console.log('DEBUG: Company Info fetched:', companyInfo);

    return (
        <div className="container section">
            <div className="text-center mb-lg animate-fade-in">
                <h1>{companyInfo?.contactTitle || 'Contact Us'}</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--gray-500)', fontSize: '1.2rem' }}>
                    {companyInfo?.contactIntro || "Have questions? Need a quote? Reach out to us and we'll get back to you shortly."}
                </p>
            </div>

            <div className={styles.contactGrid}>
                <div className={`${styles.contactInfo} animate-fade-in delay-100`}>
                    <h2 className="mb-md">{companyInfo?.contactSubtitle || 'Get in Touch'}</h2>
                    <p className="mb-md" style={{ color: 'var(--gray-600)' }}>
                        Our team of experts is ready to assist you with all your compliance and testing needs.
                    </p>

                    <div className={styles.infoItem}>
                        <h3>Address</h3>
                        <p>{companyInfo?.address || '123 Compliance Way, Tech City, India'}</p>
                    </div>

                    <div className={styles.infoItem}>
                        <h3>Email</h3>
                        <p>{companyInfo?.email || 'info@dgc.com'}</p>
                    </div>

                    <div className={styles.infoItem}>
                        <h3>Phone</h3>
                        <p>{companyInfo?.phone || '+1 234 567 890'}</p>
                    </div>

                    {companyInfo?.socialLinks && companyInfo.socialLinks.length > 0 && (
                        <div className={styles.infoItem}>
                            <h3>Follow Us</h3>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                {companyInfo.socialLinks.map((link: any) => (
                                    <a key={link._key} href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
                                        {link.platform}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className={`${styles.contactForm} animate-fade-in delay-200`}>
                    <h2 className="mb-md">Send us a Message</h2>
                    <form>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required placeholder="Your Name" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required placeholder="your.email@example.com" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" required placeholder="How can we help?" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={5} required placeholder="Tell us more about your requirements..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
