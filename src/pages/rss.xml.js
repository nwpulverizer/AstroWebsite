import rss from '@astrojs/rss';

export const get = () => rss({
    title: "Nathan's Hobbies | Blog",
    description: 'My journey leasrning Astro',
    site: 'https://nathanshobbies.com',
    items: import.meta.glob('./**/*.md'),
    customData: `<language>en-us</language>`,
})
