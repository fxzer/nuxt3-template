<script setup lang='ts'>
const start = useStart()
// const runtimeConfig = useRuntimeConfig()
// const appConfig = useAppConfig()
const str = ref('')
const requiredStr = ref('required str')

// const testResult = await useFetch('/api/test', {
//   method: 'POST',
// })
// console.log('[ testResult ]-9 =====', testResult.data.value)

const tu = testUtil()
console.log('[ tu ]-13', tu)

const composableRunCfg = await useMyComposable()
console.log('[ composableRunCfg ]-16', composableRunCfg)
</script>

<template>
  <div>
    <div>Home Page {{ start }}</div>
    <div>
      <h3 my-2 text-center>
        DefineModelDemo （Vue3 实验性功能 defineModel）
      </h3>
      <div grid grid-cols-2 gap-4>
        <DefineModelDemo v-model="str" v-model:required="requiredStr" />
        <div space-y-8>
          <div>str: {{ str }}</div>
          <div>requiredStr: {{ requiredStr }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
</style>
