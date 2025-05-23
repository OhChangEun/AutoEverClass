import { useState, useEffect } from "react";
import "../App.css";

// 배열로 구성된 객체를 전달받아 map으로 화면에 표시하고, 표시된 화면 영역에 이벤트 연결하기
const TableMap = () => {
  const fetchData = [
    { id: 100, name: "카즈하", age: 22 },
    { id: 200, name: "유나", age: 22 },
    { id: 300, name: "안유진", age: 22 },
    { id: 400, name: "장원영", age: 22 },
    { id: 500, name: "가을", age: 22 },
  ];

  const [members, setMembers] = useState([]);

  // 화면이 한번 그려지고 나타남
  useEffect(() => {
    // 비동기 통신 호출 후 await로 대기하는 곳
    console.log("마운트 이후 useEffect() 호출~~~");
    setMembers(fetchData);
  }, []); // 의존성 배열, 비어 있으면 마운트 시점에 호출 됨.

  const tableClickEvent = (name) => {
    console.log(name);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>나이</th>
        </tr>
      </thead>
      <tbody>
        {members && // 화면을 처음 렌더링 시에는 useEffect 전이므로 데이터가 없을 수도 있음
          members.map((member) => {
            return (
              <tr key={member.id} onClick={() => tableClickEvent(member.name)}>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.age}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default TableMap;
