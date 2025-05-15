<template>
  <div class="news-item">
    <p class="title">{{ newsItem.title }}</p>
    <p class="content">{{ newsItem.content }}</p>
    <p class="date">{{ newsItem.date }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  newsItem: Object,
});
</script>

<style scoped>
.news-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  border-radius: 4px;
}
.title {
  font-size: 16px;
  font-weight: bold;
  margin-left: 30px;
}
.content {
  font-size: 18px;
  font-weight: 900;
}
.date {
  margin-right: 20px;
}
</style>
