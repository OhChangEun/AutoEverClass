import React, { useRef } from "react";

const CreateRef = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.disabled = false; // current 필수! 멤버 변수라 생각
    inputRef.current.focus();
  };

  return (
    <>
      <input disabled ref={inputRef} ype="text" />
      <button onClick={handleFocus}>활성화</button>
    </>
  );
};

export default CreateRef;
