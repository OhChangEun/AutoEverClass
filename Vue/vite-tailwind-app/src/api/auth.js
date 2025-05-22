import axios from "./axiosInstance";

export const useAuthApi = () => {
  const signup = async (email, pwd, name) => {
    return await axios.post("/auth/signup", { email, pwd, name });
  };
  const login = async (email, pwd) => {
    return await axios.post("/auth/login", { email, pwd });
  };
  const exists = async (email) => {
    return await axios.get(`/auth/exists/${email}`);
  };
  return { login, signup, exists };
};

export const getUserList = async () => {
  return await axios.get(`/users/list`);
};
// const handleSubmit = async () => {
//   try {
//     if (hasError.value) return;
//     if (isEmailDuplicate.value) {
//       alert("이메일 중복 검사를 해주세요.");
//       return;
//     }
//     const payload = {
//       email: emailInput.value.trim(),
//       pwd: pwdInput.value.trim(),
//       name: nameInput.value.trim(),
//     };
//   const res = await axios.post(
//     "http://222.117.237.119:8111/auth/signup",
//     payload
//   );
//   if (res.data) {
//     alert("회원 가입 성공");
//     router.push("/login");
//   } else {
//     alert("회원 가입 실패");
//   }
// } catch (err) {
//   console.error(err);
//   alert("가입 실패! 서버 오류 발생!");
// }
