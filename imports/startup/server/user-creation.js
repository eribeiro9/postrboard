import { Accounts } from 'meteor/accounts-base'

Accounts.onCreateUser((options, user) =>
  user.profile = options.profile || {}
  user.emails = user.emails || []
  user.groups = user.groups || []

  // TODO: send verification email

  return user
)
