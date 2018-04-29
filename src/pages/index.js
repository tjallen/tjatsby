import React from 'react';
import Link from 'gatsby-link';
import Tags from '../components/tags';
import WorkImage from '../components/workImage';
import logo from '../../static/images/tja_logo.svg';
import styled from 'react-emotion';

const Wrapper = styled('div')`
  height: 100%;
  color: #fff;
  background: #303769;
  background: linear-gradient(290deg, rgb(110, 60, 232) 10%, rgba(165, 35, 35) 100%);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: bottom right, left, right;
  text-align: center;
`

const IndexPage = ({ data }) => (
  <Wrapper>
    <img src={logo} style={{ height: '100px' }}/>
    <h1>Thom Allen</h1>
    <h2>Front End Developer at Zzish</h2>
    <button>GitHub</button>
    <button>Linkedin</button>
  </Wrapper>
);

export const query = graphql`
  query IndexQuery {
  site {
    siteMetadata {
      title
      tagline
    }
  }
  allMarkdownRemark(limit: 8, sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          tags
          description
          thumb
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
