import React from "react";
import styled from "@emotion/styled";

const Btn = styled.button`
  color: white;
  background-color: #2096f3;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 0px 4px 6px rgba(76, 76, 76, 0.55);
  width: 100%;
  margin: 5px 0;
  transition: transform 0.3s ease-in;
  -webkit-font-smoothing: subpixel-antialiased;
  backface-visibility: hidden;
  @media (min-width: 420px) {
    margin: 5px;
    width: auto;
  }
  &:first-of-type {
    margin-left: 0;
  }
  &:hover {
    transform: translateY(-2px);
  }
`;

const Button = ({ href, children, onButtonClick }) => (
  <a href={href}>
    <Btn onClick={onButtonClick}>{children}</Btn>
  </a>
);

export default Button;
