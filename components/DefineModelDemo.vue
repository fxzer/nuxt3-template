<script setup lang='ts'>
// 直接使用 (引入组件后直接使用 `v-model`)
const modelValue = defineModel<string>()

// 是否必须
const required = defineModel<string>('required', { required: true })

// // 设置默认值
// const count1 = defineModel<number>({ default: 0 })
// const count2 = defineModel<number>('count', { default: 0 })

// // local设为true后，组件如果不需要 `v-model`可以不传.  默认为false
// const count3 = defineModel<number>('count', { local: true, default: 0 })
</script>

<template>
  <div>
    <input v-model="modelValue">
    <input v-model="required" type="text">
  </div>
</template>

<style scoped lang='scss'>
input {
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
  margin-bottom: 10px;
}
</style>
