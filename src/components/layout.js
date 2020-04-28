import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
// import Header from "../components/Header";

import "./layout.css";

export default ({ children }) => (
  <Fragment>
    <Helmet
      title="Thom Allen, front-end developer"
      meta={[
        {
          name: "description",
          content:
            "Front-end developer, currently building React web apps at Zzish",
        },
        {
          name: "keywords",
          content:
            "thom allen, front-end, developer, london, front end, zzish, javascript, react, web apps",
        },
      ]}
    />
    {children}
  </Fragment>
);
