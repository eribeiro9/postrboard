GroupSettings = React.createClass({
  propTypes: {
    user: React.PropTypes.object,
    group: React.PropTypes.object
  },

  getInitialState() {
    return {
      isDisabled: true
    }
  },

  resetForm(e) {
    e.preventDefault()

    e.target.name.value = this.props.group.name
    e.target.description.value = this.props.group.description
    e.target.isPrivate.value = this.props.group.isPrivate

    this.setState({
      isDisabled: true
    })
  },

  changeForm(e) {
    e.preventDefault()

    let formName = e.target.form.name.value
    let formDescription = e.target.form.description.value
    let formIsPrivate = e.target.form.isPrivate.value
    let groupName = this.props.group.name
    let groupDescription = this.props.group.description
    let groupIsPrivate = this.props.group.isPrivate

    this.setState({
      isDisabled: formName == groupName
               && formDescription == groupDescription
               && formIsPrivate == groupIsPrivate
    })
  },

  updateGroup(e) {
    e.preventDefault()

    Meteor.call('updateGroup', {
      name: e.target.name.value,
      unique: FlowRouter.current().params.groupId,
      description: e.target.description.value,
      isPrivate: e.target.isPrivate.value
    }, (err, res) => {
      if (!err) {
        toastr.success('Updated group')
        this.setState({
          isDisabled: true
        })
      } else {
        toastr.error(err.reason)
      }
    })
  },

  render() {
    let name = this.props.group.name
    let description = this.props.group.description
    let isPrivate = this.props.group.isPrivate
    let buttonClass = 'ui fluid button'

    if (this.state.isDisabled) buttonClass += ' disabled'

    return (
      <div id="layout-content" className="ui centered grid">
        <div className="ten wide column">
          <form onChange={ this.changeForm } onSubmit={ this.updateGroup } onReset={ this.resetForm } className="ui form">
            <div className="ui raised segment">
              <div className="field">
                <label>Group Name</label>
                <input type="text" name="name" placeholder="Group Name" defaultValue={ name } />
              </div>
              <div className="field">
                <label>Group Description</label>
                <input type="text" name="description" placeholder="Group Description" defaultValue={ description } />
              </div>
              <div className="inline field">
                <div className="ui toggle checkbox">
                  <label>Private Group</label>
                  <input type="checkbox" name="isPrivate" className="hidden" defaultValue={ isPrivate } />
                </div>
              </div>
              <input type="submit" value="Submit" className={ buttonClass + ' primary' } />
              <input type="reset" value="Reset" className={ buttonClass } />
            </div>
          </form>
        </div>
      </div>
    )
  }
})
