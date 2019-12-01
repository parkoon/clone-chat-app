import React, { useEffect, useState } from "react";

// Styled
import { StyledHeader } from "./styled/StyledHeader";

// Components
import Image from "./Image";

// Custom Hooks
import useLoaded from "../hooks/useLoaded";

// Dummy data
import { images } from "../constants/dummy";

const renderIcons = icons =>
  icons.map((icon, index) => <span key={index}>{icon}</span>);

const Header = props => {
  const loaded = useLoaded();

  return (
    <StyledHeader
      loaded={loaded}
      transition={props.transition}
      className={props.expand ? "header--expand" : ""}
    >
      <div className="header__left">
        {props.left && renderIcons(props.left)}
      </div>

      <h2>{props.title}</h2>

      <div className="header__right">
        {props.right && renderIcons(props.right)}
      </div>

      {props.expand && (
        <div className="header__images">
          {images.map(img => (
            <Image
              src={img.src}
              key={img.id}
              alt="images in folder"
              // onClick={() => }
            />
          ))}
        </div>
      )}
    </StyledHeader>
  );
};

export default Header;
