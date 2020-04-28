import React from "react";
import styled from "@emotion/styled";

const StyledP = styled("p")`
  color: #989898;
  text-transform: uppercase;
  margin-bottom: 0;
  font-size: 11px;
  letter-spacing: 0.1rem;
`;

const Subhead = ({ children }) => <StyledP>{children}</StyledP>;

export default Subhead;
