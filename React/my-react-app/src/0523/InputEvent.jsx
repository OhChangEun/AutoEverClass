import { useState } from "react";

const InputEvent = () => {
  const [message, setMessage] = useState("안녕히 가세요.");
  const changeMsg = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        placeholder="아무거나 입력하세요"
        onChange={changeMsg}
        value={message}
      />
      <h2>입력 받은 메시지: {message} </h2>
    </div>
  );
};

export default InputEvent;
