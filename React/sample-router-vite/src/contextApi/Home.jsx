import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Home = () => {
  // const [role, setRole] = useState("backend");
  return (
    <Container>
      <h1>여기가 홈 입니다.</h1>
      <Link to="/login"> 로그인 </Link>
      <Link to="/signup"> 회원가입 </Link>
    </Container>
  );
};
export default Home;
