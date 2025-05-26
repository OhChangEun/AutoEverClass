import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
`;
const Header = styled.header`
  width: 100%;
  background-color: lightgray;
  padding: 16px;
  font-size: 24px;
`;
const Main = styled.main`
  flex: 1;
`;
const Footer = styled.footer`
  width: 100%;
  background-color: lightgray;
  padding: 16px;
  font-size: 24px;
`;

const Layout = () => {
  return (
    <>
      <Container>
        <Header>Header</Header>
        <Main>
          <Outlet />
        </Main>
        <Footer>여기는 풋터입니다.</Footer>
      </Container>
    </>
  );
};

export default Layout;
