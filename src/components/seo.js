import React from "react";
import { Helmet } from "react-helmet";
import fav from "../assets/favicon.png";

const SEO = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>KalkulatorPro</title>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap&subset=greek"
      rel="stylesheet"
    />
    <link rel="shortcut icon" type="image/png" href={fav} />
  </Helmet>
);
export default SEO;
