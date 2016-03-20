GroupWall = React.createClass({
  propTypes: {
    user: React.PropTypes.object,
    group: React.PropTypes.object
  },

  render() {
    let widgets = this.props.group.widgets

    return <WidgetWall widgets={ widgets } />
  }
})
