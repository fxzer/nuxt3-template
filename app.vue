<script lang="ts" setup>
/* PWA */
// if (process.client) {
//   window.addEventListener('load', () => {
//     if (!('serviceWorker' in navigator))
//       throw new Error('当前浏览器不支持 ServiceWorker!')
//     navigator.serviceWorker.register('/sw.js')
//   })
// }
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
