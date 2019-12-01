import React, { useEffect, useState } from "react";

const timer = null;

const useLoaded = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 170);

    return () => {
      clearTimeout(timer);
    };
  });

  return load;
};

export default useLoaded;
