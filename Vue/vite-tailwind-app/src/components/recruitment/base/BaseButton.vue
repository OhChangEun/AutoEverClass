<template>
  <button
    @click="navigateTo"
    :class="computedClass"
    :type="type"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</template>
<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  type: { type: String, default: "button" },
  width: { type: String, default: "w-full" },
  height: { type: String, default: "h-10" },
  customClass: { type: String, default: "" },
  additionalClass: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
  label: { type: String, default: "버튼" },
  to: { type: String, default: null },
});
const computedClass = computed(() => {
  return [
    "w-full rounded font-medium text-base text-center ",
    "transition-all duration-200 ease cursor-pointer",
    props.width,
    props.height,
    props.additionalClass,
    props.disabled
      ? "cursor-not-allowed bg-black/5 text-black/30"
      : props.customClass,
  ].join(" ");
});

const navigateTo = () => {
  if (props.to && !props.disabled) {
    router.push(props.to);
  }
};
</script>
