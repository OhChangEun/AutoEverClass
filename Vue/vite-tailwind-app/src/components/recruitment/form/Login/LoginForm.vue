<template>
  <div class="flex flex-col gap-8">
    <div
      class="font-semibold text-2xl leading-[1.6em] text-[rgba(0, 0, 0, 0.85)]"
    >
      이메일 로그인
    </div>
    <div class="flex flex-col gap-2">
      <BaseInput
        v-model="emailInput"
        labelText="이메일 주소"
        type="text"
        className="email"
        name="email"
        :maxlength="20"
        :hasError="hasEmailError"
        errorText="이메일 주소를 알맞게 입력해주세요."
        :isPassword="false"
      />
    </div>
    <div class="flex flex-col gap-2">
      <BaseInput
        v-model="pwdInput"
        labelText="비밀번호"
        type="password"
        className="password"
        name="password"
        :maxlength="30"
        :hasError="hasPwdError"
        errorText="비밀번호를 알맞게 입력해 주세요."
        :isPassword="true"
      />
    </div>
    <div class="flex flex-col gap-3">
      <BaseButton
        type="submit"
        @click="handleLogin"
        customClass="bg-main-logo text-white"
        label="로그인"
      />
      <BaseButton
        type="button"
        customClass="bg-white text-[rgba(0, 0, 0, 0.85)] "
        additionalClass="border border-gray-300 hover:bg-gray-200"
        label="계정 만들기"
        to="/signup"
      />
    </div>
    <!-- 회원가입 문제 -->
    <BaseProblemLabel label="로그인에 문제가 있나요?" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useModalStore } from "@/stores/modal";

import axios from "axios";
import BaseInput from "../../base/BaseInput.vue";
import BaseButton from "../../base/BaseButton.vue";
import BaseProblemLabel from "../../base/BaseProblemLabel.vue";
import { useAuthApi } from "../../../../api/auth";
const { login } = useAuthApi();

const router = useRouter();
const authStore = useAuthStore();
const modal = useModalStore();

const emailInput = ref("");
const pwdInput = ref("");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const hasEmailError = computed(() => {
  const value = emailInput.value.trim();
  if (!value) return false; // 빈 값이면 에러 아님
  return !emailRegex.test(value);
});

const hasPwdError = computed(() => {
  const value = pwdInput.value.trim();
  if (!value) return false;
  return value.length < 8;
});

const handleLogin = async () => {
  try {
    const email = emailInput.value.trim();
    const pwd = pwdInput.value.trim();

    if (hasEmailError.value || hasPwdError.value || !email || !pwd) {
      modal.open({
        title: "",
        message: "이메일과 비밀번호를 알맞게 입력하세요.",
      });
      return;
    }

    const payload = {
      email,
      pwd,
    };

    const res = await login(payload.email, payload.pwd);
    if (res.data) {
      router.push("/");
    }

    const res = await axios.post(
      "http://222.117.237.119:8111/auth/login",
      payload
    );

    if (res.status === 200 && res.data === true) {
      // 사용자 리스트
      const userListRes = await axios.get(
        "http://222.117.237.119:8111/users/list"
      );
      // 이메일에 맞는 사용자
      const user = userListRes.data.find((u) => u.email === email);
      // 전역 상태 적용
      if (user) {
        authStore.login({
          email: user.email,
          name: user.name,
        });
      }
      modal.open({
        title: "로그인 성공",
        message: `${user.name}님 로그인에 성공하셨습니다.`,
      });
      router.push("/");
    } else {
      modal.open({
        title: "로그인 실패",
        message: "이메일 또는 비밀번호를 확인하세요.",
      });
    }
    // const user = JSON.parse(localStorage.getItem(email));

    // if (user && user.pwd === pwd) {
    //   alert("로그인 완료!");
    //   // 로그인 완료 시에 메인 페이지로 이동
    // } else {
    //   alert("로그인 실패ㅠ");
    // }
  } catch (err) {
    modal.open({
      title: "로그인 실패",
      message: "서버 통신 실패 : 에러 코드를 확인 하세요",
    });
  }
};
</script>
