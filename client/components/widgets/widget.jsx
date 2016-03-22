Widget = React.createClass({
  propTypes: {
    widget: React.PropTypes.object.isRequired
  },

  render() {
    let widget = this.props.widget
    let header = widget.header
    let content = <p>Not a valid widget type</p>
    let cardClass = "ui card " + header.color

    switch (widget.type) {
      case 'chat':
        content = <Chat conversation={ widget.content.conversation } widgetId={ widget.id } />
        break
    }

    return (
      <div className={ cardClass }>
        <h2 className="ui header">{ header.title }</h2>
        <div className="left aligned content">{ content }</div>
      </div>
    )
  }
})
