import { defineConfig } from 'vitepress';

const base = process.env.VITEPRESS_BASE || '/';
const withBase = (path: string) => `${base.replace(/\/$/, '')}${path}`;
const repository = 'https://github.com/napcore-tools/uvarbox-web';

export default defineConfig({
  title: 'UVAR Box',
  titleTemplate: ':title | UVAR Box',
  description: 'UVAR Box connects local vehicle access rules with machine-readable data. Explore the 2022 pilot, original tool workflow, published evidence and next-step proposals.',
  lang: 'en-GB',
  base,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: withBase('/brand/favicon.svg') }],
    ['meta', { name: 'theme-color', content: '#ffcb01' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'UVAR Box | Making city access rules usable by digital services' }],
    ['meta', { property: 'og:description', content: 'The original 2022 UVAR Box pilot, DATEX II workflow and source-backed information on proposed next steps.' }],
    ['meta', { property: 'og:url', content: 'https://napcore-tools.github.io/uvarbox-web/' }],
  ],
  themeConfig: {
    siteTitle: 'UVAR Box',
    logo: '/brand/favicon.svg',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Explore',
        items: [
          { text: 'The project', link: '/project' },
          { text: 'How the tool worked', link: '/tool' },
          { text: '2022 pilot results', link: '/results' },
        ],
      },
      { text: 'Publications', link: '/publications' },
      { text: 'Status & next steps', link: '/status' },
      { text: 'Get involved', link: '/contribute' },
    ],
    search: { provider: 'local', options: { detailedView: true } },
    socialLinks: [{ icon: 'github', link: repository }],
    editLink: {
      pattern: `${repository}/edit/main/docs/:path`,
      text: 'Suggest an edit to this page',
    },
    lastUpdated: { text: 'Page last updated' },
    outline: { level: [2, 3], label: 'On this page' },
    footer: {
      message: 'UVAR Box was developed under an EU-funded Preparatory Action (2020–2022), contract MOVE/B4/SER/2019-498/SI2.832125. Provisional information website.',
      copyright: 'The information on this website does not necessarily reflect the views of the European Commission.',
    },
    externalLinkIcon: true,
  },
});
