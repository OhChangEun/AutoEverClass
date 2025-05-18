<template>
  <div class="member-container">
    <div class="image">이미지</div>
    <div class="member">
      <div>{{ memberItem.email }}</div>
      <div>{{ memberItem.name }}</div>
      <div>{{ formatDate(memberItem.regDate) }}</div>
    </div>
  </div>
</template>

<script setup>
// yarn add dayjs
import dayjs from "dayjs"; // 라이브러리 다운로드 및 추가

const props = defineProps({
  memberItem: Object,
});

// add(9, "hour")은 UTC를 KST(한국 표준시)로 수동 변환하는 방법
const formatDate = (date) => {
  return dayjs(date).add(9, "hour").format("YYYY-MM-DD HH:mm:ss");
};
</script>

<style scoped>
.member-container {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: bisque;
  border-radius: 4px;
}
.image {
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: bisque;
  border: 3px solid burlywood;
  border-radius: 4px;
}
.member-container .member {
  padding: 30px;
  gap: 20px;
  border-radius: 8px;
}
</style>
