import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'companyInfo',
    title: 'Company Information',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Company Name',
            type: 'string',
        }),
        defineField({
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'text',
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'platform', type: 'string', title: 'Platform' },
                        { name: 'url', type: 'url', title: 'URL' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'contactTitle',
            title: 'Contact Page Title',
            type: 'string',
            initialValue: 'Contact Us',
        }),
        defineField({
            name: 'contactSubtitle',
            title: 'Contact Page Subtitle',
            type: 'string',
            initialValue: 'Get in Touch',
        }),
        defineField({
            name: 'contactIntro',
            title: 'Contact Page Intro',
            type: 'text',
            initialValue: "Have questions? Need a quote? Reach out to us and we'll get back to you shortly.",
        }),
    ],
});
