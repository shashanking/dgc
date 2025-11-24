import Hero from '@/components/Hero/Hero';
import { client } from '@/lib/sanity';
import { servicesQuery, clientsQuery, homePageQuery, testimonialsQuery } from '@/lib/queries';
import Link from 'next/link';
import Image from 'next/image';
import Testimonials from '@/components/Testimonials/Testimonials';
import Stats from '@/components/Stats/Stats';

export const revalidate = 60;

export default async function Home() {
  const services = await client.fetch(servicesQuery);
  const clients = await client.fetch(clientsQuery);
  const homePageData = await client.fetch(homePageQuery);
  const testimonials = await client.fetch(testimonialsQuery);

  return (
    <main>
      <Hero
        title={homePageData?.heroTitle || "Global Compliance Simplified."}
        subtitle={homePageData?.heroSubtitle || "We help businesses navigate the complex world of regulatory compliance and testing."}
      />

      {homePageData?.stats && <Stats stats={homePageData.stats} />}

      <section className="section container">
        <div className="text-center mb-lg">
          <h2>Our Services</h2>
          <p className="subtitle">Comprehensive compliance solutions for your business</p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {services.slice(0, 6).map((service: any) => (
            <Link href={`/services/${service.slug.current}`} key={service._id} style={{ display: 'block' }}>
              <div style={{
                padding: '2rem',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--border-radius)',
                transition: 'transform 0.2s',
                cursor: 'pointer',
                height: '100%'
              }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem' }}>
                  {service.description ? service.description.substring(0, 100) + '...' : 'Click to learn more'}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-lg">
          <Link href="/services" className="btn btn-primary">View All Services</Link>
        </div>
      </section>

      <section className="section container">
        <div className="text-center mb-lg animate-fade-in">
          <h2>Trusted By</h2>
          <p className="subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>Partnering with industry leaders globally to ensure compliance and safety.</p>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '4rem',
          flexWrap: 'wrap',
          alignItems: 'center',
          opacity: 0.8
        }} className="animate-fade-in delay-100">
          {clients.map((client: any) => (
            <div key={client._id} style={{ width: '160px', height: '90px', position: 'relative', filter: 'grayscale(100%)', transition: 'all 0.3s ease' }} className="client-logo">
              {client.logo && (
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {testimonials && <Testimonials testimonials={testimonials} />}
    </main>
  );
}
