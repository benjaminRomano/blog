// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;
const fs = require("fs");

let apiKey = "AIzaSyDyjzvENCXnzolUK48OsmQVNvpLB-CSTNQ";
if (process.env.GIT_USER == null) {
  apiKey = require("./keys.json")["internal_ip_api_key"];
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bromano",
  tagline: "Bromano's Home Page",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: "https://benromano.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  staticDirectories: ["public", "static"],
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "benjaminromano", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  customFields: {
    GOOGLE_MAPS_API_KEY: apiKey,
  },
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "presentations",
        routeBasePath: "presentations",
        path: "./presentations",
      },
    ],
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Benjamin Romano",
        logo: {
          alt: "Logo",
          src: "img/favicon.svg",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/presentations", label: "Presentations", position: "left" },
          { to: "/places-in-la", label: "Places In LA", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Presentations",
                to: "/presentations",
              },
              {
                label: "GitHub",
                href: "https://github.com/benjaminRomano",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Benjamin Romano. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ["bash"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
