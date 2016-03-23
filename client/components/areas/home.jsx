Home = React.createClass({
  propTypes: {
    user: React.PropTypes.object
  },

  render() {
    let user = this.props.user
    let topButtons

    if (user) {
      topButtons = <p>Welcome back { user.username }!</p>
    } else {
      topButtons = (
        <div>
          <a href="/login" className="ui large primary button">Login</a>
          <a href="/register" className="ui large button">Register</a>
        </div>
      )
    }

    return (
      <div className="ui inverted vertical masthead center aligned segment">
        <div id="home-greeting" className="ui text container">
          <h1 className="ui inverted header">Postrboard</h1>
          <h3>An online community bulletin board</h3>
          { topButtons }
        </div>
        <div id="home-description" className="ui text container">
          <p>Postrboard is a ...</p>
        </div>
        <div id="home-teasers" className="ui text container">
          <h3 className="ui inverted header">SOMETHING</h3>
          <h3 className="ui inverted header">REACTIVE</h3>
          <h3 className="ui inverted header">EXPANDING</h3>
        </div>
        <div id="home-info" className="ui text container">
          <p>View the source code on <a href="http://github.com/eribeiro9/postrboard.git" target="_blank">Github</a></p>
        </div>
      </div>
    )
  }
})
