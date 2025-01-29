import React from "react";

const ButtonWhite = ({ children, handleClick }) => {
  return (
    <button onClick={handleClick} className="btn-white">
      {children}
    </button>
  );
};

export default ButtonWhite;
