<template>
  <button
    @click="onClick"
    class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
  >
    <slot>기본 버튼</slot>
    <!-- childern과 같은 문법 -->
    <!-- 부모 컴포넌트가 자식 컴포넌트의 내부에 전달하는 HTML 콘텐츠를 표시할 위치를 지정 -->
  </button>
</template>
