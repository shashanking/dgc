import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
        }),
        defineField({
            name: 'mission',
            title: 'Our Mission',
            type: 'text',
        }),
        defineField({
            name: 'vision',
            title: 'Our Vision',
            type: 'text',
        }),
        defineField({
            name: 'story',
            title: 'Our Story',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'stats',
            title: 'Statistics',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', type: 'string', title: 'Label' },
                        { name: 'value', type: 'string', title: 'Value' },
                    ],
                },
            ],
        }),
    ],
});
