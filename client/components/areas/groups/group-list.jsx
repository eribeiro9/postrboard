GroupList = React.createClass({
  propTypes: {
    user: React.PropTypes.object
  },

  mixins: [ReactMeteorData],

  getMeteorData() {
    let groupSub = Meteor.subscribe('groupList', this.props.user.groups)

    return {
      isLoading: !groupSub.ready(),
      groups: Groups.find().fetch()
    }
  },

  getInitialState() {
    return {
      addingGroup: false
    }
  },

  addGroup() {
    this.setState({
      addingGroup: true
    })
  },

  cancel() {
    this.setState({
      addingGroup: false
    })
  },

  renderGroups() {
    let goToGroup = (unique) => FlowRouter.go('/group/' + unique)

    return this.data.groups.map((g) => (
      <div className="item" onClick={ () => goToGroup(g.unique) }>
        <div className="content">
          <div className="header">{ g.name }</div>
          { g.description }
        </div>
      </div>
    ))
  },

  render() {
    if (this.data.isLoading) return <Loading />

    let groupButton, groupForm

    if (this.state.addingGroup) {
      groupButton = <button onClick={ this.cancel } className="ui fluid red button">Cancel</button>
      groupForm = <AddGroupForm hide={ this.cancel } />
    } else {
      groupButton = <button onClick={ this.addGroup } className="ui fluid green button">Add group</button>
    }

    return (
      <div className="ten wide column">
        { groupButton }
        { groupForm }
        <div className="ui celled selection list">
          { this.renderGroups() }
        </div>
      </div>
    )
  }
})
