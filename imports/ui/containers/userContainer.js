import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import Layout from '../layouts/layout.jsx'

export default createContainer(({ params }) => {
  const { content } = params
  const userSub = Meteor.subscribe('thisUser')
  const isLoading = !userSub.ready()
  const user = Meteor.user()
  return {
    content,
    isLoading,
    user
  }
}, Layout)
