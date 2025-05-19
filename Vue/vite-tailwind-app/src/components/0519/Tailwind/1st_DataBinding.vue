<template>
  <div class="flex flex-col items-center justify-center min-h-screen gap-5">
    <h2>ref 감지: {{ refName }}</h2>
    <h2>{{ name }}</h2>
    <input
      :value="refName"
      @input="updateName"
      class="border border-gray-500 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:rign-blue-400"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
const refName = ref("장원영");
let name = "안유진";

const updateName = (e) => {
  refName.value = e.target.value;
};
</script>
