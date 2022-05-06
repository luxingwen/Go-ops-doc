import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Go-OPS',
  favicon:
    '/logo_github_icon_143196.png',
  logo: '/logo_github_icon_143196.png',
  outputPath: 'docs-dist',
  mode: 'site',
  sitemap: {
    hostname: "https://luxingwen.github.io/Go-ops-doc/"
  }
  // more config: https://d.umijs.org/config
});
