import { useState } from "react";

const NameCardPrn = ({ nameCard }) => {
  return (
    <>
      <h3>명함 정보 출력</h3>
      <p>이름 : {nameCard.name}</p>
      <p>직책 : {nameCard.position}</p>
      <p>회사 : {nameCard.company}</p>
      <p>주소 : {nameCard.addr}</p>
      <p>메일 : {nameCard.email}</p>
      <p>전화 : {nameCard.phone}</p>
    </>
  );
};

// 이름, 직책. 회사명, 회사주소, 이메일, 전화번호를 입력받아 제출 버튼을 누르면 한번에 출력
const NameCard = () => {
  const [nameCard, setNameCard] = useState({
    name: "",
    position: "",
    company: "",
    email: "",
    phone: "",
  });

  const [hasSubmit, setHasSubmit] = useState(false);
  const onChange = (key, value) => {
    // nameCard[key] = value; 이렇게 하면 안돼!!!
    setNameCard({ ...nameCard, [key]: value });
  };
  const onSubmit = () => {
    setHasSubmit(true);
  };
  return (
    <div>
      <h1>회원 정보 입력</h1>
      <input
        type="text"
        placeholder="이름 입력"
        value={nameCard.name}
        onChange={(e) => onChange("name", e.target.value)}
      />
      <input
        type="text"
        placeholder="직책 입력"
        value={nameCard.position}
        onChange={(e) => onChange("position", e.target.value)}
      />
      <input
        type="text"
        placeholder="회사 입력"
        value={nameCard.company}
        onChange={(e) => onChange("company", e.target.value)}
      />
      <input
        type="text"
        placeholder="메일 입력"
        value={nameCard.email}
        onChange={(e) => onChange("email", e.target.value)}
      />
      <input
        type="text"
        placeholder="전화번호 입력"
        value={nameCard.phone}
        onChange={(e) => onChange("phone", e.target.value)}
      />
      <button onClick={onSubmit}>제출</button>
      {hasSubmit && <NameCardPrn nameCard={nameCard} />}
    </div>
  );
};

export default NameCard;
