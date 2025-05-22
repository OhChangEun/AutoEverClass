<template>
  <div class="flex flex-col items-start gap-1 mt-6">
    <CateItem
      v-for="cate in cates"
      :key="cate.categoryId"
      :cate="cate"
      @remove="onRemove"
    />
  </div>
</template>

<script setup>
import CateItem from "./CateItem.vue";
defineProps({ cates: Array });
const emit = defineEmits(["remove"]);
const onRemove = (id) => emit("remove", id);
</script>
