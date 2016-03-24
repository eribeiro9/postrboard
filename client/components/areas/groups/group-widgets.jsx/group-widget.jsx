GroupWidget = React.createClass({
  propTypes: {
    widget: React.PropTypes.object.isRequired,
    showModal: React.PropTypes.func
  },

  getInitialState() {
    return {
      editingWidget: false,
      deletingWidget: false
    }
  },

  toggleEdit() {
    this.setState({
      editingWidget: !this.state.editingWidget,
      deletingWidget: false
    })
  },

  stopEdit() {
    this.setState({
      editingWidget: false,
      deletingWidget: false
    })
  },

  toggleDelete() {
    this.setState({
      deletingWidget: !this.state.deletingWidget,
      editingWidget: false
    })
  },

  stopDelete() {
    this.setState({
      deletingWidget: false,
      editingWidget: false
    })
  },

  deleteWidget() {
    Meteor.call('deleteWidget', {
      unique: FlowRouter.current().params.groupId,
      id: this.props.widget.id
    }, (err, res) => {
      if (!err) {
        this.stopDelete()
      } else {
        toastr.error(err.reason)
      }
    })
  },

  render() {
    let editItem, deleteItem

    if (this.state.editingWidget) {
      editItem = <EditWidgetForm widget={ this.props.widget } hide={ this.stopEdit } />
    } else if (this.state.deletingWidget) {
      deleteItem = (
        <div>
          <h3 className="ui header">Delete widget?</h3>
          <button type="button" onClick={ this.deleteWidget } className="ui red fluid button">Delete</button>
          <button type="button" onClick={ this.stopDelete } className="ui fluid button">Cancel</button>
        </div>
      )
    }

    return (
      <div className="ui item">
        <div className="right floated content">
          <div className="ui icon buttons">
            <button type="button" onClick={ this.toggleEdit } className="ui icon button">
              <i className="fa fa-cog icon"></i>
            </button>
            <button type="button" onClick={ this.toggleDelete } className="ui icon button">
              <i className="fa fa-times icon"></i>
            </button>
          </div>
        </div>
        <div className="content">
          { this.props.widget.header.title }
        </div>
        { editItem }
        { deleteItem }
      </div>
    )
  }
})
