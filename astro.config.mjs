// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Na GitHubu (GitHub Actions) se uporabniško ime in ime repozitorija preberejo samodejno,
// zato jih ni treba vpisovati ročno. Lokalno stran teče na http://localhost:4321/.
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const onGitHub = Boolean(owner && repo);
const isUserSite = onGitHub && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

export default defineConfig({
  site: onGitHub ? `https://${owner.toLowerCase()}.github.io` : 'http://localhost:4321',
  base: onGitHub && !isUserSite ? `/${repo}` : '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
