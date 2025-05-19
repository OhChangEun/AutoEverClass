<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <ul class="flex flex-col items-center gap-10">
      <li v-for="item in items" :key="items.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup>
const items = [
  { id: 1, name: "Vue" },
  { id: 2, name: "React" },
  { id: 3, name: "Swift" },
];
</script>
