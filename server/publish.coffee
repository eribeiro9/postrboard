Meteor.publish 'thisUser', -> Meteor.users.find @userId

Meteor.publish 'groupUsers', (groupId) ->
  group = Groups.findOne groupId
  Meteor.users.find _id: $in: group.users

Meteor.publish 'allUsers', -> Meteor.users.find()

Meteor.publish 'oneGroup', (unique) -> Groups.find unique: unique

Meteor.publish 'groupList', (list) -> if list then Groups.find _id: $in: list
