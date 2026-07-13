import tailwind from "@astrojs/tailwind";

export default {
  site: "https://whatsnext.zenika.sg",
  output: "static",
  integrations: [tailwind()],
  trailingSlash: "never",
};
