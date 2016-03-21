GroupWidget = React.createClass({
  propTypes: {
    widget: React.PropTypes.object.isRequired,
    showModal: React.PropTypes.func
  },

  getInitialState() {
    return {
      editingWidget: false
    }
  },

  editWidget() {
    this.setState({
      editingWidget: true
    })
  },

  stopEdit() {
    this.setState({
      editingWidget: false
    })
  },

  render() {
    let editItem

    if (this.state.editingWidget) {
      editItem = (
        <EditWidgetForm widget={ this.props.widget } hide={ this.stopEdit } />
      )
    }

    return (
      <div className="ui item">
        <div className="right floated content">
          <div className="ui icon buttons">
            <button type="button" onClick={ this.editWidget } className="ui icon button">
              <i className="fa fa-cog icon"></i>
            </button>
            <button type="button" className="ui icon button">
              <i className="fa fa-times icon"></i>
            </button>
          </div>
        </div>
        <div className="content">
          { this.props.widget.header.title }
        </div>
        { editItem }
      </div>
    )
  }
})
