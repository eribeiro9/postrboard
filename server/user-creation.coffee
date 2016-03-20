Accounts.onCreateUser (options, user) ->
  user.profile = options.profile ? {}
  user.emails ?= []
  user.groups ?= []

  # TODO: send verification email

  user
