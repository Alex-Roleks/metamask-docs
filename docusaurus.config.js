// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const codeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MetaMask Docs",
  // tagline: '',
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/metamask-fox.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          sidebarCollapsible: false,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').PluginOptions} */
      ({
        id: "snaps",
        path: "snaps",
        routeBasePath: "snaps",
        sidebarPath: require.resolve("./snaps-sidebars.js"),
        sidebarCollapsible: false,
        versions: {
          production: {
            label: "Current",
            badge: false,
          },
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "MetaMask Docs",
        logo: {
          alt: "My Site Logo",
          src: "img/metamask-fox.svg",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            label: "SDK & API",
          },
          {
            type: "doc",
            docId: "index",
            docsPluginId: "snaps",
            label: "Snaps",
          },
        ],
      },
      footer: {},
      prism: {
        theme: codeTheme,
      },
    }),
};

module.exports = config;
