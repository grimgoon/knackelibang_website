import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  console.log("data",data);
  if (data) {
    return (
      <IndexPageTemplate
        mainpitch={data.mainpitch || {}}
        content={widgetFor('body')}
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
  widgetFor: PropTypes.func,
}

export default IndexPagePreview
