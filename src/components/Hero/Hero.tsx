import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

interface HeroProps {
    title?: string;
    subtitle?: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.heroContent}>
                    <h1 className={`${styles.title} animate-fade-in`}>
                        {title || "Global Compliance Simplified."}
                    </h1>
                    <p className={`${styles.subtitle} animate-fade-in delay-100`}>
                        {subtitle || "We help businesses navigate the complex world of regulatory compliance and testing. Ensure your products meet global standards with DGC."}
                    </p>
                    <div className={`${styles.ctaGroup} animate-fade-in delay-200`}>
                        <Link href="/contact" className="btn btn-primary">Get Started</Link>
                        <Link href="/services" className="btn btn-outline">Our Services</Link>
                    </div>
                </div>
                <div className={`${styles.imageWrapper} animate-fade-in delay-300`}>
                    <div className={styles.imagePlaceholder}>
                        <Image
                            src="/dgc-icon.svg"
                            alt="DGC Icon"
                            width={200}
                            height={200}
                            style={{ opacity: 0.8 }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
