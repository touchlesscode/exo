require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const isProd = process.env.NODE_ENV === 'production';
const previewEnabled =
  (process.env.GATSBY_IS_PREVIEW || 'false').toLowerCase() === 'true';

module.exports = {
  siteMetadata: {
    title: 'gatsby-theme-exo'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-theme-ui',
    },
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
        src: "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.2/iframeResizer.contentWindow.min.js",
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-source-sanity-transform-images',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    'gatsby-plugin-zopfli',
  ]
};
