import React from "react";

const Button = ({ onClick }) => {
  return <button onClick={() => onClick()}>FIRE</button>;
};

export default Button;
