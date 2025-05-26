import "./App.css";
import Members from "./0523/Members";
import Say from "./0523/Say";
import InputEvent from "./0523/InputEvent";
import Table from "./0523/Table";
import NameCard from "./0523/UseStatePractice";
import Info from "./0523/UseEffectPractice";
import Clock from "./0523/Clock";
import Counter from "./0523/UseReducerPractice";
import Average from "./0523/UseMemoPratice";
import RefCnt from "./0526/1st_UseRefPractice";
import CreateRef from "./0526/2nd_UseRefPractice";
import StyledCom from "./0526/3rd_StyledComponents";

function App() {
  // const name = "장원영";
  return (
    <>
      {/* <h1>리액트를 공부합니다.</h1>
      <h2>오늘은 금요일 입니다.</h2> */}
      {/* 조건부 렌더링 2가지 방식식*/}
      {/* {name === "장원영" ? <h3>환영합니다. {name}님.</h3> : <h3>고객 아님.</h3>} */}
      {/* {name === "리액트" && <h3>환영합니다. 리액트님.</h3>} */}
      {/* 위 보단 이걸 더 많이 씀 */}
      <br />
      {/* <Members age={23} addr="대전" isAdult={true} />
      <Members name="장원영" addr="대전" isAdult={true} />
      <Members name="이서" age={23} isAdult={false} />
      <Say /> */}
      {/* <InputEvent /> */}
      {/* <Table /> */}
      {/* <NameCard /> */}
      {/* <Info /> */}
      {/* <Clock /> */}
      {/* <Counter /> */}
      {/* <Average /> */}
      {/* 0526 */}
      {/* <RefCnt /> */}
      {/* <CreateRef /> */}
      <StyledCom />
    </>
  );
}

export default App;
