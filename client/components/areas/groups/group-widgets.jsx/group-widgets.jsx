GroupWidgets = React.createClass({
  propTypes: {
    user: React.PropTypes.object,
    group: React.PropTypes.object
  },

  getInitialState() {
    return {
      addingWidget: false,
      showWarningModal: false
    }
  },

  addWidget() {
    this.setState({
      addingWidget: true
    })
  },

  cancel() {
    this.setState({
      addingWidget: false
    })
  },

  showModal() {
    this.setState({
      showWarningModal: true
    })
  },

  hideModal() {
    this.setState({
      showWarningModal: false
    })
  },

  renderWidgets() {
    return this.props.group.widgets.map((w) =>
      <GroupWidget widget={ w } showModal={ this.showModal } />
    )
  },

  render() {
    let widgetButton, widgetSegment

    if (this.state.addingWidget) {
      widgetButton = <button onClick={ this.cancel } className="ui fluid red button">Cancel</button>
      widgetSegment = <AddWidgetSegment hide={ this.cancel } />
    } else {
      widgetButton = <button onClick={ this.addWidget } className="ui fluid green button">Add widget</button>
    }

    return (
      <div className="ten wide column">
        <div className="ui raised segments">
          <div className="ui segment">
            { widgetButton }
          </div>
          { widgetSegment }
          <div className="ui not padded segment">
            <div className="ui divided selection list">
              { this.renderWidgets() }
            </div>
          </div>
        </div>
      </div>
    )
  }
})