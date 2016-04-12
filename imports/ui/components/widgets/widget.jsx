import React from 'react'

import Chat from './types/chat.jsx'

export default class Widget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCollapsed: false
    }
  }

  toggleCollapse() {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    })
  }

  render() {
    let widget = this.props.widget
    let header = widget.header
    let content = <p>Not a valid widget type</p>
    let cardClass = 'ui card ' + header.color
    let toggleClass = 'chevron-left'

    switch (widget.type) {
      case 'chat':
        content = <Chat conversation={ widget.content.conversation } widgetId={ widget.id } />
        break
    }

    if (!this.state.isCollapsed) {
      var cardContent = <div className="left aligned content">{ content }</div>
      toggleClass = 'chevron-down'
    }

    let iconClass = 'fa fa-' + toggleClass

    return (
      <div id="floating-column" className={ cardClass }>
        <div className="content">
          <a onClick={ this.toggleCollapse } className="right floated"><i className={ iconClass }></i></a>
          <div className="center aligned header">{ header.title }</div>
        </div>
        { cardContent }
      </div>
    )
  }
}

Widget.propTypes = {
  widget: React.PropTypes.object.isRequired
}
