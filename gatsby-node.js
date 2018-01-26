const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const slugValue = createFilePath({ node, getNode, basePath: 'pages'});
    createNodeField({
      node,
      name: 'slug',
      value: slugValue,
    });
  };
};