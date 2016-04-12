{ Meteor } = require 'meteor/meteor'

{ Users } = require '../collection.coffee'

Meteor.publish 'thisUser', -> Meteor.users.find @userId

Meteor.publish 'allUsers', -> Meteor.users.find()
