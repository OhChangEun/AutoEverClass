<template>
  <!-- 입력 태그 -->
  <label class="form-field">
    <span class="field-label">{{ labelText }}</span>
    <div class="input-container" :class="{ 'input-error': hasError }">
      <input
        v-model="inputValue"
        @input="onInput"
        :type="inputType"
        :class="className"
        :name="name"
        :maxlength="maxlength"
      />
      <!-- 비밀번호 토글용 아이콘 -->
      <i
        v-if="isPassword"
        @click="togglePassword"
        class="password-icon"
        :class="iconClass"
      ></i>
    </div>
    <BaseError :text="errorText" :isVisible="hasError" />
  </label>
</template>

<script setup>
import BaseError from "../base/BaseError.vue";
import { ref, computed, watch } from "vue";

const props = defineProps({
  labelText: String,
  type: String,
  className: String,
  name: String,
  maxlength: Number,
  errorText: String,
  hasError: Boolean,
  modelValue: String,
  isPassword: Boolean,
});

const emit = defineEmits(["update:modelValue"]); // 부모에게 이벤트 생성

const inputValue = ref(props.modelValue);
watch(inputValue, (newValue) => {
  emit("update:modelValue", newValue);
});

const isVisible = ref(false);
// 입력 박스 타입 설정
const inputType = computed(() => {
  // 비밀번호가 아니라면 타입 그대로
  if (!props.isPassword) return props.type;
  // 비밀번호라면 타입 변경
  return isVisible.value ? "text" : "password";
});

// 버튼 클릭 시 토글링
const togglePassword = () => (isVisible.value = !isVisible.value);

const iconClass = computed(() => {
  return isVisible.value ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
});
</script>

<style scoped>
.form-field {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.form-field .field-label {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6em;
  color: rgba(0, 0, 0, 0.6);
}
.form-field .forgot-password,
.login-problem a {
  color: rgba(0, 0, 0, 0.45);
  font-weight: 400;
  font-size: 12px;
  text-underline-offset: 0.1em; /* 밑줄 거리 */
}
.input-container {
  width: 100%;
  height: 40px;
  padding: 0px 14px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 4px;
  cursor: text;
  transition: 100ms cubic-bezier(0.31, 0.27, 0.15, 0.99);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
}
.input-container:hover {
  border: 1px solid rgba(0, 0, 0, 0.45);
}
.input-container.input-error {
  border: 1px solid rgb(255, 77, 79);
}
/* 자식 요소 focus 시 */
.input-container:focus-within {
  border: 1px solid rgb(0, 44, 95);
  box-shadow: rgba(0, 44, 95, 0.3) 0px 0px 0px 2px;
}
.input-container input {
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 1.5em;
}
.input-container input:focus {
  outline: none;
}
.input-container .password-icon {
  width: 16px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
