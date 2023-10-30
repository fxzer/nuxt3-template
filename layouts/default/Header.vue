<template>
  <header class="fixed left-0 top-0 z-500 h-16 w-full flex-between-center whitespace-nowrap bg-white px-8 shadow-gray-300/80 shadow-sm">
    <img src="/logo.svg" alt="" class="wh-50px">
    <div>
      <div class="space-x-8">
        <nuxt-link to="/about">
          About Page
        </nuxt-link>
        <nuxt-link to="/news">
          News Page
        </nuxt-link>
      </div>
    </div>
  </header>
</template>
