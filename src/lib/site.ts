// Astro's `base` config option (astro.config.mjs) isn't applied to plain
// string paths like src="/assets/foo.png" — only to references Astro itself
// processes. Since this site is deployed under a GitHub Pages project
// subpath (/whats-next-conference), every hardcoded absolute path needs this
// prefix or it will 404 in production while working fine in local dev.
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function withBase(path: string): string {
  return `${BASE}/${path.replace(/^\//, "")}`;
}
