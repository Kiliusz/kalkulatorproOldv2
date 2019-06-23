module.exports = {
  siteMetadata: {
    title: `KalkulatorPro`,
    description: `Calculate pressure and diameter`,
    author: `KBM Projekt`,
  },
  pathPrefix: "/kalkulatorpro",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
  ],
};
