<template>
  <nav class="bg-white border-b border-gray-200 p-2">
    <button
      class="text-gray-950 hover:text-gray-200 mb-0"
      @click="toggleSidebar"
    >
      <Icon
        name="i-ic-outline-menu-open"
        size="1.5em"
        class="transition-transform duration-300 ease-in-out"
        :class="{ '-scale-x-100': isCollapsed }"
      ></Icon>
    </button>
  </nav>
</template>

<script lang="ts" setup>
const { isCollapsed, toggleSidebar } = useSidebar();
</script>

<style></style>
