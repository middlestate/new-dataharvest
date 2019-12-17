import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Hero from '../components/Sections/Hero'
import Affiliates from '../components/Sections/Affiliates'
import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  background_image,
  title,
  subtitle,
  image,
  affiliate_logos,
}) => (
  <div className="homepage">
    <Hero 
      background_image={background_image}
      title={title} 
      subtitle={subtitle}
      image={image}
    />
    <Affiliates logosArray={affiliate_logos.images} />
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
        affiliate_logos={frontmatter.affiliates.affiliate_logos}
      />
    </Layout>
  )
}

IndexPageTemplate.propTypes = {
  background_image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  affiliate_logos: PropTypes.shape({
    images: PropTypes.array,
  })
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
          background_image
          title
          subtitle
          image
        }

        affiliates {
          affiliate_logos {
            images {
              image
            }
          }          
        }


      }
    }
  }
`
