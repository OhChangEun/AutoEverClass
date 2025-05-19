<template>
  <div>
    <!-- 공통 헤더 -->
    <header style="background: #eee; padding: 1rem">공통 헤더</header>

    <!-- 페이지별 컴포넌트가 들어가는 영역 -->
    <main class="flex-1 p-4">
      <router-view />
    </main>

    <!-- 공통 푸터 -->
    <footer>footer</footer>
  </div>
</template>
