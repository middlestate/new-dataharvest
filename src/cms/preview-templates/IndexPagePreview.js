import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const entryImages = entry.getIn(['data', 'affiliate_logos', 'images'])
  const images = entryImages ? entryImages.toJS() : []

  if (data) {
    return (
      <IndexPageTemplate
        background_image={data.hero.background_image}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        image={data.hero.image}
        affiliate_logos={{ images }}
        mission_title={data.mission.title}
        mission_statement={data.mission.statement}
        mission_image={data.mission.image}
        current_projects_subtitle={data.current_projects.subtitle}
        current_projects_title={data.current_projects.title}
        side_image={data.current_projects.spotlight_project.side_image}
        spotlight_logo={data.current_projects.spotlight_project.logo}
        spotlight_title={data.current_projects.spotlight_project.title}
        spotlight_subtitle={data.current_projects.spotlight_project.subtitle}
        spotlight_description={data.current_projects.spotlight_project.description}
        spotlight_button_text={data.current_projects.spotlight_project.button_text}
        spotlight_button_link={data.current_projects.spotlight_project.button_link}
        banner_text={data.current_projects.banner_text}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
