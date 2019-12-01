import styled from "styled-components";

import color from "../../constants/color";

export const StyledImage = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt
}))`
  width: ${props => (props.loaded ? "60px" : "0px")};
  height: ${props => (props.loaded ? "60px" : "0px")};
  border-radius: 7px;
  transition: 0.2s ease-in-out;
`;
export const StyledUploadImage = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  align-self: ${props => (props.me ? "flex-end" : "flex-start")};
  width: ${props => (props.loaded ? "170px" : "100px")};
  height: ${props => (props.loaded ? "170px" : "100px")};
  border-radius: 7px;
  transition: 0.2s ease-in-out;
  position: relative;
  margin-bottom: 12px;

  &::after {
    display: ${props => props.loaded && "none"};
    content: "";
    width: 100%;
    height: 7px;
    position: absolute;
    bottom: -12px;
    left: 0;
    border: 1px solid ${color.coolGrey};
    border-radius: 7px;
  }

  &::before {
    display: ${props => props.loaded && "none"};
    content: "";
    width: ${props => props.process}%;
    height: 7px;
    position: absolute;
    background: ${color.purple};
    border: 1px solid ${color.purple};
    bottom: -12px;
    left: 0;
    border-radius: 7px;
    transition: 0.1s;
  }
`;
