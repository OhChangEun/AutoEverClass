<template>
  <div class="w-full h-full flex justify-center items-center">
    <!-- 로딩창 컴포넌트 출력 -->
    <Loading v-if="loading" />
    <GarbageBagMap
      :selectedRegion="selectedRegion"
      @region-click="handleRegion"
    />
    <div
      class="flex flex-col w-[650px] h-[600px] items-center gap-6 border border-gray-300 p-5 rounded-lg"
    >
      <h1 class="mt-5 text-lg">지역별 종량제봉투 가격</h1>

      <div class="flex items-center gap-4">
        <h1 class="text-3xl font-semibold text-center">{{ selectedRegion }}</h1>
        <select
          v-model="selectedDistrict"
          class="border border-gray-400 rounded px-3 py-1 text-base cursor-pointer"
        >
          <option value="">전체</option>
          <option
            v-for="(district, idx) in uniqueDistricts"
            :key="idx"
            :value="district"
          >
            {{ district }}
          </option>
        </select>
      </div>
      <div
        class="flex flex-col gap-2 border border-1 border-gray-400 rounded-md overflow-y-auto overflow-x-hidden w-full p-3"
      >
        <div v-for="(record, index) in filteredRecords" :key="index">
          <GarbageBagItem :bag="record" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import axios from "axios";
import GarbageBagMap from "./GarbageBagMap.vue";
import GarbageBagItem from "./GarbageBagItem.vue";
import Loading from "./Loading.vue";
import { regionMap } from "./data";

const records = ref([]); // API로부터 받아온 리스트
const selectedRegion = ref(); // 선택된 도시

const handleRegion = (region) => {
  selectedRegion.value = region;
};

// 현재 위치
const latitude = ref(null);
const longitude = ref(null);

const loading = ref(false);

// 위치 가져오기
const getLocation = async () => {
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
        console.log(data);

        const tmpCity = data.address.city || data.address.county || "";
        selectedRegion.value = regionMap[tmpCity]; // 초기 위치 기반 시 입력
      } catch (err) {
        console.error("위치 정보 에러", err);
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

onMounted(async () => {
  await getLocation(); // 위치를 가져오고
  await fetchData(); // 위치 기반 시/구로 API 요청
});

// 선택된 지역구
const selectedDistrict = ref("");

// 중복 없는 지역구 리스트 계산
const uniqueDistricts = computed(() => {
  const set = new Set(records.value.map((r) => r.signguNm).filter(Boolean));
  return Array.from(set);
});

// 선택된 구/군에 따라 필터링 결과
const filteredRecords = computed(() => {
  if (!selectedDistrict.value) return records.value;
  return records.value.filter((r) => r.signguNm === selectedDistrict.value);
});

const fetchData = async () => {
  try {
    const res = await axios.get(
      "http://api.data.go.kr/openapi/tn_pubr_public_weighted_envlp_api",
      {
        params: {
          serviceKey:
            "cLK5xQMzZ8OYnaMWLt4EBOCKnOBr3V28yXY2T2XsIoUYMmh4zNaIMllmu6vV64MBjelaSqwDKewRCsiAnuUiyQ==",
          pageNo: 1,
          numOfRows: 100,
          type: "json",
          CTPRVN_NM: selectedRegion.value,
        },
      }
    );

    const header = res.data.response.header;
    if (header.resultCode === "00") {
      records.value = res.data.response.body.items || [];
      // console.log(records);
    } else {
      throw new Error(`API 오류: ${header.resultMsg}`);
    }
  } catch (err) {
    console.error(err);
  }
};

watch(selectedRegion, async () => {
  selectedDistrict.value = "";
  await fetchData();
});
</script>
