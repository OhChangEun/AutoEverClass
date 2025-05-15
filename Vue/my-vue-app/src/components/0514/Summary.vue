<template>
  <!-- *** v-model *** -->
  <!-- 입력 양방향 바인딩. Vue의 꽃 -->
  <!-- HTML 입력값이 바뀌면 → 자바스크립트 값(ref 등)이 자동으로 바뀜
       자바스크립트 값이 바뀌면 → HTML에도 자동으로 반영-->
  <h4>현재 숫자: {{ count }}</h4>
  <button @click="increase">+1</button>

  <h4>{{ user.name }}</h4>
  <h4>{{ user.age }}</h4>
  <button @click="increaseAge">+1</button>

  <h4>{{ fullName }}</h4>

  <input v-model="name" placeholder="이름 입력" />
</template>

<script setup>
// *** import 설정 ***
import { ref } from "vue";
import { reactive } from "vue";
import { computed } from "vue";
import { watch } from "vue";

// *** ref() ***
// 변수를 '반응형'으로 만들고 싶을 때 사용하는 함수
const count = ref(0);

// *** reactive() ***
// 객체나 배열을 '반응형'으로 만들고 싶을 때 사용하는 함수
function increase() {
  count.value++;
}

// reactive
const user = reactive({
  name: "oh",
  age: 13,
});

function increaseAge() {
  user.age++;
}

// *** computed() ***
// 계산된 값을 자동으로 업데이트해주는 함수
const firstName = ref("홍");
const lastName = ref("길동");

// 자동 계산기와 비슷
// 한번 계산을 하고, 내부에 값이 바뀌지 않는다면 계산 결과를 자동으로 캐싱한다
// 내부에 값들이 바뀐다면 그 계산을 업데이트 하는 방식
// 의존하는 값(ref/reactive)이 변하지 않으면 다시 계산하지 않아서 성능에 도움이 된다!

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`;
});

// *** watch(source, callback) ***
// ref나 reactive 값이 변할 때, 어떤 코드를 실행하고 싶을 때 사용하는 함수
// source: 감지할 변수나 객체, callback 함수 실행
// 새로운 값과 예전 값을 넘겨받음 >> 매개변수 2개
// 새로운 값만 필요함            >> 매개변수 1개
// 변화 감지를 하기 때문에 디버깅 용으로도 사용
const name = ref("");
watch(name, (newVal, oldVal) => {
  console.log(`${oldVal} -> ${newVal}`);
});
</script>
