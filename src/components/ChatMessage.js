import React from "react";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  if (props.messageType === "received") {
    return (
      <div className="chat-message">
        <img className="avatar" src={props.message.user.avatar} />
        <div className="textWrapper">
          <p className="userName">{props.message.user.username}</p>
          <p className="messageBody">{props.message.body}</p>
        </div>
      </div>
    );
  } else if (props.messageType === "sent") {
    return (
      <div className="sent-chat-message">
        <div className="sent-textWrapper">
          <p className="sent-messageBody">{props.message.body}</p>
        </div>
      </div>
    );
  }
};

export default ChatMessage;
