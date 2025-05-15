<template>
  <div>
    <NewsCategory @send-category="handleCategory" />
    <NewsList :filteredNews="filteredNewsByCategory" />
  </div>
</template>

<script setup>
import NewsCategory from "./NewsCategory.vue";
import NewsList from "./NewsList.vue";
import { allNews } from "./data";
import { ref, computed } from "vue";

const selectedCategory = ref("");
const handleCategory = (category) => {
  selectedCategory.value = category;
  // console.log(category);
};

const filteredNewsByCategory = computed(() => {
  return selectedCategory.value === "전체"
    ? allNews
    : allNews.filter((news) => news.category === selectedCategory.value);
});
</script>
