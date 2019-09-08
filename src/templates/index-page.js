import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Content, { HTMLContent } from '../components/Content'

export const IndexPageTemplate = ({
  content,
  contentComponent,
  mainpitch,
}) => {
  const PageContent = contentComponent || Content

  return (
  <div className="home">
      <h1>{mainpitch.title}</h1>
      <PageContent className="content" content={content} />
  </div>
)
}

const IndexPage = ({ data }) => {
  const { index, latestBlogs } = data;
  console.log(latestBlogs);
  return (
    <Layout>
      <IndexPageTemplate
        content={index.html}
        contentComponent={HTMLContent}
        mainpitch={index.frontmatter.mainpitch}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    index: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        mainpitch {
          title
          description
        }
      }
    } 
    latestBlogs: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "blog-post"}}}, limit: 2) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
          }
        }
      }
    }
  }
`
