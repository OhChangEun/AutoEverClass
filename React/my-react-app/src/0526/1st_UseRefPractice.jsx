import React, { useState, useRef, useEffect } from "react";

const RefCnt = () => {
  // useRef를 사용하여 카운터 변수를 생성합니다.
  const counterRef = useRef(0); // ✅ React 렌더링과 무관한 "지속적인 저장소"
  // let cntText = 0; // ❌ 매 렌더링마다 초기화되는 일반 변수
  const [flag, setFlag] = useState(false);

  // const incrementCounter = () => {
  //   counterRef.current += 1;
  //   cntText += 1;
  //   console.log(`Counter: ${counterRef.current}`);
  //   console.log(`Counter: ${cntText}`);
  // };

  const incrementCounter = () => {
    counterRef.current += 1;
    // cntText += 1;
    setFlag(!flag);
  };

  console.log(`Counter: ${counterRef.current}`);
  // console.log(`Counter: ${cntText}`);

  useEffect(() => {
    // 컴포넌트가 마운트 될 때 한번만 실행됩니다.
    const interval = setInterval(incrementCounter, 1000);

    // 컴포넌트가 언마운트될 때 인터벌을 정리합니다.
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Counter 연습</h2>
      <p>콘솔창에서 값 확인</p>
      <button onClick={incrementCounter}>카운터 증가</button>
    </div>
  );
};
export default RefCnt;
