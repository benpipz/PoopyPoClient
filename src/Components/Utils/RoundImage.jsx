import React from "react";

const RoundImage = ({ src }) => {
  return (
    <img src={src} alt="" class="rounded-full shadow-lg w-12 h-12 m-1 "></img>
  );
};

export default RoundImage;
