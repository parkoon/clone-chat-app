import styled from "styled-components";

// Constants
import color from "../../constants/color";

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${color.purple};
  color: ${color.white};
  cursor: pointer;
`;
