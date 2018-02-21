import React from 'react';
import Link from 'gatsby-link';
import Tags from '../components/tags';


const IndexPage = ({ data }) => (
  <div>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>{data.site.siteMetadata.tagline}</p>
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
          >
            <h3>
              {node.frontmatter.title}{" "}
            </h3>
          </Link>
          <p>{node.frontmatter.description}</p>
          <Tags list={node.frontmatter.tags || []}/>
        </div>
      ))}
    </div>
  </div>
);

export const query = graphql`
  query IndexQuery {
  site {
    siteMetadata {
      title
      tagline
    }
  }
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          tags
          description
        }
        fields {
          slug
        }
      }
    }
  }
  }
`

export default IndexPage
