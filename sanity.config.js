import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ywwwq6js';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
    basePath: '/studio',
    name: 'agency_blog_studio',
    title: 'Blog Content Manager',
    projectId,
    dataset,
    plugins: [structureTool()],
    schema: {
        types: schemaTypes,
    },
});
