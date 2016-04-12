import React from 'react'

import { Widget } from './widget.jsx'

export class WidgetWall extends React.Component {
  renderWidgets() {
    return this.props.widgets.map((w, i) => (
      <div key={ i } className="sixteen wide mobile eight wide tablet four wide computer column">
        <Widget widget={ w } />
      </div>
    ))
  }

  render() {
    // TODO: either show responsive or bulletin view
    return (
      <div id="layout-content" className="ui grid">
        { this.renderWidgets() }
      </div>
    )
  }
}

WidgetWall.propTypes = {
  widgets: React.PropTypes.array.isRequired
}
