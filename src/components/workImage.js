import React from 'react';
import { withPrefix } from 'gatsby-link';
import styled from 'react-emotion';

const StyledImage = styled('img')`
  max-height: 100px;
  width: auto;
  float: left;
  margin-right: 10px;
  display: inline-block;
  height: 100%;
`;

const workImage = ({ url }) => (
  <StyledImage className="work-image" src={withPrefix(`/images/${url}`)} />
);

export default workImage;