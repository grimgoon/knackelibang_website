import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({

  mainpitch,
}) => {
  return (
  <div>
      <h1>{mainpitch.title}</h1>
      <h3>{mainpitch.description}</h3>
  </div>
)
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { index, social } = data;

  return (
    <Layout>
      <IndexPageTemplate
        image={index.frontmatter.image}
        title={index.frontmatter.title}
        heading={index.frontmatter.heading}
        subheading={index.frontmatter.subheading}
        mainpitch={index.frontmatter.mainpitch}
        description={index.frontmatter.description}
        intro={index.frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    index: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`
