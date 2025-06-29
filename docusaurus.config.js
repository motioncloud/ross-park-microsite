// docusaurus.config.js
module.exports = {
  title: 'Ross Park Retrofit Initiative',
  tagline: 'Turn-key HVAC Controls & Compliance',
  url: 'https://your-domain.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'motion-cloud',
  projectName: 'ross-park-microsite',
  themeConfig: {
    navbar: {
      title: 'Ross Park Retrofit',
      logo: { src: 'img/logo.svg' },
      items: [
        { to: 'docs/1-executive-summary', label: 'Overview', position: 'left' },
        { to: 'docs/6-pricing-model',     label: 'Pricing',  position: 'left' },
        { to: 'docs/9-appendices',        label: 'Appendices', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Motion.cloud`,
    },
  },
  presets: [
    ['@docusaurus/preset-classic', {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
      },
      theme: {
        customCss: require.resolve('./src/css/tailwind.css'),
      },
    }],
  ],
};
