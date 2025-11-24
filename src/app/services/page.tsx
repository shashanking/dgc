import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { client } from '@/lib/sanity';
import { servicesQuery, faqsQuery } from '@/lib/queries';

import FAQ from '@/components/FAQ/FAQ';

export const metadata: Metadata = {
    title: 'Services | Digital Global Compliance',
    description: 'Explore our comprehensive compliance and testing services.',
};

export const revalidate = 60;

export default async function ServicesPage() {
    const services = await client.fetch(servicesQuery);
    const faqs = await client.fetch(faqsQuery);

    return (
        <div className="container section">
            <div className="text-center mb-lg animate-fade-in">
                <h1>Our Services</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--gray-500)', fontSize: '1.2rem' }}>
                    Comprehensive compliance and testing solutions tailored to your needs.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2.5rem',
                marginBottom: '6rem'
            }} className="animate-fade-in delay-100">
                {services.length > 0 ? (
                    services.map((service: any) => (
                        <Link href={`/services/${service.slug.current}`} key={service._id} style={{ display: 'block' }}>
                            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                {service.mainImage && (
                                    <div style={{ position: 'relative', height: '240px', marginBottom: '1.5rem', borderRadius: 'var(--border-radius)', overflow: 'hidden' }}>
                                        <Image
                                            src={service.mainImage}
                                            alt={service.title}
                                            fill
                                            style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                            className="hover-zoom"
                                        />
                                    </div>
                                )}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    {service.icon && (
                                        <div style={{ width: '40px', height: '40px', position: 'relative' }}>
                                            <Image src={service.icon} alt="" fill style={{ objectFit: 'contain' }} />
                                        </div>
                                    )}
                                    <h2 style={{ fontSize: '1.75rem', marginBottom: 0 }}>{service.title}</h2>
                                </div>
                                <p style={{ color: 'var(--gray-600)', flexGrow: 1, fontSize: '1.1rem', lineHeight: '1.6' }}>
                                    {service.description}
                                </p>
                                <div style={{ marginTop: '1.5rem', color: 'var(--primary-color)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    Learn More <span>→</span>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>No services found.</p>
                )}
            </div>

            <div className="animate-fade-in delay-200">
                {faqs && <FAQ faqs={faqs} />}
            </div>
        </div>
    );
}
