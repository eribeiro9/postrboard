{ Meteor } = require 'meteor/meteor'

{ Groups } = require '../collection.coffee'
{ Users } = require '../../users/collection.coffee'

Meteor.publish 'myGroups', ->
  user = Meteor.users.findOne @userId
  Groups.find _id: $in: user.groups

Meteor.publish 'groupWithUsers', (groupId) ->
  groups = Groups.find groupId
  users = groups.fetch()[0].users
  [
    groups
    Meteor.users.find { _id: $in: users }, Users.publicFields
  ]
