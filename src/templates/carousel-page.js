import React from "react";
import { Link, graphql } from "gatsby";
import Page404 from "../pages/404" 
import Layout from "../components/Layout";

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);
  return (
    <Page404/>
  )
};

export default IndexPage;
