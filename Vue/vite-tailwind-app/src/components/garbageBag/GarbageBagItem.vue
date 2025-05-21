<template>
  <div
    @click="modalOpen"
    class="flex gap-4 items-center min-w-[460px] border-2 border-gray-500 p-4 rounded-lg text-base cursor-pointer hover:bg-gray-300"
  >
    <div
      class="flex flex-col gap-3 min-w-[160px] py-4 pb-3 rounded-lg text-base cursor-pointer hover:bg-gray-300"
    >
      <h2 class="text-xl font-bold text-gray-800 text-center">
        {{ bag.signguNm }}
      </h2>
      <div class="text-sm text-gray-500 text-center">
        <p class="text-gray-600">
          <span
            >종류: <strong>{{ bag.weightedEnvlpType }}</strong></span
          >
        </p>
        <p class="text-gray-600">
          <span
            >용도: <strong>{{ bag.weightedEnvlpPrpos }}</strong></span
          >
        </p>
        <p class="text-gray-600">
          <span
            >처리방식: <strong>{{ bag.weightedEnvlpMthd }}</strong>
          </span>
        </p>
        <p class="text-gray-600">
          <span
            >사용 대상: <strong>{{ bag.weightedEnvlpTrget }} </strong>
          </span>
        </p>
      </div>
    </div>
    <div>
      <!-- 가격 테이블 -->
      <table class="table-auto border-collapse w-full text-center mt-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-gray-700">
            <th class="border px-4 py-2">1ℓ</th>
            <th class="border px-4 py-2">2ℓ</th>
            <th class="border px-4 py-2">5ℓ</th>
            <th class="border px-4 py-2">10ℓ</th>
            <th class="border px-4 py-2">20ℓ</th>
            <th class="border px-4 py-2">50ℓ</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="bag.id">
            <td class="border px-4 py-2">{{ bag.price1 }}</td>
            <td class="border px-4 py-2">{{ bag.price2 }}</td>
            <td class="border px-4 py-2">{{ bag.price5 }}</td>
            <td class="border px-4 py-2">{{ bag.price10 }}</td>
            <td class="border px-4 py-2">{{ bag.price20 }}</td>
            <td class="border px-4 py-2">{{ bag.price50 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <GarbageModal :bag="bag" :modalOpen="isModalOpen" @close="modalClose" />
</template>

<script setup>
import GarbageModal from "./GarbageModal.vue";
import { ref } from "vue";

const isModalOpen = ref(false);
const props = defineProps({
  bag: Object,
});

const modalOpen = () => {
  isModalOpen.value = true;
};
const modalClose = () => {
  isModalOpen.value = false;
};
</script>
