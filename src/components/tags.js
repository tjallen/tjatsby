import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

const StyledList = styled('ul')`
  margin: 0;
  padding: 0;
  > li {
    display: inline;
    margin-right: 5px;
    background: rebeccapurple;
    padding: 3px 4px;
    > a {
      color: #fff;
      text-decoration: none;
    }
    >
  }
`;
export default function Tags({ list = [] }) {
  return (
    <StyledList className='tags'>
      {list.map(tag => (
        <li key={tag}>
          <Link to={`/tags/${tag}`}>{tag}</Link>
        </li>
      ))}
    </StyledList>
  );
;}