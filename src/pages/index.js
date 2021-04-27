import React from "react";
import { graphql } from "gatsby";
import Button from "../components/button";
import Subhead from "../components/subhead";
import logo from "../../static/images/tja_logo.svg";
import me from "../../static/images/tja.jpeg";
import zzishLogoPurp from "../../static/images/zzish_logo_purple.png";
import zzishInsights from "../../static/images/zzish_insights.png";
import styled from "@emotion/styled";
import Layout from "../components/layout";

const breakpoint = "1000px";

const Wrapper = styled.div`
  min-height: 100vh;
  color: #fff;
  background: #303769;
  background: linear-gradient(
    290deg,
    rgb(110, 60, 232) 10%,
    rgba(165, 35, 35) 100%
  );
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: bottom right, left, right;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Inner = styled.div`
  margin: 16px;
  background: #fff;
  color: #353535;
  flex: 0 1;
  width: 90%;
  max-width: 480px;
  padding: 25px 20px;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0px 4px 6px rgba(76, 76, 76, 0.55);
  @media (min-width: ${breakpoint}) {
    max-width: 960px;
  }
`;

const Header = styled.div`
  @media (min-width: ${breakpoint}) {
    margin: 0 16px;
  }
  h2 {
    margin: 0;
    padding: 16px 0;
    border-top: 3px solid rgb(165 35 35 / 44%);
    font-size: 1.8rem;
    line-height: 1.9rem;
    font-weight: bold;
  }
`;

const HeaderHero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 8px 20px 8px;
`;

const ColWrapper = styled.div`
  @media (min-width: ${breakpoint}) {
    display: flex;
  }
`;

const Col = styled.div`
  @media (min-width: ${breakpoint}) {
    flex: 1;
    margin: 0 16px;
  }
`;

const LogoBox = styled.div`
  text-align: center;
  flex: 0 1;
`;

const MeBox = styled.div`
  flex: 0 1;
  border-radius: 100%;
  img {
    max-height: 100px;
    max-width: 100px;
    border-radius: 100%;
  }
`;

const TechList = styled.span`
  text-transform: uppercase;
  font-size: 11px;
  color: #545454;
  font-weight: bold;
`;

const ImageBox = styled.div`
  margin: 16px 0;
  min-height: 120px;

  background: url(${zzishLogoPurp}) no-repeat 10%,
    url(${zzishInsights}) no-repeat 90%, #f3f3f3;
  background-size: contain;
  border-radius: 4px;
`;

const ButtonGroup = styled.div``;

const IndexPage = ({ data }) => (
  <Layout>
    <Wrapper>
      <Inner>
        <Header>
          <HeaderHero>
            <LogoBox>
              <img
                src={logo}
                alt="Thom Allen logo"
                style={{ height: "60px" }}
              />
              <h1>Thom&nbsp;Allen</h1>
            </LogoBox>
            <MeBox>
              <img src={me} alt="I'm the one with the glasses" />
            </MeBox>
          </HeaderHero>
          <h2>
            Hello! I'm an experienced front-end web developer passionate about
            building effective, user-friendly web experiences.
          </h2>
        </Header>
        <ColWrapper>
          <Col>
            <Subhead>Status</Subhead>
            <ImageBox />
            <p>
              I'm currently working as part of the tech team at{" "}
              <a href="http://www.zzish.com">Zzish</a>, an education technology
              startup who focus on improving the education experience for
              teachers and students, primarily via their award-winning teaching
              platform and assessment tool,{" "}
              <a href="http://www.quizalize.com">Quizalize</a>. There's more
              info about my work at Zzish on my{" "}
              <a href="/thom_allen_cv_2020.pdf">CV</a>.
            </p>
            <TechList>
              Tech: React, Relay / Apollo, GraphQL, JavaScript ES6 + TypeScript
              / Flow, Node + Express, MongoDB, Webpack, Python
            </TechList>
          </Col>

          <Col>
            <Subhead>About me</Subhead>
            <p>
              My body may be here, but my mind is in the Stone Sentinel Maze in
              Dynasty Warriors 3 for the PlayStation 2{" "}
              <span role="img" aria-label="pensive emoji">
                😔
              </span>
            </p>
            <p>
              I've spent the majority of recent years working on the front-end
              of web apps, typically using React, but also have some full stack
              experience. Click below for more about me and the projects I've
              worked on.
            </p>

            <ButtonGroup>
              <Button href="/thom_allen_cv_2020.pdf" title="My CV">
                CV
              </Button>
              <Button href="http://github.com/tjallen" title="My GitHub">
                GitHub
              </Button>
              <Button
                href="https://www.linkedin.com/in/thom-allen-797040155/"
                title="Enter the buzzword zone on LinkedIn. Kudos!"
              >
                LinkedIn
              </Button>
            </ButtonGroup>
            <Subhead>Get in touch</Subhead>
            <Button href="mailto:thomwork@gmail.com">Email me</Button>
          </Col>
        </ColWrapper>
      </Inner>
    </Wrapper>
  </Layout>
);

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        tagline
      }
    }
    allMarkdownRemark(
      limit: 8
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
`;

export default IndexPage;
