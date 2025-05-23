import { useMemo, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중");
  if (numbers.length === 0) return 0;
  // 배열의 각 요소를 순회하며 callback 함수의 실행 값을 누적하여 하나의 결과값을 반환 합니다.
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [number, setNumber] = useState("");
  const [list, setList] = useState([]);

  // 사용자 입력값 number에 저장
  const onChange = (e) => {
    setNumber(e.target.value);
  };

  // 등록 버튼 클릭시
  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    // const num = parseInt(number);
    // if (isNaN(num)) return; // 입력이 숫자가 아니면 무시
    // setList([...list, num]);
    setList(nextList);
    setNumber("");
  };

  const avg = useMemo(() => getAverage(list), [list]);
  // useMemo(() => ... [의존성])

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        {/* <b>평균값: </b> {getAverage(list)} */}
        {/* 위 함수가 렌더링 시 계속 호출이 됨 */}
        {/* >> useMemo를 쓰자 */}
        <b>평균값: </b> {avg}
      </div>
    </div>
  );
};

export default Average;
