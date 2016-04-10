import React from 'react'

import { HomeTeasers } from './home-teasers.jsx'

export default class Home extends React.Component {
  render() {
    let user = this.props.user
    let topButtons

    if (user) {
      topButtons = (
        <div>
          <p>Welcome back { user.username }!</p>
          <a href="/groups" className="ui large inverted black button">Go to your groups</a>
        </div>
      )
    } else {
      topButtons = (
        <div>
          <a href="/login" className="ui large inverted black button">Login</a>
          <a href="/register" className="ui large inverted button">Register</a>
        </div>
      )
    }

    return (
      <div>
        <div id="home-header" className="ui vertical center aligned segment">
          <div id="home-greeting" className="ui text container">
            <h1 className="ui header">Postrboard</h1>
            <h2>An online community bulletin board</h2>
            { topButtons }
          </div>
        </div>
        <HomeTeasers />
        <div id="home-footer" className="ui vertical center aligned segment">
          <div id="home-info" className="ui text container">
            <p>View the source code on <a href="http://github.com/eribeiro9/postrboard.git" target="_blank">Github</a></p>
          </div>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  user: React.PropTypes.object
}
