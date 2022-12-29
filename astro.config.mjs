import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  markdown: {
    extendPlugins: 'astroDefaults',
    rehypePlugins: [
      'rehype-slug',
      ['rehype-toc', {
        headings: ['h2', 'h3'],
        cssClasses: {
          toc: 'course-toc'
        }
      }],
    ]
  }
})
