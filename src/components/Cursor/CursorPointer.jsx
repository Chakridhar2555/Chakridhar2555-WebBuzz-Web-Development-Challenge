import React from "react";

const CursorPointer = (props) => {
  return (
    <div
      className={`z-[1000] bg-white fixed border rounded-full mix-blend-difference w-[42px] h-[42px] pointer-events-none`}
      style={{
        left: `${props.x - 21}px`, // Adjust to center the 42px circle
        top: `${props.y - 21}px`,  // Adjust to center the 42px circle
      }}
    ></div>
  );
};

export default CursorPointer;
