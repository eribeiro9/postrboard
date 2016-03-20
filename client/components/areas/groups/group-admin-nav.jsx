GroupAdminNav = React.createClass({
  propTypes: {
    group: React.PropTypes.object
  },

  getInitialState() {
    return {
      showNav: false
    }
  },

  toggleNav() {
    this.setState({
      showNav: !this.state.showNav
    })
  },

  render() {
    let linkItems

    if (this.state.showNav) {
      let homePath = '/group/' + FlowRouter.current().params.groupId
      let widgetsPath = homePath + '/admin'
      let settingsPath = homePath + '/admin/settings'
      let invitePath = homePath + '/admin/invite'
      let permissionsPath = homePath + '/admin/permissions'

      linkItems = (
        <div className="right menu">
          <a href={ homePath } className="item">
            <i className="fa fa-home icon"></i>
            <span className="desktop-text">Home</span>
          </a>
          <a href={ widgetsPath } className="item">
            <i className="fa fa-calendar-o icon"></i>
            <span className="desktop-text">Widgets</span>
          </a>
          <a href={ settingsPath } className="item">
            <i className="fa fa-cogs icon"></i>
            <span className="desktop-text">Settings</span>
          </a>
          <a href={ invitePath } className="item">
            <i className="fa fa-user-plus icon"></i>
            <span className="desktop-text">Invite</span>
          </a>
          <a href={ permissionsPath } className="item">
            <i className="fa fa-shield icon"></i>
            <span className="desktop-text">Permissions</span>
          </a>
        </div>
      )
    }

    return (
      <div id="group-admin-nav" className="ui compact inverted menu">
        <a onClick={ this.toggleNav } className="item">
          <i className="fa fa-ellipsis-v"></i>
        </a>
        { linkItems }
      </div>
    )
  }
})
