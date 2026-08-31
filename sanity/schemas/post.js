import { defineType, defineField } from 'sanity';

export const postSchema = defineType({
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    groups: [
        { name: 'content', title: 'Content', default: true },
        { name: 'seo', title: 'SEO & Metadata' },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Post Title',
            type: 'string',
            group: 'content',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'content',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            group: 'content',
            rows: 3,
            description: 'Short summary of the blog post shown in listing cards and as default meta description.',
        }),
        defineField({
            name: 'mainImage',
            title: 'Featured Image',
            type: 'image',
            group: 'content',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                },
            ],
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }],
            group: 'content',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
            group: 'content',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published Date',
            type: 'datetime',
            group: 'content',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'body',
            title: 'Body (Rich Text)',
            type: 'array',
            group: 'content',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' },
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Numbered', value: 'number' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' },
                            { title: 'Underline', value: 'underline' },
                            { title: 'Strike', value: 'strike-through' },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'URL',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'URL',
                                        validation: (Rule) =>
                                            Rule.uri({
                                                scheme: ['http', 'https', 'mailto', 'tel'],
                                                allowRelative: true,
                                            }),
                                    },
                                    {
                                        title: 'Open in new tab',
                                        name: 'blank',
                                        type: 'boolean',
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text',
                        },
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        },
                    ],
                },
            ],
        }),

        // DEDICATED SEO SECTION
        defineField({
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            group: 'seo',
            description: 'Search engine meta title. If empty, falls back to Post Title.',
        }),
        defineField({
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            group: 'seo',
            rows: 3,
            description: 'Search engine meta description. If empty, falls back to Excerpt.',
        }),
        defineField({
            name: 'focusKeyword',
            title: 'Focus Keyword',
            type: 'string',
            group: 'seo',
            description: 'Target focus keyword for this blog post used in SEO schema metadata.',
        }),
        defineField({
            name: 'canonicalUrl',
            title: 'Canonical URL',
            type: 'url',
            group: 'seo',
            description: 'Custom canonical URL. If empty, defaults to https://www.nabeelscale.com/blog/[slug].',
        }),
        defineField({
            name: 'ogTitle',
            title: 'OG Title',
            type: 'string',
            group: 'seo',
            description: 'Open Graph title for social sharing. If empty, falls back to SEO Title or Post Title.',
        }),
        defineField({
            name: 'ogDescription',
            title: 'OG Description',
            type: 'text',
            group: 'seo',
            rows: 3,
            description: 'Open Graph description for social sharing. If empty, falls back to Meta Description or Excerpt.',
        }),
        defineField({
            name: 'ogImage',
            title: 'OG Image',
            type: 'image',
            group: 'seo',
            description: 'Custom social preview image. If empty, falls back to Featured Image.',
            options: { hotspot: true },
        }),
        defineField({
            name: 'noindex',
            title: 'Noindex (Hide from search engines)',
            type: 'boolean',
            group: 'seo',
            initialValue: false,
            description: 'When enabled, search engines will be instructed NOT to index this page.',
        }),
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection;
            return {
                ...selection,
                subtitle: author ? `by ${author}` : '',
            };
        },
    },
});
