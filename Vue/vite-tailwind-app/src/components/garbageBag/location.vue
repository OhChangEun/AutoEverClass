<template>
  <div class="p-6 max-w-md mx-auto">
    <h2 class="text-2xl font-semibold mb-4">현재 위치</h2>

    <div class="space-y-2">
      <!-- 위도/경도 -->
      <p v-if="latitude !== null && longitude !== null" class="text-lg">
        🌍 위도: {{ latitude }}<br />
        🌍 경도: {{ longitude }}
      </p>
      <p v-else class="text-gray-500">📡 위치 정보를 불러오는 중...</p>

      <p v-if="city && district" class="text-lg">
        시: {{ city }}<br />
        구: {{ district }}
      </p>
      <p v-else-if="latitude !== null" class="text-gray-500">
        🔄 주소 정보를 불러오는 중...
      </p>
    </div>

    <!-- 다시 갱신 버튼 -->
    <button
      class="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="getLocation"
      :disabled="loading"
    >
      {{ loading ? "로딩 중..." : "위치 재갱신" }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const latitude = ref(null);
const longitude = ref(null);
const city = ref(""); // 시
const district = ref(""); // 구
const loading = ref(false);

// 위치 가져오기
const getLocation = () => {
  if (!navigator.geolocation) {
    console.error("이 브라우저는 Geolocation을 지원하지 않습니다.");
    return;
  }

  loading.value = true;
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      latitude.value = pos.coords.latitude;
      longitude.value = pos.coords.longitude;

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude.value}&lon=${longitude.value}&format=json`
        );
        const data = await res.json();

        city.value = data.address.city || data.address.county || "";
        district.value = data.address.borough || data.address.suburb || "";
      } catch (err) {
        console.error("역지오코딩 에러", err);
      } finally {
        loading.value = false;
      }
    },
    (err) => {
      console.error("위치 정보를 가져오는 데 실패했습니다.", err);
      loading.value = false;
    }
  );
};
</script>
