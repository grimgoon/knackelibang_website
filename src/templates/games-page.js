import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const GamesPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const GamesPage = ({ data }) => {
  const { markdownRemark: post } = data

    // Hacky way of removing a weird image that adds a box-shadow and distorts .png when using markdown html with the netlify cms.
    const regexImage = /background-image: url\('data:image\/.*\);/gi;
    const rexexBoxShadow = /box-shadow: white.*;/gi;
    let cleanHtml = post.html.replace(regexImage,"");
    cleanHtml = cleanHtml.replace(rexexBoxShadow, "");
  
  return (
    <Layout>
      <GamesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={cleanHtml}
      />
    </Layout>
  )
}

export default GamesPage

export const aboutPageQuery = graphql`
  query GamesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
