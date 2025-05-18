<!-- <template>
  <ul>
    <li v-for="(user, index) in users" :key="user.id">
      <b>이름:</b>
      {{ user.userName }}
      <div>{{ user.email }}</div>
    </li>
  </ul>
</template>

<script setup>
const users = [
  { id: 1, userName: "지훈", email: "a@a.com" },
  { id: 2, userName: "마리", email: "b@b.com" },
  { id: 3, userName: "민혁", email: "c@c.com" },
];
</script> -->

<!-- 
<template>
  <input v-model="inputText" @keydown.enter="addToDo" />
  <button @click="addToDo">추가</button>
  <ul>
    <li
      v-for="user in users"
      :key="user.id"
      @dblclick="() => removeToDo(user.id)"
    >
      {{ user.toDo }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const users = ref([
  { id: 1, toDo: "HTML 공부" },
  { id: 2, toDo: "CSS 공부" },
]);

const inputText = ref("");
const nextId = ref(3);

const addToDo = () => {
  if (!inputText.value.trim()) return;

  users.value.push({ id: nextId.value++, toDo: inputText.value });
  inputText.value = "";
};

const removeToDo = (id) => {
  users.value = users.value.filter((user) => user.id !== id);
};
</script> -->

<!-- 로컬 스토리지 사용 -->
<template>
  <input v-model="inputText" @keydown.enter="addToDo" />
  <button @click="addToDo">추가</button>
  <ul>
    <li
      v-for="user in users"
      :key="user.id"
      @dblclick="() => removeToDo(user.id)"
    >
      {{ user.toDo }}
    </li>
  </ul>
</template>

<script setup>
import { ref, watch } from "vue";
const stored = window.localStorage.getItem("users");
const users = ref(
  stored
    ? JSON.parse(stored)
    : [
        { id: 1, toDo: "HTML 공부" },
        { id: 2, toDo: "CSS 공부" },
      ]
);

const inputText = ref("");
const nextId = ref(3);

const addToDo = () => {
  if (!inputText.value.trim()) return;

  users.value.push({ id: nextId.value++, toDo: inputText.value });
  inputText.value = "";
};

const removeToDo = (id) => {
  users.value = users.value.filter((user) => user.id !== id);
};

watch(
  users,
  (newVal) => {
    window.localStorage.setItem("users", JSON.stringify(newVal));
  },
  { deep: true } // 배열이나 객체 내부의 변화까지 감지
);
</script>
