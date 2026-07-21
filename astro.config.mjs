import tailwind from "@astrojs/tailwind";

export default {
  site: "https://whats-next.zenika.sg",
  output: "static",
  integrations: [tailwind()],
  trailingSlash: "never",
};
