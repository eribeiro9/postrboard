Chat = React.createClass({
  propTypes: {
    conversation: React.PropTypes.array.isRequired,
    widgetId: React.PropTypes.number
  },

  postMessage(e) {
    e.preventDefault()

    Meteor.call('addChatMessage', {
      unique: FlowRouter.current().params.groupId,
      message: e.target.chat.value,
      widgetId: this.props.widgetId
    })

    e.target.chat.value = ''
  },

  messagesBySender() {
    let conv = this.props.conversation
    let messages = []

    while (conv.length > 0) {
      let item = conv.shift()
      let lastMessage = messages[messages.length - 1]

      if (lastMessage && item.sender == lastMessage.sender) {
        lastMessage.messages.push(item.message)
        messages[messages.length - 1] = lastMessage
      } else {
        messages.push({
          sender: item.sender,
          messages: [item.message]
        })
      }
    }

    return messages
  },

  renderMessages(messageList) {
    return messageList.messages.map((m) =>
      <div className="description">{ m.text }</div>
    )
  },

  renderMessageBlocks() {
    return this.messagesBySender().map((m) => (
      <div className="item">
        <div className="content">
          <div className="ui header">{ m.sender }</div>
          {  this.renderMessages(m) }
        </div>
      </div>
    ))
  },

  render() {
    return (
      <div>
        <div className="ui divided list">
          { this.renderMessageBlocks() }
        </div>
        <div className="chat-footer">
          <form onSubmit={ this.postMessage } className="ui form">
            <input type="text" name="chat" placeholder="Enter message..." />
            <input type="submit" value="Submit" className="ui fluid button" />
          </form>
        </div>
      </div>
    )
  }
})
