EditWidgetForm = React.createClass({
  propTypes: {
    type: React.PropTypes.string,
    widget: React.PropTypes.object,
    hide: React.PropTypes.func
  },

  getInitialState() {
    return {
      isDisabled: !this.props.type
    }
  },

  changeForm(e) {
    e.preventDefault()

    if (!this.props.type) {
      let formTitle = e.target.form.title.value
      let widgetTitle = this.props.widget.header.title

      this.setState({
        isDisabled: formTitle == widgetTitle
      })
    }
  },

  saveWidget(e) {
    e.preventDefault()

    if (this.props.type) {
      Meteor.call('addWidget', {
        unique: FlowRouter.current().params.groupId,
        type: this.props.type,
        title: e.target.title.value
      }, (err, res) => {
        if (!err) {
          this.props.hide()
        } else {
          toastr.error(err.reason)
        }
      })
    } else {
      Meteor.call('editWidget', {
        unique: FlowRouter.current().params.groupId,
        id: this.props.widget.id,
        title: e.target.title.value
      }, (err, res) => {
        if (!err) {
          this.props.hide()
        } else {
          toastr.error(err.reason)
        }
      })
    }
  },

  render() {
    let submit = this.props.type ? 'Add Widget' : 'Save Widget'
    let buttonClass = 'ui fluid primary button'

    if (this.state.isDisabled) buttonClass += ' disabled'

    if (!this.props.type) {
      let header = this.props.widget.header
      var title = header ? header.title : ''

      var cancelButton = <button type="button" onClick={ this.props.hide } className="ui fluid button">Cancel</button>
    }

    return (
      <form onSubmit={ this.saveWidget } onChange={ this.changeForm } className="ui form">
          <div className="field">
            <label>Widget Title</label>
            <input type="text" name="title" placeholder="Widget Title" defaultValue={ title } />
          </div>
        <input type="submit" value={ submit } className={ buttonClass } />
        { cancelButton }
      </form>
    )
  }
})
