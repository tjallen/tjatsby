import React from "react";
import styled from "@emotion/styled";

const StyledP = styled("p")`
  color: #242424;
  text-transform: uppercase;
  margin-bottom: 0;
  font-size: 12px;
  letter-spacing: 0.1rem;
  font-weight: bold;
  margin-top: 16px;
`;

const Subhead = ({ children }) => <StyledP>{children}</StyledP>;

export default Subhead;
