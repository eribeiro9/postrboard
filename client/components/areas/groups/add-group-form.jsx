AddGroupForm = React.createClass({
  propTypes: {
    hide: React.PropTypes.func.isRequired
  },

  createGroup(e) {
    e.preventDefault()

    let obj = {
      name: e.target.name.value,
      unique: e.target.unique.value,
      description: e.target.description.value || undefined
    }

    if (obj.name && obj.unique) {
      Meteor.call('createGroup', obj, (err, res) => {
        if (!err) {
          toastr.success('Created project ' + obj.name)
          this.props.hide()
        } else {
          toastr.error(err.reason)
        }
      })
    } else {
      toastr.error('Group name and identifier are required')
    }
  },

  render() {
    return (
      <form className="ui form" onSubmit={ this.createGroup }>
        <div className="field">
          <label>Group name</label>
          <input type="text" name="name" placeholder="Group name" />
        </div>
        <div className="field">
          <label>Unique identifier</label>
          <input type="text" name="unique" placeholder="Unique identifier" />
        </div>
        <div className="field">
          <label>Optional description</label>
          <input type="text" name="description" placeholder="Optional description" />
        </div>
        <input type="submit" value="Add" className="ui fluid primary button" />
      </form>
    )
  }
})
