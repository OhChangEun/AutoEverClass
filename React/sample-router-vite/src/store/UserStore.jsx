import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

const UserStore = (props) => {
  const [userId, setUserId] = useState(
    () => localStorage.getItem("userId") || ""
  );
  const [userPassword, setUserPassword] = useState(
    () => localStorage.getItem("userPassword") || ""
  );
  const [userName, setUserName] = useState(
    () => localStorage.getItem("userName") || ""
  );

  useEffect(() => {
    localStorage.setItem("userId", userId);
  }, [userId]);

  useEffect(() => {
    localStorage.setItem("userPassword", userPassword);
  }, [userPassword]);

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        userPassword,
        setUserPassword,
        userName,
        setUserName,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStore;
