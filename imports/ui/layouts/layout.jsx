import React from 'react'

import Loading from '../pages/loading.jsx'
import SiteNav from '../components/nav/site-nav.jsx'

export default class Layout extends React.Component {
  render() {
    if (this.props.isLoading) return <Loading />

    return (
      <div>
        { this.props.content }
        <SiteNav user={ this.props.user }/>
      </div>
    )
  }
}

Layout.propTypes = {
  content: React.PropTypes.element.isRequired,
  isLoading: React.PropTypes.bool,
  user: React.PropTypes.object
}
