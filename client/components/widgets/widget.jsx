Widget = React.createClass({
  propTypes: {
    widget: React.PropTypes.object.isRequired
  },

  render() {
    let widget = this.props.widget
    let header = widget.header
    let content = <p>Not a valid widget type</p>

    switch (widget.type) {
      case 'chat':
        content = <Chat conversation={ widget.content.conversation } widgetId={ widget.id } />
        break
    }

    return (
      <div className="ui card">
        <div className="header">{ widget.header.title }</div>
        <div className="content">{ content }</div>
      </div>
    )
  }
})
