import styled from "styled-components";

// Constants
import color from "../../constants/color";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 55px;
  z-index: 10;

  background: ${color.purple};
  color: ${color.white};
  padding: 12px;
  padding-top: 18px;
  transition: height 0.2s;

  .header__images {
    width: 100%;
    position: absolute;
    height: 67px;
    bottom: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, 60px);
    grid-auto-flow: column;
    grid-auto-columns: 60px;
    grid-gap: 7px;
    padding: 0 12px;
    overflow-x: auto;
    cursor: pointer;

    &::-webkit-scrollbar {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      display: none;
    }
    &::-webkit-scrollbar-track {
      display: none;
    }
  }

  &.header--expand {
    height: 120px;
  }
  h2 {
    transition: 0.5s ease-in-out;
    font-weight: bold;
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
  .header__left {
    transition: 0.5s ease-in-out;
    opacity: ${props => (props.loaded ? 1 : 0)};
  }

  .header__right {
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

    span {
      margin-right: 17px;

      &:last-child {
        margin: 0;
      }
    }
  }
`;
