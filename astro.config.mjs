import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserPage = repository.endsWith('.github.io');

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://guilhermefelex.github.io',
  base: repository && !isUserPage ? `/${repository}` : '/',
  output: 'static',
  build: {
    assets: '_assets'
  }
});
