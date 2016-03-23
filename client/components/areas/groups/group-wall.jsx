GroupWall = React.createClass({
  propTypes: {
    user: React.PropTypes.object,
    group: React.PropTypes.object
  },

  render() {
    let widgets = this.props.group.widgets

    return (
      <div id="layout-content" className="ui centered grid">
        <WidgetWall widgets={ widgets } />
      </div>
    )
  }
})
