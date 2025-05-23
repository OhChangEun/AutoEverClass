import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log(name, nickname);
  }, [name]);
  // 1) 아무 것도 없는 경우
  // 2) []
  // 3) [name]

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };

  return (
    <>
      <input value={name} onChange={onChangeName} />
      <input value={nickname} onChange={onChangeNickName} />
      <p>이름: {name}</p>
      <p>닉네임: {nickname}</p>
    </>
  );
};

export default Info;
