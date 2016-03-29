GroupPermissions = React.createClass({
  propTypes: {
    user: React.PropTypes.object,
    group: React.PropTypes.object
  },

  mixins: [ReactMeteorData],

  getMeteorData() {
    let group = this.props.group
    let userSub = Meteor.subscribe('groupUsers', group._id)

    return {
      isLoading: !userSub.ready(),
      users: Meteor.users.find({_id:{$in: group.users}}).fetch()
    }
  },

  renderUsers() {
    let groupAdmins = this.props.group.admins
    let users = this.data.users.filter((u) => !groupAdmins.includes(u._id))

    if (users.length == 0) {
      return (
        <div className="item">
          <div className="content">
            No available users found
          </div>
        </div>
      )
    }

    return users.map((u) => {
      let addUser = (e) => {
        Meteor.call('grantUserGroupAdmin', {
          unique: FlowRouter.current().params.groupId,
          userId: u._id
        }, (err, res) => {
          if (err) {
            toastr.error(err.reason)
          }
        })
      }

      return (
        <div className="item">
          <div className="right floated content">
            <button type="button" onClick={ addUser } className="tiny ui green button">Grant</button>
          </div>
          <div className="content">
            { u.username }
          </div>
        </div>
      )
    })
  },

  render() {
    if (this.data.isLoading) return <Loading />

    return (
      <div id="layout-content" className="ui centered grid">
        <div className="thirteen wide right floated column">
          <div id="floating-column" className="ui raised segments">
            <div className="ui segment">
              <h4 className="ui header">Grant Admins</h4>
            </div>
            <div className="ui segment">
              <p>Grant group users admin permissions</p>
            </div>
            <div className="ui segment">
              <p>TODO: User filter</p>
            </div>
            <div className="ui not padded segment">
              <div className="ui middle aligned divided list">
                { this.renderUsers() }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
