import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // MyComponent가 Unmount가 되면 interval을 해제
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>Clock</p>
      <h2>현재 시간 : {time.toLocaleTimeString()}</h2>
    </>
  );
};

export default Clock;
