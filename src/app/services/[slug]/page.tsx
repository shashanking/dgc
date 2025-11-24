import ProductTable from '@/components/ProductTable/ProductTable';
import Image from 'next/image';
import { client } from '@/lib/sanity';
import { serviceBySlugQuery } from '@/lib/queries';
import { notFound } from 'next/navigation';
import { PortableText } from 'next-sanity';
import styles from './page.module.css';

export const revalidate = 60;

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = await client.fetch(serviceBySlugQuery, { slug });

    if (!service) {
        return (
            <div className={`container ${styles.container}`}>
                <h1>Service Not Found</h1>
                <p>The requested service could not be found.</p>
            </div>
        );
    }

    return (
        <div className={`container ${styles.container}`}>
            <div className="mb-lg animate-fade-in">
                {service.mainImage && (
                    <div className={styles.heroImageWrapper}>
                        <Image
                            src={service.mainImage}
                            alt={service.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                )}
                <h1 className={styles.title}>{service.title}</h1>
                <p className={styles.description}>
                    {service.description}
                </p>
                {service.body && (
                    <div className={styles.prose}>
                        <PortableText value={service.body} />
                    </div>
                )}
            </div>

            <div className="mb-lg animate-fade-in delay-100">
                <h2 className={styles.sectionTitle}>Products Covered</h2>
                <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
                    <ProductTable products={service.products} />
                </div>
            </div>

            <div className={`${styles.ctaSection} animate-fade-in delay-200`}>
                <h3 className={styles.ctaTitle}>Need help with {service.title}?</h3>
                <p className={styles.ctaText}>
                    Our experts are ready to assist you with the certification process. Get a quote today.
                </p>
                <a href="/contact" className={`btn ${styles.ctaButton}`}>
                    Contact Us Now
                </a>
            </div>
        </div>
    );
}
