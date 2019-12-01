import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Styled
import { StyledImage } from "./styled/StyledImage";
import { addMessage } from "../actions";

const Image = props => {
  const [load, setLoad] = useState(false);
  const imageRef = useRef();

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    imageRef.current.addEventListener("load", () => {
      setLoad(true);
    });
  }, []);

  const upload = ({ target }) => {
    const image = {
      name: "구찬성",
      time: Date.now(),
      type: "image",
      src: props.src
    };
    dispatch(addMessage(id, image));
  };

  return (
    <StyledImage ref={imageRef} {...props} loaded={load} onClick={upload} />
  );
};

export default Image;
