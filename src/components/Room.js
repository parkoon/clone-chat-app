import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";

// Styled
import { StyledRoom } from "./styled/StyledRoom";

// Components
import Header from "./Header";
import Message from "./Message";
import Input from "./Input";
import UploadImage from "./uploadImage";

// Custom hooks
import useLoaded from "../hooks/useLoaded";

const SearchIcon = () => <i className="fas fa-search"></i>;

const Room = props => {
  const chats = useSelector(state => state.chats);

  // state
  const [expand, setExpand] = useState(false);
  const [chat, setChat] = useState();
  const loaded = useLoaded();

  // router
  const { id } = useParams();
  const history = useHistory();

  const chatById = id => {
    chats.forEach(c => c.id === id && setChat(c));
  };

  const renderMessage = messages =>
    messages.map(({ content, name, time, type, src }) =>
      type === "text" ? (
        <Message content={content} key={time} me={name === "구찬성"} />
      ) : (
        <UploadImage src={src} key={time} me={name === "구찬성"} />
      )
    );

  useEffect(() => {
    chatById(id);
  }, [chats]);

  return (
    <>
      <Header
        expand={expand}
        title={chat ? chat.target : ""}
        transition={props.transition}
        left={[
          <i
            onClick={() => history.push("/list")}
            className="fas fa-angle-left"
          ></i>
        ]}
        right={[
          <i onClick={() => setExpand(!expand)} className="fas fa-image"></i>,
          SearchIcon()
        ]}
      />
      <StyledRoom expand={expand} loaded={loaded}>
        <div className="room__message">
          {chat && renderMessage([...chat.messages])}
        </div>
        <footer className="room__footer">
          <Input />
        </footer>
      </StyledRoom>
    </>
  );
};

export default Room;
