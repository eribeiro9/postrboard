lowestId = (list) ->
  i = 0
  i++ while list.find (w) -> i is w.id
  i

Meteor.methods
  createGroup: (obj) ->
    group = Groups.findOne unique: obj.unique
    user = Meteor.users.findOne @userId
    if group
      throw new Meteor.Error 'group-not-unique', "Identifier #{obj.unique} is already in use"
    else if user then Groups.insert {
      name: obj.name
      unique: obj.unique
      description: obj.description
      users: [@userId]
      admins: [@userId]
      widgets: []
    }, (err, doc) ->
      unless err
        groups = user.groups
        groups.unshift doc
        Meteor.users.update user._id, $set:
          groups: groups
      else throw new Meteor.Error 'db-insert-error', 'Error occurred when inserting to the db'
    else throw new Meteor.Error 'invalid-permissions', 'Invalid Permissions'

  updateGroup: (obj) ->
    group = Groups.findOne unique: obj.unique
    if @userId in group.admins
      Groups.update group._id, $set:
        name: obj.name
        description: obj.description
        isPrivate: obj.isPrivate
    else throw new Meteor.Error 'invalid-permissions', 'Invalid Permissions'

  addWidget: (obj) ->
    group = Groups.findOne unique: obj.unique
    if @userId in group.admins
      switch obj.type
        when 'chat' then content =
          conversation: []
        else throw new Meteor.Error 'invalid-widget-type', "Invalid Widget type '#{obj.type}'"
      widgets = group.widgets
      widgets.unshift
        id: lowestId widgets
        header:
          title: obj.title
          color: 'black'
        type: obj.type
        content: content
      Groups.update group._id, $set:
        widgets: widgets
    else throw new Meteor.Error 'invalid-permissions', 'Invalid Permissions'

  editWidget: (obj) ->
    group = Groups.findOne unique: obj.unique
    if @userId in group.admins
      widgets = group.widgets
      widgets = widgets.map (w) ->
        w.header.title = obj.title if w.id is obj.id
        w
      Groups.update group._id, $set:
        widgets: widgets
    else throw new Meteor.Error 'invalid-permissions', 'Invalid Permissions'

  deleteWidget: (obj) ->
    group = Groups.findOne unique: obj.unique
    if @userId in group.admins
      widgets = group.widgets
      widgets = widgets.filter (w) -> w.id isnt obj.id
      Groups.update group._id, $set:
        widgets: widgets
    else throw new Meteor.Error 'invalid-permissions', 'Invalid Permissions'

  addChatMessage: (obj) ->
    group = Groups.findOne unique: obj.unique
    if @userId in group.users
      user = Meteor.users.findOne @userId
      widgets = group.widgets.map (widget) ->
        if widget.id is obj.widgetId
          conversation = widget.content.conversation
          conversation.push
            sender: user.username
            message:
              text: obj.message
              ts: new Date()
          widget.content.conversation = conversation
        widget
      Groups.update group._id, $set:
        widgets: widgets
    else throw new Meteor.Error 'invalid-permissions', 'Invalid Permissions'

  addUserToGroup: (obj) ->
    group = Groups.findOne unique: obj.unique
    if @userId in group.admins
      users = group.users
      users.push obj.userId
      Groups.update group._id, { $set:
        users: users
      }, (err, doc) ->
        unless err
          user = Meteor.users.findOne obj.userId
          groups = user.groups
          groups.push group._id
          Meteor.users.update user._id, $set:
            groups: groups
        else throw new Meteor.Error 'db-update-error', 'Error occurred when updating the db'
    else throw new Meteor.Error 'invalid-permissions', 'Invalid Permissions'

  grantUserGroupAdmin: (obj) ->
    group = Groups.findOne unique: obj.unique
    admins = group.admins
    if @userId in admins and obj.userId in group.users
      admins.push obj.userId
      Groups.update group._id, $set:
        admins: admins
    else throw new Meteor.Error 'invalid-permissions', 'Invalid Permissions'
