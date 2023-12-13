<script setup lang='ts'>
const router = useRouter()
</script>

<template>
  <div class="flex-center flex-col sm:flex-row" style="height: calc(100vh - 60px);">
    <img src="/404.png" class="mb-10 sm:(mb-0 mr-30)" alt="404">
    <div class="flex-center flex-col">
      <h2 class="text-8xl text-gray/20 font-bold">
        404
      </h2>
      <h4 class="my-8 text-2xl text-gray/40">
        抱歉，您访问的页面不存在~~~
      </h4>
      <button class="rounded-md bg-blue p-2 text-white" @click="router.replace('/')">
        返回首页
      </button>
    </div>
  </div>
</template>
