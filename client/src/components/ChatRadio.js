import React from 'react';

import './ChatRadio.css';
import Iframe from 'react-iframe';
import useChat from './useChat';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  player: {
    border: 'solid black 3px',
    borderRadius: '13px',
    width: '450px',
    height: '95px',
  },
});

const ChatRadio = (props) => {
  const classes = useStyles();

  const { roomId } = props.match.params; // Gets roomId from URL
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(''); // Message to be sent

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage('');
  };

  const stationURL = `https://tunein.com/embed/player/${roomId.slice(1)}/`;

  return (
    <div className='chat-room-container'>
      <Iframe
        className={classes.player}
        url={stationURL}
        // display='initial'
        // position='relative'
      />
      <div className='messages-container'>
        <ol className='messages-list'>
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? 'my-message' : 'received-message'
              }`}
            >
              {message.body}
            </li>
          ))}
        </ol>
      </div>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder='Write message...'
        className='new-message-input-field'
      />
      <button onClick={handleSendMessage} className='send-message-button'>
        Send
      </button>
    </div>
  );
};

export default ChatRadio;
