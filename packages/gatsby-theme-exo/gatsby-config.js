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
        src: "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.6.0/iframeResizer.contentWindow.min.js",
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: !isProd, // watchMode only in dev mode
        overlayDrafts: !isProd || previewEnabled // drafts in dev & Gatsby Cloud Preview
      }
    },
    'gatsby-source-sanity-transform-images',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icons/icon.png'
      }
    },
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
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        interval: 400,
        custom: [
          {
            name: ['Poppins'],
            file: '/fonts/fonts.min.css'
          }
        ]
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
    'gatsby-plugin-perf-budgets',
    'gatsby-plugin-webpack-bundle-analyser-v2',
    'gatsby-plugin-zopfli',
    'gatsby-plugin-offline'
  ]
};
