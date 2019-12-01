import React, { useEffect } from "react";

// Styled
import { StyledMessage } from "./styled/StyledMessage";

const Message = ({ content, ...props }) => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return <StyledMessage {...props}>{content}</StyledMessage>;
};

export default Message;
