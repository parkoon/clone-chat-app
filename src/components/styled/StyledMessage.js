import styled from "styled-components";

// Constants
import color from "../../constants/color";

export const StyledMessage = styled.span`
  display: inline-block;
  align-self: ${props => (props.me ? "flex-end" : "flex-start")};
  margin-bottom: 12px;
  box-shadow: 0 0px 2px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 10px 12px;
  background: ${props => (props.me ? color.purple : color.white)};
  color: ${props => (props.me ? color.white : color.black)};
  border-radius: 7px;
  font-size: 13px;
  max-width: 70%;
`;
