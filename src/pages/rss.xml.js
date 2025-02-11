import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Nathan's Hobbies | Blog",
    description: "A blog from a dude bein",
    site: "https://nathanshobbies.com",
    items: import.meta.glob("./**/*.md"),
    customData: `<language>en-us</language>`,
  });
