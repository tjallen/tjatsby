module.exports = {
  siteMetadata: {
    title: "Thom Allen",
    tagline: "Front-end Developer based in London",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-emotion",
  ],
};
