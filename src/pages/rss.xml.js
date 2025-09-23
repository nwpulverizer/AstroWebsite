import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export const GET = async () =>
  rss({
    title: "Nathan's Hobbies | Blog",
    description: "A blog from a dude bein",
    site: "https://nathanshobbies.com",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
