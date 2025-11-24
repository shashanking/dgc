import { Metadata } from 'next';
import { client } from '@/lib/sanity';
import { teamQuery, aboutPageQuery } from '@/lib/queries';
import Stats from '@/components/Stats/Stats';
import { PortableText } from 'next-sanity';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'About Us | Digital Global Compliance',
    description: 'Learn more about our team and mission.',
};

export const revalidate = 60;

export default async function AboutPage() {
    const team = await client.fetch(teamQuery);
    const aboutPageData = await client.fetch(aboutPageQuery);

    return (
        <div className="container section">
            <div className="mb-lg text-center">
                <h1>{aboutPageData?.title || 'About Us'}</h1>
                <div style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--gray-500)' }}>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--gray-600)' }}>
                        Leading the way in global compliance and testing services.
                    </p>
                </div>

                <div className="mb-lg animate-fade-in delay-100">
                    <div className="card" style={{ padding: '4rem', background: 'linear-gradient(to right bottom, var(--white), var(--gray-50))' }}>
                        <h2 className="mb-md">Our Mission</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--gray-700)' }}>
                            {aboutPageData?.mission || 'To provide world-class compliance solutions that enable businesses to thrive in global markets.'}
                        </p>
                    </div>
                </div>

                <div className="mb-lg animate-fade-in delay-200">
                    <div className="card" style={{ padding: '4rem', background: 'linear-gradient(to right bottom, var(--white), var(--gray-50))' }}>
                        <h2 className="mb-md">Our Vision</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--gray-700)' }}>
                            {aboutPageData?.vision || 'To be the most trusted partner for regulatory compliance and certification worldwide.'}
                        </p>
                    </div>
                </div>

                {aboutPageData?.stats && <Stats stats={aboutPageData.stats} />}

                <div className="mb-lg animate-fade-in delay-300" style={{ marginTop: '4rem' }}>
                    <h2 className="text-center mb-md">Our Story</h2>
                    <div className="card" style={{ padding: '3rem' }}>
                        <div className="prose" style={{ maxWidth: '100%', fontSize: '1.1rem', color: 'var(--gray-700)' }}>
                            {aboutPageData?.story ? (
                                <PortableText value={aboutPageData.story} /> // Changed to PortableText
                            ) : (
                                <p>Founded with a vision to simplify compliance...</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="animate-fade-in delay-300">
                    <h2 className="text-center mb-lg">Meet Our Team</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '3rem'
                    }}>
                        {team.length > 0 ? ( // Added conditional rendering for team
                            team.map((member: any) => (
                                <div key={member._id} className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                                    {member.image && (
                                        <div style={{
                                            width: '180px',
                                            height: '180px',
                                            borderRadius: '50%',
                                            overflow: 'hidden',
                                            margin: '0 auto 1.5rem',
                                            position: 'relative',
                                            boxShadow: 'var(--shadow-md)',
                                            border: '4px solid var(--white)'
                                        }}>
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    )}
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{member.name}</h3>
                                    <p style={{ color: 'var(--accent-color)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>{member.role}</p>
                                </div>
                            ))
                        ) : (
                            <p>No team members found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
