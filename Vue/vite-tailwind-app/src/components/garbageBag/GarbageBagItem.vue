<template>
  <div
    @click="modalOpen"
    class="flex justify-between items-center min-w-[460px] border-2 border-gray-500 p-4 rounded-lg text-base cursor-pointer hover:bg-gray-300"
  >
    <div
      class="flex flex-col gap-3 min-w-[160px] p-4 pb-3 rounded-lg text-base cursor-pointer hover:bg-gray-300"
    >
      <h2 class="text-xl font-bold text-gray-800 text-center">
        {{ bags.signguNm }}
      </h2>
      <div class="text-sm text-gray-500">
        <p class="text-gray-600">
          <strong>봉투 종류:</strong> {{ bags.weightedEnvlpType }}
        </p>
        <p class="text-gray-600">
          <strong>용도: </strong>{{ bags.weightedEnvlpTrget }}
        </p>
        <p class="text-gray-600">
          <strong>처리방식: </strong>{{ bags.weightedEnvlpMthd }}
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
          <tr :key="bags.id">
            <td class="border px-4 py-2">{{ bags.price1 }}</td>
            <td class="border px-4 py-2">{{ bags.price2 }}</td>
            <td class="border px-4 py-2">{{ bags.price5 }}</td>
            <td class="border px-4 py-2">{{ bags.price10 }}</td>
            <td class="border px-4 py-2">{{ bags.price20 }}</td>
            <td class="border px-4 py-2">{{ bags.price50 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- 모달 창 -->
  <div
    v-if="isModalOpen"
    class="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center"
  >
    <div
      class="flex flex-col bg-white rounded-lg p-8 pt-10 w-[90%] max-w-xl shadow-lg relative"
    >
      <button
        @click="modalClose"
        class="absolute top-3 right-5 text-gray-500 text-xl"
      >
        ✕
      </button>
      <h3 class="text-lg font-semibold text-gray-600 mb-5">상세 정보</h3>
      <div class="flex flex-col gap-3">
        <h1 class="text-xl font-bold text-gray-900">
          {{ bags.ctprvnNm + " " + bags.signguNm }}
        </h1>
        <div class="flex gap-4 text-sm text-gray-800">
          <span
            >봉투 종류: <strong>{{ bags.weightedEnvlpType }}</strong></span
          >
          <span
            >용도: <strong>{{ bags.weightedEnvlpTrget }}</strong></span
          >
          <span
            >처리방식: <strong>{{ bags.weightedEnvlpMthd }}</strong></span
          >
        </div>
      </div>
      <div
        class="text-base text-gray-700 space-y-2 max-h-[70vh] overflow-y-auto"
      >
        <!-- 가격 테이블 -->
        <table
          class="table-auto border-collapse w-full text-center mt-4 text-sm"
        >
          <thead>
            <tr class="bg-gray-100 text-gray-700">
              <th class="border px-4 py-2">1ℓ</th>
              <th class="border px-4 py-2">1.5ℓ</th>
              <th class="border px-4 py-2">2ℓ</th>
              <th class="border px-4 py-2">2.5ℓ</th>
              <th class="border px-4 py-2">3ℓ</th>
              <th class="border px-4 py-2">5ℓ</th>
              <th class="border px-4 py-2">10ℓ</th>
              <th class="border px-4 py-2">20ℓ</th>
              <th class="border px-4 py-2">30ℓ</th>
              <th class="border px-4 py-2">50ℓ</th>
              <th class="border px-4 py-2">60ℓ</th>
              <th class="border px-4 py-2">75ℓ</th>
              <th class="border px-4 py-2">100ℓ</th>
              <th class="border px-4 py-2">120ℓ</th>
              <th class="border px-4 py-2">125ℓ</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="bags.id">
              <td class="border px-4 py-2">{{ bags.price1 }}</td>
              <td class="border px-4 py-2">{{ bags.price1Half }}</td>
              <td class="border px-4 py-2">{{ bags.price2 }}</td>
              <td class="border px-4 py-2">{{ bags.price2Half }}</td>
              <td class="border px-4 py-2">{{ bags.price3 }}</td>
              <td class="border px-4 py-2">{{ bags.price5 }}</td>
              <td class="border px-4 py-2">{{ bags.price10 }}</td>
              <td class="border px-4 py-2">{{ bags.price20 }}</td>
              <td class="border px-4 py-2">{{ bags.price30 }}</td>
              <td class="border px-4 py-2">{{ bags.price50 }}</td>
              <td class="border px-4 py-2">{{ bags.price60 }}</td>
              <td class="border px-4 py-2">{{ bags.price75 }}</td>
              <td class="border px-4 py-2">{{ bags.price100 }}</td>
              <td class="border px-4 py-2">{{ bags.price120 }}</td>
              <td class="border px-4 py-2">{{ bags.price125 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-gray-700 text-xs mt-10">
        <p><strong>관리 부서:</strong> {{ bags.chrgDeptNm }}</p>
        <p><strong>전화번호:</strong> {{ bags.phoneNumber }}</p>
        <p><strong>데이터 기준일:</strong> {{ bags.referenceDate }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isModalOpen = ref(false);
const props = defineProps({
  bags: Object,
});

const modalOpen = () => {
  isModalOpen.value = true;
};
const modalClose = () => {
  isModalOpen.value = false;
};
</script>
