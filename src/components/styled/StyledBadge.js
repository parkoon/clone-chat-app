import styled from "styled-components";
import color from "../../constants/color";

export const StyledBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  color: ${color.white};
  font-size: 6px;
  background: ${color.purple};
`;
