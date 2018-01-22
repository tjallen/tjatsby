module.exports = {
  siteMetadata: {
    title: 'thomjamesallen.com',
    tagline: '~ ~ ~ what a developer ~ ~ ~'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark'
  ],
};
