SiteNav = React.createClass({
  propTypes: {
    user: React.PropTypes.object
  },

  componentDidMount() {
    $('#collapse-bar').dropdown()
  },

  logout(e) {
    FlowRouter.go('home')
    Meteor.logout()
  },

  render() {
    let userIcon, username, navMenu

    if (this.props.user) {
      userIcon = <i className="fa fa-user"></i>
      username = this.props.user.username
      navMenu = (
        <div className="menu">
          <a href="/" className="item">Home</a>
          <a href="/groups" className="item">Groups</a>
          <a onClick={ this.logout } className="item">Logout</a>
        </div>
      )
    } else {
      userIcon = <i className="fa fa-user-times"></i>
      navMenu = (
        <div className="menu">
          <a href="/" className="item">Home</a>
          <a href="/login" className="item">Login</a>
          <a href="/register" className="item">Register</a>
        </div>
      )
    }

    return (
      <div id="site-nav" className="ui inverted compact menu">
        <div id="collapse-bar" className="ui dropdown item">
          <i className="fa fa-bars"></i>
          <span className="nav-username">{ username }</span>
          { userIcon }
          { navMenu }
        </div>
      </div>
    )
  }
})
