import React from 'react';
import Link from 'gatsby-link';
import Tags from '../components/tags';
import WorkImage from '../components/workImage';
import Button from '../components/button';
import Subhead from '../components/subhead';
import logo from '../../static/images/tja_logo.svg';
import styled from 'react-emotion';

const Wrapper = styled('div')`
  height: 100%;
  color: #fff;
  background: #303769;
  background: linear-gradient(290deg, rgb(110, 60, 232) 10%, rgba(165, 35, 35) 100%);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: bottom right, left, right;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Inner = styled('div')`
  background: #fff;
  color: #353535;
  flex: 0 1;
  width: 90%;
  max-width: 480px;
  padding: 25px 20px;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0px 4px 6px rgba(76, 76, 76, 0.55);
`;

const LogoBox = styled('div')`
  margin: 10px 0 25px;
  text-align: center;
`;

const ButtonGroup = styled('div')`
`;



const IndexPage = ({ data }) => (
  <Wrapper>
    <Inner>
      <LogoBox>
        <img src={logo} style={{ height: '60px' }} />
        <h1>Thom Allen</h1>
      </LogoBox>
      <Subhead>Currently</Subhead>
      <h2>Front-end developer at <a href="http://www.zzish.com">Zzish</a></h2>
      <Subhead>Previously</Subhead>
      <h2>Freelance &amp; open-source developer</h2>
      <Subhead>Links and shit</Subhead>
      <ButtonGroup>
        <Button href="http://github.com/tjallen">GitHub</Button>
        <Button href="https://www.linkedin.com/in/thom-allen-797040155/">Linkedin</Button>
        <Button href="mailto:thomwork@gmail.com">Email</Button>
      </ButtonGroup>
    </Inner>
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
