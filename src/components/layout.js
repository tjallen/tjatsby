import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import "./layout.css";

const layout = ({ children }) => (
  <Fragment>
    <Helmet
      title="Thom Allen, front-end developer"
      meta={[
        {
          name: "description",
          content: "Front-end developer based in London",
        },
        {
          name: "keywords",
          content:
            "thom allen, front-end, developer, london, front end, zzish, javascript, react, graphql, node, web apps",
        },
      ]}
    />
    {children}
  </Fragment>
);
export default layout;
