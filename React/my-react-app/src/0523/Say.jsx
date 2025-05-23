import { useState } from "react";

const Say = () => {
  // [값을 읽는 변수, 값을 변경하는 함수(렌더링 발생)]
  const [message, setMessage] = useState("");
  const onCLickEnter = () => setMessage("안녕하세요!!");
  const onClickLeave = () => setMessage("안녕히 가세요!!");
  const [color, setColor] = useState("black");

  const setRed = () => setColor("red");
  const setGreen = () => setColor("green");
  const setBlue = () => setColor("blue");

  return (
    <>
      <div>
        <button onClick={onCLickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <h1 style={{ color: color }}>{message}</h1>
        {/* <h1 style={{ color }}>{message}</h1> */}
        {/* 속성과 이름이 같으면 그냥 color라고 써도 됨 */}

        <button style={{ color: "red" }} onClick={setRed}>
          빨간색
        </button>
        <button style={{ color: "green" }} onClick={setGreen}>
          초록색
        </button>
        <button style={{ color: "blue" }} onClick={setBlue}>
          파란색
        </button>
      </div>
    </>
  );
};

export default Say;
