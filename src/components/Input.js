import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Styled
import { StyledInput } from "./styled/StyledInput";
import { addMessage } from "../actions";

const Input = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const { id } = useParams();

  const submit = ({ keyCode }) => {
    if (keyCode === 13 && value) {
      const message = {
        id: Date.now(),
        name: "구찬성",
        content: value,
        type: "text"
      };
      dispatch(addMessage(id, message));
      setValue("");
    }
  };

  const handleChange = useCallback(({ target }) => {
    setValue(target.value);
  });

  return (
    <StyledInput
      onKeyDown={submit}
      onChange={handleChange}
      value={value}
      placeholder="메세지를 입력하세요.."
    ></StyledInput>
  );
};

export default Input;
