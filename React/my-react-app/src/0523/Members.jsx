const Members = ({ name = "없음", age = 0, addr = "부산", isAdult }) => {
  // 구조 분해 또는 비구조화 할당
  // const { name, age, addr, isAdult } = props;

  return (
    <>
      <h3>이름: {name}</h3>
      <h3>나이: {age}</h3>
      <h3>주소: {addr}</h3>
      <h3>리더여부: {isAdult ? "성인" : "미성년자"}</h3>
    </>
  );
};

export default Members;
