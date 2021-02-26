require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
}),
  (module.exports = {
    siteMetadata: {
      title: "AudioC0RE",
      siteUrl: "https://github.com/spaceinvadev.io/AudioC0RE",
    },
    plugins: [
      {
        resolve: "gatsby-source-contentful",
        options: {
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          spaceId: process.env.CONTENTFUL_SPACE_ID,
        },
      },
      "gatsby-plugin-sass",
      "gatsby-plugin-sharp",
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-sitemap",
      "gatsby-transformer-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "images",
          path: "./src/images/",
        },
        __key: "images",
      },
    ],
  });
