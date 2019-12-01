import React, { useEffect, useState, useRef } from "react";

// Styled
import { StyledUploadImage } from "./styled/StyledImage";

// let percentage = 0;

const UploadImage = props => {
  let timer = null;

  const [process, setProcess] = useState(0);
  const [load, setLoad] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    let percentage = 0;
    timer = setInterval(() => {
      if (percentage < 100) {
        percentage = percentage + 20;
        setProcess(percentage);
      } else {
        setLoad(true);
        clearInterval(timer);
        percentage = 0;
      }
    }, 222);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <StyledUploadImage
        ref={imageRef}
        {...props}
        loaded={load}
        process={process}
      />
    </>
  );
};

export default UploadImage;
