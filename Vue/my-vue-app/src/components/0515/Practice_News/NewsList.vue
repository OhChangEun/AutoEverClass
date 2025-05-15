<template>
  <div class="news-list">
    <NewsItem
      v-for="news in filteredNews"
      :key="news.title + news.date"
      :newsItem="news"
    />
  </div>
</template>

<script setup>
import NewsItem from "./NewsItem.vue";

const props = defineProps({
  filteredNews: Array,
});
</script>

<style scoped>
.news-list {
  margin-top: 20px;
}
</style>
