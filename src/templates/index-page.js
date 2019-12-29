import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Hero from '../components/Sections/Hero'
import Affiliates from '../components/Sections/Affiliates'
import Mission from '../components/Sections/Mission'
import CurrentProjects from '../components/Sections/CurrentProjects'
import PastProjects from '../components/Sections/PastProjects'
import Team from '../components/Sections/Team'
import Layout from '../components/Layout'

export const IndexPageTemplate = ({ background_image, title, subtitle, image, affiliate_logos, mission_title, mission_statement, mission_image, current_projects_subtitle, current_projects_title, side_image, spotlight_logo, spotlight_title, spotlight_subtitle, spotlight_description, spotlight_button_text, spotlight_button_link, banner_text, past_projects_section, team_section }) => (
  <div className="homepage">
    <Hero 
      // background_image={background_image}
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
    <CurrentProjects
      subtitle={current_projects_subtitle}
      title={current_projects_title}
      side_image={side_image}
      logo={spotlight_logo}
      spotlight_title={spotlight_title}
      spotlight_subtitle={spotlight_subtitle}
      description={spotlight_description}
      button_text={spotlight_button_text}
      button_link={spotlight_button_link}
      banner_text={banner_text}
    />
    <PastProjects gridItems={past_projects_section.past_projects} />
    <Team
      gridItems={team_section.team}
    />
  </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        // background_image={frontmatter.hero.background_image}
        title={frontmatter.hero.title}
        subtitle={frontmatter.hero.subtitle}
        image={frontmatter.hero.image}
        affiliate_logos={frontmatter.affiliate_logos}
        mission_title={frontmatter.mission.title}
        mission_statement={frontmatter.mission.statement}
        mission_image={frontmatter.mission.image}
        current_projects_subtitle={frontmatter.current_projects.subtitle}
        current_projects_title={frontmatter.current_projects.title}
        side_image={frontmatter.current_projects.spotlight_project.side_image}
        spotlight_logo={frontmatter.current_projects.spotlight_project.logo}
        spotlight_title={frontmatter.current_projects.spotlight_project.title}
        spotlight_subtitle={frontmatter.current_projects.spotlight_project.subtitle}
        spotlight_description={frontmatter.current_projects.spotlight_project.description}
        spotlight_button_text={frontmatter.current_projects.spotlight_project.button_text}
        spotlight_button_link={frontmatter.current_projects.spotlight_project.button_link}
        banner_text={frontmatter.current_projects.banner_text}
        past_projects_section={frontmatter.past_projects_section}
        team_section={frontmatter.team_section}
      />
    </Layout>
  )
}

IndexPageTemplate.propTypes = {
  // background_image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  affiliate_logos: PropTypes.shape({
    images: PropTypes.array,
  }),
  mission_title: PropTypes.string,
  mission_statement: PropTypes.string,
  mission_image: PropTypes.string,
  current_projects_subtitle: PropTypes.string,
  current_projects_title: PropTypes.string,
  side_image: PropTypes.string,
  spotlight_logo: PropTypes.string,
  spotlight_title: PropTypes.string,
  spotlight_subtitle: PropTypes.string,
  spotlight_description: PropTypes.string,
  spotlight_button_text: PropTypes.string,
  spotlight_button_link: PropTypes.string,
  banner_text: PropTypes.string,
  past_projects_section: PropTypes.shape({
    past_projects: PropTypes.array,
  }),
  team_section: PropTypes.shape({
    team: PropTypes.array,
  }),
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

        current_projects {
          subtitle
          title
          spotlight_project {
            side_image
            logo
            title
            subtitle
            description
            button_text
            button_link
          }
          banner_text
        }

        past_projects_section {
          past_projects {
            project {
              description
              image
              title
            }
          }          
        }

        team_section {
          team {
            member {
              name
              icon
              title
              description              
            }
          }
        }


      }
    }
  }
`
