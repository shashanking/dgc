'use client';

import React, { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
    _id: string;
    question: string;
    answer: string;
}

interface FAQProps {
    faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setActiveIndex(activeIndex === id ? null : id);
    };

    if (!faqs || faqs.length === 0) {
        return null;
    }

    return (
        <section className="section container">
            <div className="text-center mb-lg">
                <h2>Frequently Asked Questions</h2>
                <p className="subtitle">Common questions about our services</p>
            </div>
            <div className={styles.accordion}>
                {faqs.map((faq) => (
                    <div key={faq._id} className={styles.item}>
                        <button
                            className={`${styles.question} ${activeIndex === faq._id ? styles.active : ''}`}
                            onClick={() => toggleAccordion(faq._id)}
                        >
                            {faq.question}
                            <span className={styles.icon}>{activeIndex === faq._id ? '-' : '+'}</span>
                        </button>
                        <div
                            className={styles.answerWrapper}
                            style={{ maxHeight: activeIndex === faq._id ? '500px' : '0' }}
                        >
                            <div className={styles.answer}>{faq.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
