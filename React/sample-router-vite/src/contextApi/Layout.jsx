import { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../store/UserStore";

const Container = styled.div`
  min-width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
`;
const Header = styled.header`
  display: flex;
  justify-content: right;
  width: 100%;
  min-height: 80px;
  background-color: var(--main-logo-color);
  padding: 16px;
  font-size: 24px;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  font-size: 14px;
  color: white;
`;
const Main = styled.main`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Footer = styled.footer`
  width: 100%;
  min-height: 100px;
  background-color: var(--footer-color);
  padding: 16px;
  font-size: 24px;
`;

const Layout = () => {
  const context = useContext(UserContext);
  const { userId, userName } = context;

  const location = useLocation();
  const showHeader = location.pathname === "/";

  // 숨기고 싶은 경로 설정

  return (
    <Container>
      <Header>
        {showHeader && (
          <UserInfo>
            <div>{userName && `${userName}`}</div>
            <div>{userId && `${userId}`}</div>
          </UserInfo>
        )}
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer></Footer>
    </Container>
  );
};

export default Layout;
