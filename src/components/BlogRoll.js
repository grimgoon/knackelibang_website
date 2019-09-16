import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from 'lodash'
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <article
              className={`blogItem ${
                post.frontmatter.featuredpost ? "is-featured" : ""
              }`}
            >


              <header>
                <Link className="title" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
                {post.frontmatter.tags && post.frontmatter.tags.length ? (
              <div>
                <div className="tagList">
                  Tags: 
                  {post.frontmatter.tags.map(tag => (
                      <Link key={tag} to={`/tags/${kebabCase(tag)}/`}>{tag}, </Link>
                  ))}
                </div>
              </div>
            ) : null}
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.title}`
                      }}
                    />
                  </div>
                ) : null}
                <p className="date">{post.frontmatter.date}</p>
              </header>
              <p className="description">{post.frontmatter.description}</p>
              <Link className="readMore" to={post.fields.slug}>
                Keep Reading →
              </Link>
              <hr />
            </article>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                tags
                templateKey
                date(formatString: "MMMM DD, YYYY")
                description
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
