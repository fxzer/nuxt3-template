<script setup>
import Header from './default/Header.vue'
import Footer from './default/Footer.vue'
</script>

<template>
  <div class="w-full text-sm">
    <Header />
    <main id="content" class="w-full overflow-auto p-4">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
#content{
  height: calc(100vh - 100px);
}
#content {
  $thumb-bg: #e1e1e1;
  $track-bg: #fff;

  &::-webkit-scrollbar {
    z-index: 11;
    width: 6px;

    &:horizontal {
      height: 6px;
    }
    &-thumb {
      border-radius: 5px;
      width: 6px;
      background: $thumb-bg;
      opacity: .1;
      &:hover{
         background-color: #cbcbcb;
        transition: opacity 340ms ease-out;
      }
    }
    &-corner {
      background: $track-bg;
    }

    &-track {
      background: $track-bg;
      &-piece {
        background: $track-bg;
        width: 6px;
      }
    }
  }
}
</style>
