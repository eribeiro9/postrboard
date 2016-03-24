GroupInvite = React.createClass({
  propTypes: {
    user: React.PropTypes.object,
    group: React.PropTypes.object
  },

  mixins: [ReactMeteorData],

  getMeteorData() {
    let userSub = Meteor.subscribe('allUsers')

    return {
      isLoading: !userSub.ready(),
      users: Meteor.users.find().fetch()
    }
  },

  renderUsers() {
    let groupUsers = this.props.group.users
    let users = this.data.users.filter((u) => !groupUsers.includes(u._id))

    return users.map((u) => {
      let addUser = (e) => {
        Meteor.call('addUserToGroup', {
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
            <button type="button" onClick={ addUser } className="tiny ui green button">Add</button>
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
              <h4 className="ui header">Invite Users</h4>
            </div>
            <div className="ui segment">
              <p>Invite users to your group</p>
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
