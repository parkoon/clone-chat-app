import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Styled
import { StyledChat, StyledChatImage } from "./styled/StyledChat";
import Badge from "./Badge";

// Custom Hooks
import useLoaded from "../hooks/useLoaded";

const dotdotdot = str => {
  if (str.length > 20) {
    return `${str.slice(0, 20)} ...`;
  }
  return str;
};

const Chat = ({ avater, name, lastMessage, updatedAt, unread }) => {
  const loaded = useLoaded();

  return (
    <StyledChat loaded={loaded}>
      <StyledChatImage src={avater} />
      <div className="chat__titles">
        <h4>{name}</h4>
        <span>{dotdotdot(lastMessage)}</span>
      </div>
      <div className="chat__meta">
        <span className="meta__time">{updatedAt}</span>
        {unread > 0 && <Badge data={unread} />}
      </div>
    </StyledChat>
  );
};

export default Chat;
