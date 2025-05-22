<template>
  <form @submit.prevent="onSubmit">
    <div class="flex items-center">
      <input
        v-model="value"
        class="w-full h-10 rounded-2xl border border-gray-500 mx-3 px-3 focus:outline-main-logo"
      />
      <BaseButton
        type="submit"
        width="w-20"
        height="h-11"
        customClass="bg-main-logo text-white"
        additionalClass="rounded-3xl hover:brightness-75"
        label="추가"
      />
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import BaseButton from "../recruitment/base/BaseButton.vue";
const emit = defineEmits(["insert"]);
const value = ref("");

const onSubmit = () => {
  emit("insert", value.value);
  value.value = "";
};
</script>
