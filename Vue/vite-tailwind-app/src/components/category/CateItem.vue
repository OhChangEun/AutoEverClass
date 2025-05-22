<template>
  <div
    class="w-10/12 flex justify-between items-center py-2 px-5 ml-3 rounded-lg border cursor-pointer hover:bg-gray-100"
  >
    <div class="">{{ cate.categoryName }}</div>
    <button @click="() => removeCategoryById(cate.categoryId)">❌</button>
  </div>
</template>

<script setup>
defineProps({ cate: Object });
const emit = defineEmits(["remove"]);
const removeCategoryById = (value) => {
  emit("remove", value);
};
</script>
