<template>
  <!-- 회원가입 -->
  <form @submit.prevent="handleSubmit">
    <div class="flex flex-col gap-12">
      <div class="flex flex-col gap-6">
        <!-- 이메일 -->
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
          <BaseButton
            type="button"
            width="w-[110px]"
            height="h-8"
            @click="validateEmail"
            :disabled="emailInput && hasEmailError"
            customClass="bg-main-logo text-white"
            additionalClass="text-sm whitespace-nowrap"
            label="이메일 중복 검사"
          />
        </div>

        <!-- 비밀번호 -->
        <div class="flex flex-col gap-2">
          <BaseInput
            v-model="pwdInput"
            labelText="비밀번호"
            type="password"
            className="password"
            name="password"
            :maxlength="30"
            :isPassword="true"
          />
          <ul class="flex list-none gap-2">
            <li class="requirement-item" :class="getPwdClass('upper')">
              <i :class="getPwdIcon('upper')"></i>
              {{ pwdValidation.upper.label }}
            </li>
            <li class="requirement-item" :class="getPwdClass('lower')">
              <i :class="getPwdIcon('lower')"></i>
              {{ pwdValidation.lower.label }}
            </li>
            <li class="requirement-item" :class="getPwdClass('number')">
              <i :class="getPwdIcon('number')"></i>
              {{ pwdValidation.number.label }}
            </li>
            <li class="requirement-item" :class="getPwdClass('specialChar')">
              <i :class="getPwdIcon('specialChar')"></i>
              {{ pwdValidation.specialChar.label }}
            </li>
            <li class="requirement-item" :class="getPwdClass('minLength')">
              <i :class="getPwdIcon('minLength')"></i>
              {{ pwdValidation.minLength.label }}
            </li>
          </ul>
        </div>

        <!-- 비밀번호 확인 -->
        <div class="flex flex-col gap-2">
          <BaseInput
            v-model="confirmPwdInput"
            labelText="비밀번호"
            type="password"
            className="confirm-password"
            name="confirm-password"
            :maxlength="30"
            :isPassword="true"
          />
          <ul class="flex list-none gap-2">
            <li class="requirement-item" :class="getConfirmPwdClass()">
              <i :class="getConfirmPwdIcon()"></i>
              비밀번호 일치
            </li>
          </ul>
        </div>

        <!-- 이름 -->
        <BaseInput
          v-model="nameInput"
          labelText="이름 (실명)"
          type="text"
          className="name"
          name="name"
          :maxlength="20"
          :hasError="hasNameError"
          errorText="이름을 알맞게 입력해 주세요."
          :isPassword="false"
        />

        <!-- 휴대폰 번호 -->
        <BaseInput
          v-model="phoneInput"
          labelText="사용 중인 휴대폰 번호"
          type="text"
          className="phone"
          name="phone"
          :maxlength="20"
          :hasError="hasPhoneError"
          errorText="휴대폰 번호를 알맞게 입력해 주세요."
          :isPassword="false"
        />
      </div>

      <!-- 약관 동의 -->
      <SignUpTerms />

      <div class="flex flex-col gap-4">
        <!-- 회원가입 제출 버튼 -->
        <BaseButton
          type="submit"
          :disabled="hasError"
          customClass="bg-main-logo text-white"
          label="생성 완료"
        />
        <!-- 회원가입 문제 -->
        <BaseProblemLabel label="계정 만들기에 문제가 있나요?" />
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import BaseInput from "../../base/BaseInput.vue";
import SignUpTerms from "./SignUpTerms.vue";
import BaseButton from "../../base/BaseButton.vue";
import BaseProblemLabel from "../../base/BaseProblemLabel.vue";

const router = useRouter();

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^01[016789]-?\d{4}-?\d{4}$/;
const pwdValidation = reactive({
  upper: { regex: /[A-Z]/, label: "영어 대문자" },
  lower: { regex: /[a-z]/, label: "영어 소문자" },
  number: { regex: /\d/, label: "숫자" },
  specialChar: { regex: /[^\w\s]/, label: "특수 문자" },
  minLength: { regex: /^.{8,}$/, label: "8자 이상" },
});

const emailInput = ref("");
const nameInput = ref("");
const phoneInput = ref("");
const pwdInput = ref("");
const confirmPwdInput = ref("");

const isEmailDuplicate = ref(true);

const hasEmailError = computed(() => {
  const value = emailInput.value.trim();
  if (!value) return false; // 빈 값이면 에러 아님
  return !emailRegex.test(value);
});

const hasNameError = computed(() => {
  const value = nameInput.value.trim();
  if (!value) return false; // 빈 값이면 에러 아님
  return value.length < 2;
});

const hasPhoneError = computed(() => {
  const value = phoneInput.value.trim();
  if (!value) return false; // 빈 값이면 에러 아님
  return !phoneRegex.test(value);
});

const getPwdClass = (key) => {
  if (pwdInput.value.length < 1) return; // 글자 수 체크
  return {
    "requirement-fulfilled": !hasPwdError(key), // 정상 박스(초록색)
    "requirement-error": hasPwdError(key), // 에러 박스(빨간색)
  };
};
const hasPwdError = (key) => {
  const value = pwdInput.value.trim();
  return !pwdValidation[key].regex.test(value);
};
const getPwdIcon = (key) => {
  return {
    "fas fa-check": !hasPwdError(key), // 체크 이모티콘
    "fas fa-times": hasPwdError(key), // x 이모티콘
    hidden: pwdInput.value.length < 1,
  };
};
const hasConfirmPwdError = () => {
  return pwdInput.value !== confirmPwdInput.value;
};
const getConfirmPwdClass = () => {
  if (confirmPwdInput.value.length < 1) return; // 글자 수 체크
  return {
    "requirement-fulfilled": !hasConfirmPwdError(),
    "requirement-error": hasConfirmPwdError(),
  };
};
const getConfirmPwdIcon = () => {
  return {
    "fas fa-check": !hasConfirmPwdError(), // 체크 이모티콘
    "fas fa-times": hasConfirmPwdError(), // x 이모티콘
    hidden: confirmPwdInput.value.length < 1,
  };
};
const hasPwdSectionError = computed(() => {
  return (
    Object.keys(pwdValidation).some((key) => hasPwdError(key)) ||
    hasConfirmPwdError()
  );
});

const hasError = computed(() => {
  const email = emailInput.value.trim();
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  // 빈값이 있으면 무조건 에러(true)
  if (!email || !name || !phone) return true;

  return (
    hasEmailError.value ||
    hasNameError.value ||
    hasPhoneError.value ||
    hasPwdSectionError.value
  );
});

// 회원가입
const handleSubmit = async () => {
  try {
    if (hasError.value) return;
    if (isEmailDuplicate.value) {
      alert("이메일 중복 검사를 해주세요.");
      return;
    }
    const payload = {
      email: emailInput.value.trim(),
      pwd: pwdInput.value.trim(),
      name: nameInput.value.trim(),
    };

    // alert("회원 가입 성공");
    // 여기서 라우팅을 통해 로그인 페이지로 이동하기.
    // localStorage.setItem(
    //   emailInput.value.trim(),
    //   JSON.stringify({
    //     name: nameInput.value.trim(),
    //     pwd: pwdInput.value.trim(),
    //   })
    // );
    const res = await axios.post(
      "http://222.117.237.119:8111/auth/signup",
      payload
    );
    if (res.data) {
      alert("회원 가입 성공");
      // 여기서 라우팅을 통해 로그인 페이지로 이동하기.
      // localStorage.setItem(
      //   emailInput.value.trim(),
      //   JSON.stringify({
      //     name: nameInput.value.trim(),
      //     pwd: pwdInput.value.trim(),
      //   })
      // );
      router.push("/login");
    } else {
      alert("회원 가입 실패");
    }
  } catch (err) {
    console.error(err);
    alert("가입 실패! 서버 오류 발생!");
  }
};

// 이메일 형식 및 중복 확인
const validateEmail = async () => {
  const res = await axios.get(
    `http://222.117.237.119:8111/auth/exists/${emailInput.value.trim()}`
  );
  if (res.data) {
    alert("사용 가능한 이메일입니다.");
    // console.log("사용 가능한 이메일입니다.");
    isEmailDuplicate.value = false;
  } else {
    alert("중복된 이메일입니다.");
    // console.log("중복된 이메일입니다.");
    isEmailDuplicate.value = true;
  }
};
</script>

<style scoped>
.requirement-item {
  font-weight: 400;
  font-size: 13.5px;
  background-color: rgba(0, 0, 0, 0.04);
  color: rgba(0, 0, 0, 0.5);
  padding: 3px 6px;
  border: 1px solid transparent;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.requirement-item i {
  width: 10px;
  height: 10px;
}
.requirement-item.requirement-error {
  border: 1px solid transparent;
  background-color: rgb(255, 241, 240);
  color: rgb(255, 77, 79);
}
.requirement-item.requirement-fulfilled {
  border: 1px solid transparent;
  background-color: rgb(237, 252, 240);
  color: rgb(50, 158, 49);
}
.hidden {
  display: none;
}
</style>
