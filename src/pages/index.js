import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>{data.site.siteMetadata.tagline}</p>
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title}{" "}
            <span>— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
    <Link to="/page-2/">Go to page 2</Link>
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
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        excerpt
      }
    }
  }
  }
`

export default IndexPage
