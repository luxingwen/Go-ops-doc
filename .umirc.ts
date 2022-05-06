import { defineConfig } from 'dumi';

const repo = 'Go-ops-doc';
export default defineConfig({
  
  title: 'Go-OPS',
  favicon:
    `/${repo}/logo_github_icon_143196.png`,
  logo: `/${repo}/logo_github_icon_143196.png`,
  outputPath: 'docs-dist',
  mode: 'site',
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  // more config: https://d.umijs.org/config
});
