<template>
  <div class="flex flex-col min-h-screen">
    공통 헤더
    <header style="background: #eee; padding: 1rem">공통 헤더</header>

    페이지별 컴포넌트가 들어가는 영역
    <main class="flex-1 p-4">
      <router-view />
    </main>

    공통 푸터
    <footer style="background: #eee; padding: 1rem; text-align: center">
      ⓒ 2025 Vue 예제 사이트. 모든 권리 보유.
    </footer>
  </div>
</template>
