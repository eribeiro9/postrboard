WidgetWall = React.createClass({
  propTypes: {
    widgets: React.PropTypes.array.isRequired
  },

  renderWidgets() {
    return this.props.widgets.map((w) => (
      <div key={ w.id }>
        <Widget widget={ w } />
      </div>
    ))
  },

  render() {
    // TODO: pass in if static or not
    return (
      <div>
        { this.renderWidgets() }
      </div>
    )
  }
})
