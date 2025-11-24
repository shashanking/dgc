import { Metadata } from 'next';
import { client } from '@/lib/sanity';
import { groq } from 'next-sanity';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Blog | Digital Global Compliance',
    description: 'Latest news and updates from the world of compliance.',
};

export const revalidate = 60;

const blogQuery = groq`*[_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  "mainImage": mainImage.asset->url
}`;

export default async function BlogPage() {
    const posts = await client.fetch(blogQuery);

    return (
        <div className="container section">
            <div className="text-center mb-lg">
                <h1>Latest News</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--gray-500)' }}>
                    Stay updated with the latest regulations, standards, and industry trends.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {posts.length > 0 ? (
                    posts.map((post: any) => (
                        <div key={post._id} style={{
                            border: '1px solid var(--gray-200)',
                            borderRadius: 'var(--border-radius)',
                            overflow: 'hidden'
                        }}>
                            <div style={{ height: '200px', background: 'var(--gray-200)', overflow: 'hidden' }}>
                                {post.mainImage && <img src={post.mainImage} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <span style={{ fontSize: '0.8rem', color: 'var(--primary-color)', fontWeight: 600 }}>
                                    {new Date(post.publishedAt).toLocaleDateString()}
                                </span>
                                <h2 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>{post.title}</h2>
                                <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                    {post.excerpt}
                                </p>
                                {/* Link to single post could be added here if we create a single post page */}
                                <span style={{ color: 'var(--primary-color)', fontWeight: 500, cursor: 'pointer' }}>Read More &rarr;</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No blog posts found.</p>
                )}
            </div>
        </div>
    );
}
