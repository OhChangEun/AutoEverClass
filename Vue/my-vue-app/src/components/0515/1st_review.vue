<template>
  <div class="form-container">
    <h2>사용자 정보 입력</h2>

    <div class="form-group">
      <label>이름</label>
      <input v-model="user.name" type="text" />
    </div>

    <div class="form-group">
      <label>나이</label>
      <input v-model.number="user.age" type="number" />
    </div>

    <p>
      👉 현재 상태: <strong>{{ isAdult ? "성인" : "미성년자" }}</strong>
    </p>

    <button @click="handleSubmit">제출</button>
  </div>
</template>

<script setup>
import { reactive, computed, watch, onMounted } from "vue";

const user = reactive({
  name: "",
  age: 0,
});

// 불필요ㅛ한 함수의 호출 방지, 리렌더링 시 함수 호출이 일어나지 않는 경우는 이전값 유지
const isAdult = computed(() => {
  return user.age > 19;
});

// 상태 변경이 일어나면, 리렌더링이 일어나고, 이후 동작을 정의
watch(
  () => user.age, // 객체의 속성 값을 바로 참조 하지 않고 ()=>를 통해 감싼다.
  (newVal, oldVal) => {
    console.log(`로그 출력 ${oldVal} -> ${newVal}`);
  }
);

// 화면이 처음 그려질 때 동작
onMounted(() => {
  alert("사용자의 이름과 나이를 입력하세요.");
});

const handleSubmit = () => {
  alert(`${user.name}님은 ${isAdult.value ? "성인" : "미성년자"}입니다.`);
};
</script>

<style scoped>
.form-container {
  width: 360px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-family: sans-serif;
}

h2 {
  font-size: 20px;
  margin-bottom: 16px;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
