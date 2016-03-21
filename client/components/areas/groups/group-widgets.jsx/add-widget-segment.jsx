AddWidgetSegment = React.createClass({
  propTypes: {
    hide: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      widgetType: 'chat'
    }
  },

  changeChoice(e) {
    this.setState({
      widgetType: e.target.text.replace(/\s/, '-').toLowerCase()
    })
  },

  render() {
    let chatClass = 'item'

    switch (this.state.widgetType) {
      case 'chat':
        chatClass += ' active'
    }

    return (
      <div className="ui segment">
        <div className="ui one item menu">
          <div className={ chatClass }>Chat</div>
        </div>
        <EditWidgetForm type={ this.state.widgetType } hide={ this.props.hide } />
      </div>
    )
  }
})
