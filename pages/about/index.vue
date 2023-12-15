<script setup lang='ts'>
/** 应用简洁布局 */
definePageMeta({
  layout: 'concise',
})
useHead({
  title: '关于',
  meta: [
    { name: 'description', content: '关于描述' },
  ],
  bodyAttrs: {
    class: 'test',
  },
  script: [{ innerHTML: 'console.log(\'Hello world\')' }],
})
</script>

<template>
  <div>
    about work!
  </div>
</template>

<style scoped lang='scss'>

</style>
