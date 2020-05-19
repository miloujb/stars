import React from "react";

const StarNumber = (props) => {
  return (
    <div>
      <button
        className="number"
        onClick={() => console.log("Num", props.number)}
      >
        {props.number}
      </button>
    </div>
  );
};

export default StarNumber;
