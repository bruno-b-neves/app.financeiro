<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "App Financeiro",
  meta: [
    { name: "description", content: "This is my Nuxt app" },
    { name: "keywords", content: "Nuxt, Vue, JavaScript" },
    { name: "author", content: "Bruno Neves" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
});
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  font-size: 1em;
  line-height: 1.5;
  letter-spacing: 0.0312em;
}
</style>
