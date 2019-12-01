import styled from "styled-components";

// Constants
import color from "../../constants/color";

export const StyledChatList = styled.div`
  padding-top: 67px;
  min-height: 100vh;
`;

export const StyledChat = styled.div`
  display: grid;
  grid-template-columns: 57px 1fr 52px;
  grid-gap: 12px;
  align-items: center;
  padding: 0 12px;
  margin-bottom: 16px;
  transition: 0.5s ease-in-out;
  opacity: ${props => (props.loaded ? 1 : 0)};
  transform: translateX(
    ${props =>
      props.loaded
        ? "none"
        : props.transition === "right-to-left"
        ? "20px"
        : "-20px"}
  );

  .chat__titles {
    text-align: left;

    h4 {
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 4px;
    }

    span {
      color: ${color.coolGrey};
      font-size: 11px;
    }
  }

  .chat__meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .meta__time {
      color: ${color.coolGrey};
      font-size: 12px;
      margin-bottom: 4px;
    }
  }
`;

export const StyledChatImage = styled.img.attrs(props => ({
  src: props.src
}))`
  width: 52px;
  height: 52px;
  border-radius: 50%;
`;
