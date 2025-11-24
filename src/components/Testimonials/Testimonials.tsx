import React from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';

interface Testimonial {
    _id: string;
    name: string;
    role: string;
    company: string;
    quote: string;
    image?: string;
}

interface TestimonialsProps {
    testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
    if (!testimonials || testimonials.length === 0) {
        return null;
    }

    return (
        <section className="section container">
            <div className="text-center mb-lg">
                <h2>What Our Clients Say</h2>
                <p className="subtitle">Trusted by businesses worldwide</p>
            </div>
            <div className={styles.grid}>
                {testimonials.map((testimonial) => (
                    <div key={testimonial._id} className={styles.card}>
                        <div className={styles.quote}>"{testimonial.quote}"</div>
                        <div className={styles.author}>
                            {testimonial.image && (
                                <div className={styles.avatar}>
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            )}
                            <div>
                                <div className={styles.name}>{testimonial.name}</div>
                                <div className={styles.role}>
                                    {testimonial.role}, {testimonial.company}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
