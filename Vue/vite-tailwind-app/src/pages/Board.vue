<template>
  <div class="w-[770px] mt-20">
    <h1 class="py-4 text-center text-3xl font-semibold text-black">
      게시판 목록
    </h1>
    <div class="flex justify-end mt-4 mb-4">
      <select
        class="border rounded px-4 py-2 w-52 cursor-pointer"
        v-model="selectedCategory"
      >
        <option value="all">전체</option>
        <option
          v-for="category in categories"
          :key="category.categoryId"
          :value="category.categoryId"
        >
          {{ category.categoryName }}
        </option>
      </select>
    </div>

    <BoardList :boardList="boardList" @detail="goDetail" />

    <button
      @click="goWrite"
      class="fixed bottom-6 right-8 bg-sky-500 hover:bg-sky-600 text-white rounded-full w-14 h-14 text-3xl shadow-lg"
    >
      +
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useBoardApi } from "@/api/board";
import BoardList from "../components/board/BoardList.vue";

const { cateList, boardList: fetchBoardList } = useBoardApi();
const categories = ref([]);
const boardList = ref([]);
const selectedCategory = ref("all");
const router = useRouter();

onMounted(async () => {
  const res = await cateList();
  categories.value = res.data;
  await loadBoardList();
});

watch(selectedCategory, async () => {
  await loadBoardList();
});

const loadBoardList = async () => {
  const res = await fetchBoardList();
  boardList.value =
    selectedCategory.value === "all"
      ? res.data
      : res.data.filter(
          (board) => board.categoryId === parseInt(selectedCategory.value)
        );
};

const goWrite = () => router.push("/boardwrite");
const goDetail = (id) => router.push(`/boarddetail/${id}`);
</script>
