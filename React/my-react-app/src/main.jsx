import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  // 개발 모드용 이중 렌더링을 통해 부작용을 확인하기 위해
  // 마운트 > 언마운트 > 마운트 한번 더 실행
  // React의 잠재적인 버그나 잘못된 코드를 미리 잡아주는 기능
  <App />
);
