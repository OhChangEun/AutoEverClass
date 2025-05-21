<template>
  <!-- 모달 창 -->
  <div
    v-if="modalOpen"
    class="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center"
  >
    <div
      class="flex flex-col bg-white rounded-lg p-8 pt-10 w-[90%] max-w-xl shadow-lg relative"
    >
      <button
        @click="close"
        class="absolute top-3 right-5 text-gray-500 text-xl"
      >
        ✕
      </button>
      <h3 class="text-lg font-semibold text-gray-600 mb-5">상세 정보</h3>
      <div class="flex flex-col gap-3">
        <h1 class="text-xl font-bold text-gray-900">
          {{ bag.ctprvnNm + " " + bag.signguNm }}
        </h1>
        <div class="flex gap-4 text-sm text-gray-800">
          <span
            >종류: <strong>{{ bag.weightedEnvlpType }}</strong></span
          >
          <span
            >용도: <strong>{{ bag.weightedEnvlpPrpos }}</strong></span
          >
          <span
            >처리방식: <strong>{{ bag.weightedEnvlpMthd }}</strong>
          </span>
          <span
            >사용 대상: <strong>{{ bag.weightedEnvlpTrget }} </strong>
          </span>
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
            <tr :key="bag.id">
              <td class="border px-4 py-2">{{ bag.price1 }}</td>
              <td class="border px-4 py-2">{{ bag.price1Half }}</td>
              <td class="border px-4 py-2">{{ bag.price2 }}</td>
              <td class="border px-4 py-2">{{ bag.price2Half }}</td>
              <td class="border px-4 py-2">{{ bag.price3 }}</td>
              <td class="border px-4 py-2">{{ bag.price5 }}</td>
              <td class="border px-4 py-2">{{ bag.price10 }}</td>
              <td class="border px-4 py-2">{{ bag.price20 }}</td>
              <td class="border px-4 py-2">{{ bag.price30 }}</td>
              <td class="border px-4 py-2">{{ bag.price50 }}</td>
              <td class="border px-4 py-2">{{ bag.price60 }}</td>
              <td class="border px-4 py-2">{{ bag.price75 }}</td>
              <td class="border px-4 py-2">{{ bag.price100 }}</td>
              <td class="border px-4 py-2">{{ bag.price120 }}</td>
              <td class="border px-4 py-2">{{ bag.price125 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-gray-700 text-xs mt-10">
        <p><strong>관리 부서:</strong> {{ bag.chrgDeptNm }}</p>
        <p><strong>전화번호:</strong> {{ bag.phoneNumber }}</p>
        <p><strong>데이터 기준일:</strong> {{ bag.referenceDate }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  bag: Object,
  modalOpen: Boolean,
});
const emit = defineEmits(["close"]);
const close = () => {
  emit("close");
};
</script>
