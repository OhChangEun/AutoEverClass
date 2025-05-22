<template>
  <div
    v-if="modal.isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div
      class="flex flex-col items-center gap-5 bg-white p-6 rounded shadow-md w-full max-w-sm text-center"
    >
      <div>
        <h2 class="text-lg font-bold mb-2">{{ modal.title }}</h2>
        <p>{{ modal.message }}</p>
      </div>
      <div>
        <BaseButton
          @click="modal.confirm"
          type="button"
          width="w-20"
          customClass="bg-main-logo text-white text-sm hover:brightness-75"
          label="확인"
        />
        <BaseButton
          v-if="modal.hasCancel"
          @click="modal.close"
          type="button"
          width="w-20"
          customClass="bg-white text-main-logo border border-main-logo text-sm hover:brightness-90 ml-4"
          label="취소"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useModalStore } from "@/stores/modal";
import BaseButton from "./BaseButton.vue";

const modal = useModalStore();
</script>
