<template>
  <div class="w-full flex items-start flex-col gap-2">
    <div
      class="font-semibold text-2xl leading-[1.6em] text-[rgba(0, 0, 0, 0.85)]"
    >
      지원 계정 만들기
    </div>
    <div class="flex flex-row items-center gap-3 py-2">
      <p class="font-normal text-[13px] text-[rgba(0,0,0,0.6)]">
        이전에 생성한 지원 계정이 있으신가요?
      </p>
      <router-link
        to="/login"
        class="text-[13px] font-semibold text-[rgba(0, 0, 0, 0.85)] underline"
      >
        로그인
      </router-link>
    </div>
    <ul
      class="w-full mt-4 py-3 pr-3 pl-6 rounded border text-left border-[rgba(0,0,0,0.06)] bg-[rgba(0,0,0,0.02)] list-disc"
    >
      <li class="font-normal text-xs text-[rgba(0,0,0,0.6)]">
        아래 내용은 향후 전형 진행에 있어 필수적인 항목이므로 잘 확인해 주세요.
      </li>
      <li class="font-normal text-xs text-[rgba(0,0,0,0.6)]">
        인증 메일이 도착하지 않는다면 스팸 메일함을 확인해 주세요.
      </li>
    </ul>
  </div>
</template>
