<template>
  <div>
    <h1>{{ selectedProvince }} 쓰레기봉투 종류 및 가격</h1>

    <!-- 1. 도 선택 드롭다운 -->
    <select v-model="selectedProvince">
      <option v-for="prov in provinces" :key="prov" :value="prov">
        {{ prov }}
      </option>
    </select>

    <!-- 2. 로딩 상태 -->
    <p v-if="loading">데이터를 불러오는 중...</p>
    <p v-if="error">{{ error }}</p>

    <!-- 3. 결과 테이블 -->
    <table v-if="!loading && !error">
      <thead>
        <tr>
          <th>시군구</th>
          <th>봉투종류</th>
          <th>용도(Prpos)</th>
          <th>대상(Trget)</th>
          <th>5L</th>
          <th>10L</th>
          <th>20L</th>
          <th>50L</th>
          <!-- 필요에 따라 더 추가 -->
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items"
          :key="
            item.insttCode +
            item.signguNm +
            item.weightedEnvlpType +
            item.weightedEnvlpPrpos
          "
        >
          <td>{{ item.signguNm }}</td>
          <td>{{ item.weightedEnvlpType }}</td>
          <td>{{ item.weightedEnvlpPrpos }}</td>
          <td>{{ item.weightedEnvlpTrget }}</td>
          <td>{{ item.price5 }}원</td>
          <td>{{ item.price10 }}원</td>
          <td>{{ item.price20 }}원</td>
          <td>{{ item.price50 }}원</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";

// 1. 사용자에게 보여줄 도 목록 (원하는 만큼 추가)
const provinces = [
  "서울특별시",
  "부산광역시",
  "대구광역시",
  "인천광역시",
  "광주광역시",
  "대전광역시",
  "울산광역시",
  "세종특별자치시",
  "경기도",
  "강원도",
  "충청북도",
  "충청남도",
  "전라북도",
  "전라남도",
  "경상북도",
  "경상남도",
  "제주특별자치도",
];

const selectedProvince = ref("충청북도"); // 초기값
const items = ref([]); // API로부터 받아온 리스트
const loading = ref(false); // 로딩 상태 표시
const error = ref(null); // 에러 메시지

// 2. 데이터 호출 함수
const fetchData = async () => {
  loading.value = true;
  error.value = null;
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
          CTPRVN_NM: selectedProvince.value,
        },
      }
    );

    const header = res.data.response.header;
    if (header.resultCode === "00") {
      items.value = res.data.response.body.items || [];
    } else {
      throw new Error(`API 오류: ${header.resultMsg}`);
    }
  } catch (err) {
    console.error(err);
    error.value = "데이터를 불러오는 중에 오류가 발생했습니다.";
  } finally {
    loading.value = false;
  }
};

// 3. 컴포넌트가 마운트될 때와 selectedProvince가 바뀔 때마다 호출
onMounted(fetchData);
watch(selectedProvince, fetchData);
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}
th,
td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: center;
}
select {
  margin: 1rem 0;
}
</style>
