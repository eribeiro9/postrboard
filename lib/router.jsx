FlowRouter.route('/', {
  name: 'home',
  action() {
    ReactLayout.render(Layout, {
      content: <Home />
    })
  }
})

FlowRouter.route('/login', {
  name: 'login',
  action() {
    ReactLayout.render(Layout, {
      content: <Login />
    })
  }
})

FlowRouter.route('/register', {
  name: 'register',
  action() {
    ReactLayout.render(Layout, {
      content: <Register />
    })
  }
})

FlowRouter.route('/groups', {
  name: 'my-groups',
  action() {
    ReactLayout.render(Layout, {
      content: <GroupList />
    })
  }
})

let groupRoutes = FlowRouter.group({
  name: 'group',
  prefix: '/group/:groupId',
  triggersEnter: [(context, redirect) => {
    // redirect if not member of private group
  }]
})

groupRoutes.route('/', {
  name: 'group-wall',
  action() {
    ReactLayout.render(Layout, {
      content: <GroupWall />
    })
  }
})

let groupAdminRoutes = groupRoutes.group({
  name: 'group-admin',
  prefix: '/admin',
  triggersEnter: [(context, redirect) => {
    let groupId = context.params.groupId
    let group = Groups.findOne({unique: groupId})
    if (!group || !group.admins.includes(Meteor.userId())) {
      redirect('group-wall', {
        groupId: groupId
      })
    }
  }]
})

groupAdminRoutes.route('/', {
  name: 'group-widgets',
  action() {
    ReactLayout.render(Layout, {
      content: <GroupWidgets />
    })
  }
})

groupAdminRoutes.route('/settings', {
  name: 'group-settings',
  action() {
    ReactLayout.render(Layout, {
      content: <GroupSettings />
    })
  }
})

groupAdminRoutes.route('/invite', {
  name: 'group-invite',
  action() {
    ReactLayout.render(Layout, {
      content: <GroupInvite />
    })
  }
})

groupAdminRoutes.route('/permissions', {
  name: 'group-permissions',
  action() {
    ReactLayout.render(Layout, {
      content: <GroupPermissions />
    })
  }
})
