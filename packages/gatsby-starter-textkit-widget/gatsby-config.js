require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, GATSBY_HASURA_SECRET } = process.env


module.exports = {
  siteMetadata: {
    locale: "en",
    title: `Widget`,
    description: `Widget`,
    author: `Touchless`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "https://cdn.statflo.com/scripts/iframeResizer.contentWindow.min.js",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Widget`,
        short_name: `widget`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3182ce`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
