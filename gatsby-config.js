require("dotenv").config();
module.exports = {
  siteMetadata: {
    title: `Dziedzic-about-me`,
    description: `This is the personal page of Krzysztof Dziedzic.`,
    author: `Krzysztof Dziedzic`,
    image: "/Person.svg",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-155052927-4",
          cookieName: "gatsby-gdpr-google-analytics",
          anonymize: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /animations/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/src/assets/image`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `animations`,
        path: `${__dirname}/src/assets/animations`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Roboto",
            weights: ["400", "700"],
          },
          {
            family: "Montserrat",
            weights: ["400", "700"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyBERgoiVqzV9C_HLk9jHINEEf685KMbzoY",
          authDomain: "dziedzic-about-me.firebaseapp.com",
          databaseURL: "https://dziedzic-about-me.firebaseio.com",
          projectId: "dziedzic-about-me",
          storageBucket: "dziedzic-about-me.appspot.com",
          messagingSenderId: "148555362418",
          appId: "1:148555362418:web:4dfa9a5112a41cc4e112eb",
          measurementId: "G-7NR2QMLHJ0",
        },
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dziedzic-about-me`,
        short_name: `about-me`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/favico/Logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    /*  {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
          {
            family: `Montserrat`,
            variants: [`400`, `700`],
          },
        ],
      },
    }, */
  ],
};
