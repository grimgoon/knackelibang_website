import React from "react";
import { Link, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const IndexPageTemplate = ({
  content,
  contentComponent,
  mainpitch,
  latestBlogs
}) => {
  const PageContent = contentComponent || Content;
  return (
    <div className="home">
      <h1>{mainpitch.title}</h1>
      <PageContent className="homeContent" content={content} />
      <h1 className="latestBlogsTitle">Latest Blogs</h1>
      <div className="latestBlogs">
        {latestBlogs && latestBlogs.map((latestBlog, index) => {
          const blog = latestBlog.node.frontmatter;
          return (
            <div className="item" key={index}>
              <div className="image">
                <GatsbyImage
                  key={index}
                  fixed={blog.featuredimage.childImageSharp.fixed}
                />
              </div>
              <div className="text">
                <h1>{blog.title}</h1>
                <p className="date">{blog.date}</p>
                <Link to={latestBlog.node.fields.slug}>
                  <div className="button">
                    Read More
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const IndexPage = ({ data }) => {
  const { index, latestBlogs } = data;

    // Hacky way of removing a weird image that adds a box-shadow and distorts .png when using markdown html with the netlify cms.
    const regexImage = /background-image: url\('data:image\/.*\);/gi;
    const rexexBoxShadow = /box-shadow: white.*;/gi;
    let cleanHtml = index.html.replace(regexImage,"");
    cleanHtml = cleanHtml.replace(rexexBoxShadow, "");

  return (
    <Layout>
      <IndexPageTemplate
        content={cleanHtml}
        contentComponent={HTMLContent}
        mainpitch={index.frontmatter.mainpitch}
        latestBlogs={latestBlogs.edges}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    index: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        mainpitch {
          title
        }
      }
    }
    latestBlogs: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 2
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fixed(width: 360, height: 203, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
