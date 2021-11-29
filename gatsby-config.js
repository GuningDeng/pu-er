module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Pu Erh*",
    description: "Pu Erh was founded in 2021 by founder, Guning Deng.",
    author: "Guning Deng"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://puerh.local/graphql",
        schema: {
          // !!!
          timeout: 300000,
        },
      },
    },
  ],
};
