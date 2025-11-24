import ProductTable from '@/components/ProductTable/ProductTable';
import Image from 'next/image';
import { client } from '@/lib/sanity';
import { serviceBySlugQuery } from '@/lib/queries';
import { notFound } from 'next/navigation';
import { PortableText } from 'next-sanity';

export const revalidate = 60;

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = await client.fetch(serviceBySlugQuery, { slug });

    if (!service) {
        return (
            <div className="container section">
                <h1>Service Not Found</h1>
                <p>The requested service could not be found.</p>
            </div>
        );
    }

    return (
        <div className="container section">
            <div className="mb-lg animate-fade-in">
                {service.mainImage && (
                    <div style={{ position: 'relative', height: '500px', marginBottom: '3rem', width: '100%', borderRadius: 'var(--border-radius)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
                        <Image
                            src={service.mainImage}
                            alt={service.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                )}
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>{service.title}</h1>
                <p style={{ fontSize: '1.5rem', color: 'var(--gray-600)', maxWidth: '900px', marginBottom: '3rem', lineHeight: '1.6' }}>
                    {service.description}
                </p>
                {service.body && (
                    <div className="prose" style={{ maxWidth: '900px', fontSize: '1.15rem', color: 'var(--gray-700)', lineHeight: '1.8' }}>
                        <PortableText value={service.body} />
                    </div>
                )}
            </div>

            <div className="mb-lg animate-fade-in delay-100">
                <h2 className="mb-md" style={{ fontSize: '2.5rem' }}>Products Covered</h2>
                <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
                    <ProductTable products={service.products} />
                </div>
            </div>

            <div style={{
                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                padding: '4rem',
                borderRadius: 'var(--border-radius)',
                textAlign: 'center',
                color: 'var(--white)',
                boxShadow: 'var(--shadow-xl)'
            }} className="animate-fade-in delay-200">
                <h3 className="mb-sm" style={{ color: 'var(--white)', fontSize: '2rem' }}>Need help with {service.title}?</h3>
                <p className="mb-md" style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem' }}>
                    Our experts are ready to assist you with the certification process. Get a quote today.
                </p>
                <a href="/contact" className="btn" style={{ background: 'var(--white)', color: 'var(--primary-color)', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                    Contact Us Now
                </a>
            </div>
        </div>
    );
}
