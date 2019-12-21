import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Hero from '../components/Sections/Hero'
import Affiliates from '../components/Sections/Affiliates'
import Mission from '../components/Sections/Mission'
import Layout from '../components/Layout'

export const IndexPageTemplate = ({ background_image, title, subtitle, image, affiliate_logos, mission_title, mission_statement, mission_image }) => (
  <div className="homepage">
    <Hero 
      background_image={background_image}
      title={title} 
      subtitle={subtitle}
      image={image}
    />
    <Affiliates gridItems={affiliate_logos.images} />
    <Mission
      title={mission_title}
      statement={mission_statement}
      image={mission_image}
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
        affiliate_logos={frontmatter.affiliate_logos}
        mission_title={frontmatter.mission.title}
        mission_statement={frontmatter.mission.statement}
        mission_image={frontmatter.mission.image}
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
  }),
  mission_title: PropTypes.string,
  mission_statement: PropTypes.string,
  mission_image: PropTypes.string
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

        affiliate_logos {
          images {
            image
          }
        }

        mission {
          title
          statement
          image
        }


      }
    }
  }
`
