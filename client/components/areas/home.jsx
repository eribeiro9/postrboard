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
          <img src="/images/group-widgets.png" className="ui centered image" />
          <p>
            Postrboard is a place where you can interact and share media with friends
            using a reactive and friendly UI.  Think of a Facebook group outside of Facebook.
          </p>
        </div>
        <div id="home-teasers" className="ui stackable two column grid container">
          <div className="middle aligned column">
            <h3 className="ui inverted header">SOMETHING</h3>
            <p>Maybe something about the great community or usefulness of the site</p>
          </div>
          <div className="column">
            <img src="/images/teaser.png" className="ui image" />
          </div>
          <div className="middle aligned column">
            <h3 className="ui inverted header">REACTIVE</h3>
            <p>The entire app is updated in real time and designed to work on mobile and desktop</p>
          </div>
          <div className="column">
            <img src="/images/teaser.png" className="ui image" />
          </div>
          <div className="middle aligned column">
            <h3 className="ui inverted header">EXPANDING</h3>
            <p>A core concept of the site is to be very easily expandable, especially through widgets</p>
          </div>
          <div className="column">
            <img src="/images/teaser.png" className="ui image" />
          </div>
        </div>
        <div id="home-info" className="ui text container">
          <p>View the source code on <a href="http://github.com/eribeiro9/postrboard.git" target="_blank">Github</a></p>
        </div>
      </div>
    )
  }
})
