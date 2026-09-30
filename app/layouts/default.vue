<template>
  <!-- 1. O wrapper pai ocupa no mínimo a tela inteira e organiza em coluna -->
  <div class="min-h-screen flex flex-col bg-white">
    <GlobalHeader />

    <main class="flex-1 flex">
      <div class="shrink-0">
        <GlobalSidebar />
      </div>

      <div
        class="flex-1 border border-gray-200 rounded-t-2xl bg-stone-50 mr-6 p-4"
      >
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script setup></script>

<style scoped></style>
