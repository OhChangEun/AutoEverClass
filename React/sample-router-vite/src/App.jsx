import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
// BrowserRouter는 URL을 기반으로 라우팅을 처리해주는 컴포넌트.
// Routes는 Route들을 감싸서 페이지 전환을 정의하는 영역.
// Route는 하나의 경로에 어떤 컴포넌트를 보여줄지 정의.
import Layout from "./pages/Layout";
import NewsPage from "./pages/NewsPage";
import UserStore from "./store/UserStore";

function App() {
  return (
    <UserStore>
      <Router>
        <Routes>
          <Route path="/" element={<NewsPage />} />
          <Route path="/:category" element={<NewsPage />} />
          {/* <Route path="/:category" element={<NewsPage />} /> */}
          {/* <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles/:username" element={<Profile />} />
        </Route> */}
        </Routes>
      </Router>
    </UserStore>
  );
}

export default App;
