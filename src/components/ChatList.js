import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Styled
import { StyledChatList } from "./styled/StyledChat";

// Components
import Header from "./Header";
import Chat from "./Chat";
import { selectChat } from "../actions";

const MenuIcon = () => <i className="fas fa-bars"></i>;
const UserIcon = () => <i className="fas fa-user"></i>;

const getUnreadCount = message => {
  let count = 0;
  message.forEach(m => m.name !== "구찬성" && !m.read && ++count);
  return count;
};

const getLastMessage = message => {
  for (let i = message.length - 1; ; i--) {
    if (message[i].name !== "구찬성") {
      return message[i].content;
    }
  }
};

const ChatList = () => {
  const chats = useSelector(state => state.chats);
  const dispatch = useDispatch();

  return (
    <StyledChatList>
      <Header title="채팅" left={[MenuIcon()]} right={[UserIcon()]} />
      {chats &&
        chats.map((chat, index) => (
          <Link
            to={`/room/${chat.id}`}
            key={index}
            onClick={() => dispatch(selectChat(chat))}
          >
            <Chat
              avater={chat.avatar}
              name={chat.target}
              lastMessage={getLastMessage(chat.messages)}
              updatedAt={chat.updatedAt}
              unread={getUnreadCount(chat.messages)}
            />
          </Link>
        ))}
    </StyledChatList>
  );
};

export default ChatList;
