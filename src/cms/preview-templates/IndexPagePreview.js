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
