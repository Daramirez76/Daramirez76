// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBase = "/Daramirez76/";

export default defineConfig({
  ...(isGitHubPages ? { cloudflare: false } : {}),
  vite: {
    base: isGitHubPages ? githubPagesBase : "/",
  },
  ...(isGitHubPages
    ? {
        tanstackStart: {
          prerender: {
            enabled: true,
            crawlLinks: false,
          },
          pages: [
            { path: "/" },
            { path: "/proyectos" },
            { path: "/sobre-mi" },
            { path: "/contacto" },
          ],
        },
      }
    : {}),
});
