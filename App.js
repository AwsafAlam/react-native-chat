import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Chat from './components/Chat'

const messageData = [
  {
    id: 1,
    userId: 1,
    text: "Hello world",
    error: false,
    sending: false,
    createdAt: "2018-10-03 12:13:24",
  },
  {
    id: 2,
    userId: 2,
    text: "Hello world",
    error: false,
    sending: false,
    createdAt: "2018-08-03 12:13:24",
  },
];

class App extends Component {
  state = {
    messages: [],
  };

  componentDidMount = () => {
    this.getMessages();
  };

  getMessages = () => {
    this.setState({
      messages: messageData,
    });
  };

  sendMessage = message => {
    this.setState(prevState => ({
      messages: [message, ...prevState.messages],
    }));
  };

  render() {
    const { messages } = this.state;

    return (
      <Chat
        messages={messages}
        user={{
          id: 1,
        }}
        chatter={{
          id: 2,
        }}
        showChatterAvatar={true}
        onSend={this.sendMessage}
      />
    );
  }
}

export default App;
