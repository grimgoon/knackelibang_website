import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import Carousel from "./Carousel";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix, graphql, StaticQuery } from "gatsby";

export const TemplateWrapper = (props) => {
  const { children, socials, data } = props;
  console.log(props)
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
        <meta
          name="google-site-verification"
          content="m7ArQUAtrMwV3aAXHLO-UUt6uAFpYmQqap6Cx279lxU"
        />
      </Helmet>
      <Header socials={data.socials.frontmatter} />
      <Carousel />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default (props) => (
  <StaticQuery query={pageQuery} render={data => <TemplateWrapper data={data} {...props}/>} /> 
)

const pageQuery = graphql`
query {
  socials: markdownRemark(frontmatter: {templateKey: {eq: "social-page"}}) {
    frontmatter {
      facebook
    }
  }
}
`

