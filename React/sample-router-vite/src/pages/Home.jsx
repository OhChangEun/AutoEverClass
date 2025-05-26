import { Link } from "react-router-dom";

const Home = () => {
  // const [role, setRole] = useState("backend");
  return (
    <div>
      <h1>여기가 홈 입니다.</h1>
      <p>가장 먼저 보여지는 페이지 입니다.</p>
      <Link to="/about">소개</Link>
      {/* <ul>
        <li>
          <Link to="profiles/frontend">프론트엔드</Link>
        </li>
        <li>
          <Link to={`profiles/${role}`}>내 직업 프로필 보기</Link>
        </li> 
      </ul>*/}
    </div>
  );
};
export default Home;
