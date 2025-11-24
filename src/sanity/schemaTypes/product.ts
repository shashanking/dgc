import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'product',
    title: 'Product',
    type: 'object',
    fields: [
        defineField({
            name: 'productName',
            title: 'Product Name',
            type: 'string',
        }),
        defineField({
            name: 'standard',
            title: 'Standard',
            type: 'string',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
            description: 'Link to official listing or more info',
        }),
    ],
});
