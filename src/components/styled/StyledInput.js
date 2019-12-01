import styled from "styled-components";

// Constants
import color from "../../constants/color";

export const StyledInput = styled.input.attrs(props => ({
  placehoder: props.placehoder
}))`
  padding: 10px 12px;
  border-radius: 20px;
  box-shadow: 0 0px 2px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border: none;
  outline: none;
  color: ${color.coolGrey};

  &::placeholder {
    color: ${color.coolGrey};
    font-size: 11px;
  }
`;
