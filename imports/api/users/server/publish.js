import { Meteor } from 'meteor/meteor'

import { Users } from '../collection.coffee'

Meteor.publish('thisUser', () => Meteor.users.find(this.userId))

Meteor.publish('allUsers', () => Meteor.users.find())
