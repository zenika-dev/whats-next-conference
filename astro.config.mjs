import tailwind from "@astrojs/tailwind";

export default {
  site: "https://zenika-dev.github.io",
  base: "/whats-next-conference",
  output: "static",
  integrations: [tailwind()],
  trailingSlash: "never",
};
