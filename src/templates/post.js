import React from "react";
import { graphql } from "gatsby";
import Link from "gatsby-link";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h2>{post.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/">Back to index</Link>
    </div>
  );
};

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
