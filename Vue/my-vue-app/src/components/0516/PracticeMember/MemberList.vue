<template>
  <MemberItem
    v-for="member in members"
    :key="member.email"
    :memberItem="member"
  />
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import MemberItem from "./MemberItem.vue";

const members = ref([]);

const loadMembers = async () => {
  try {
    const res = await axios.get("http://222.117.237.119:8111/users/list");
    if (res.data) {
      console.log(res.data);
      members.value = res.data;
      alert("데이터 로드 성공");
    }
  } catch (err) {
    console.error(err);
    alert("데이터 로드 실패!");
  }
};
onMounted(() => {
  loadMembers();
});
</script>
