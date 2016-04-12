import { Meteor } from 'meteor/meteor'

import Groups from '../collection.js'
import Users from '../../users/collection.js'

Meteor.publish('myGroups', () => {
  let user = Meteor.users.findOne(this.userId)
  return Groups.find({ _id: { $in: user.groups } })
})

Meteor.publish('groupWithUsers', (groupId) => {
    let groups = Groups.find(groupId)
    let users = groups.fetch()[0].users
    return [
      groups,
      Meteor.users.find({ _id: { $in: users } }, Users.publicFields)
    ]
  }
)
