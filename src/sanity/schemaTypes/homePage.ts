import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        defineField({
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
        }),
        defineField({
            name: 'heroSubtitle',
            title: 'Hero Subtitle',
            type: 'text',
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
        defineField({
            name: 'worldMapData',
            title: 'World Map Countries',
            description: 'List of country codes (ISO 3166-1 alpha-2) to highlight on the map.',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],
});
