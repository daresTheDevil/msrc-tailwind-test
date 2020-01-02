<template>
  <div class="bg-gray-100">
    <div class="flex py-1 w-full bg-gray-900">
      <div class="container">
        <h1 class="text-xs text-gray-100">
          An official site of the Mississippi Department of Education
        </h1>
      </div>
    </div>
    <div class="py-3 flex w-full bg-gray-900 items-center">
      <div class="container">
        <div class="flex flex-row items-center">
          <img
            src="images/mde-shield-light.svg"
            class="h-10 tablet:h-12 desktop:h-20 text-gray-100"
          />
          <div class="border rounded h-10 desktop:h-16 mx-2" />
          <h1
            class="text-xl tablet:text-2xl desktop:text-3xl leading-none font-bold tracking-tight text-gray-100"
          >
            Mississippi Succeeds<br />Report Card
          </h1>
        </div>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  @apply bg-gray-100;
}
</style>
