import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);
  return (
      <div>Test</div>
  )
};

export default IndexPage;
