import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Components
import Button from "./Button";

// Styled
import { StyledInput } from "./styled/StyledInput";
import { addMessage } from "../actions";

const Input = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const { id } = useParams();

  const submit = () => {
    if (value) {
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

  const handleClick = () => {
    submit();
  };

  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === 13) {
      submit();
    }
  };

  const handleChange = useCallback(({ target }) => {
    setValue(target.value);
  });

  return (
    <>
      <StyledInput
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={value}
        placeholder="메세지를 입력하세요.."
      ></StyledInput>
      <Button
        onClick={handleClick}
        icon={<i className="fas fa-paper-plane" />}
      />
    </>
  );
};

export default Input;
