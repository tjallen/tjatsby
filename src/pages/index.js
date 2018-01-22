import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>{data.site.siteMetadata.tagline}</p>
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
  }
`

export default IndexPage
