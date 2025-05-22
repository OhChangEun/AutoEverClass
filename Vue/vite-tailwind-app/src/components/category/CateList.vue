<template>
  <div class="w-10/12 max-h-[400px] overflow-y-auto mx-auto mt-12">
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
