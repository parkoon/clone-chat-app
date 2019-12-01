import styled from "styled-components";

// Constants
import color from "../../constants/color";

export const StyledRoom = styled.main`
  height: 100%;

  .room__message {
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding: 0 12px;
    padding-top: ${props => (props.expand ? 132 : 67)}px;
    padding-bottom: 60px;
    transition: transform 0.5s, padding-top 0.2s ease-in-out;
    opacity: ${props => (props.loaded ? 1 : 0)};
    transform: translateX(
      ${props =>
        props.loaded
          ? "none"
          : props.transition === "right-to-left"
          ? "20px"
          : "-20px"}
    );
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 35px;
    grid-gap: 10px;
    position: fixed;
    width: 100%;
    bottom: 0;
    padding: 12px;
    background: #f9f9fb;
  }
`;
