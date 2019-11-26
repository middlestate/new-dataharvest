import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Hero from '../components/Sections/Hero'
import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  background_image,
  title,
  subtitle,
  image,
}) => (
  <div className="homepage">
    <Hero 
      background_image={
        !!background_image.childImageSharp ?
          background_image.childImageSharp.fluid.src :
          background_image
      }
      title={
        title
      } 
      subtitle={
        subtitle
      }
      image={
        !!image.childImageSharp ?
          image.childImageSharp.fluid.src :
          image
      }
    />
  </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        background_image={frontmatter.hero.background_image}
        title={frontmatter.hero.title}
        subtitle={frontmatter.hero.subtitle}
        image={frontmatter.hero.image}
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
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        hero {
          background_image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          subtitle
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }          
        }
      }
    }
  }
`
