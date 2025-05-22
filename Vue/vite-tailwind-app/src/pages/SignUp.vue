<template>
  <section class="flex justify-center">
    <div class="flex flex-col gap-12 w-[480px] py-[40px] pb-[80px]">
      <SignUpHeader />
      <SignUpForm />
    </div>
  </section>
</template>

<script setup>
import SignUpHeader from "../../src/components/recruitment/form/SignUp/SignUpHeader.vue";
import SignUpForm from "../../src/components/recruitment/form/SignUp/SignUpForm.vue";
</script>
