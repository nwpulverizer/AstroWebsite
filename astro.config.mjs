import { defineConfig } from "astro/config";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  markdown: {
    remarkPlugins: ["remark-math"],
    rehypePlugins: [
      [
        "rehype-katex",
        {
          // Katex plugin options
        },
      ],
    ],
  },
});
