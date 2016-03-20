Layout = React.createClass({
  propTypes: {
    content: React.PropTypes.element.isRequired
  },

  mixins: [ReactMeteorData],

  getMeteorData() {
    let userSub = Meteor.subscribe('thisUser')

    let group = FlowRouter.current().route.group
    if (group && ['group', 'group-admin'].includes(group.name)) {
      let groupSub = Meteor.subscribe('oneGroup', FlowRouter.current().params.groupId)

      return {
        isLoading: !(userSub.ready() && groupSub.ready()),
        isGroupRoute: true,
        user: Meteor.user(),
        group: Groups.findOne()
      }
    }

    return {
      isLoading: !userSub.ready(),
      user: Meteor.user()
    }
  },

  render() {
    if (this.data.isLoading) return <Loading />

    let content = this.props.content
    content = React.cloneElement(content, { user: this.data.user })

    if (this.data.isGroupRoute) {
      let currentGroup = this.data.group

      content = React.cloneElement(content, { group: currentGroup })

      if (currentGroup.admins.includes(Meteor.userId())) {
        var groupAdminNav = <GroupAdminNav group={ currentGroup } />
      }
    }

    return (
      <div>
        <div id="layout-content" className="ui centered grid">{ content }</div>
        <SiteNav user={ this.data.user }/>
        { groupAdminNav }
      </div>
    )
  }
})
