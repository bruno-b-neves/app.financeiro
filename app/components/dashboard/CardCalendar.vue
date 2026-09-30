<template>
  <div class="bg-white rounded-3xl p-4 border border-stone-50">
    <div class="flex items-center justify-between">
      <!-- Icon | Currency balance | options -->
      <div class="flex items-center gap-2">
        <div class="bg-stone-100 rounded-lg p-2 flex items-center gap-2">
          <Icon :name="icon" size="1.5em" :class="colorIcon" />
        </div>
        <span class="text-md">{{ title }}</span>
      </div>
      <Icon name="material-symbols:more-horiz" size="1.5em" />
    </div>
    <div class="flex items-center leading-none mt-5.5">
      <span class="text-2xl font-bold">{{ value }}</span>
      <span
        class="text-sm text-gray-500 ml-2 flex items-center gap-0.5"
        :class="numberPercent < 0 ? 'text-rose-600' : 'text-green-600'"
      >
        <span v-if="numberPercent > 0">+</span>{{ numberPercent }}%
        <Icon
          name="material-symbols:trending-up-rounded"
          size="1.1em"
          :class="numberPercent < 0 ? 'rotate-180' : ''"
        ></Icon>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    title?: string;
    value?: string | number;
    currency?: string;
    icon?: string;
    colorIcon?: string;
    numberPercent?: number;
  }>(),
  {
    title: "",
    value: "0.00",
    currency: "USD",
    icon: "i-logos-bitcoin",
    colorIcon: "text-stone-950",
    numberPercent: 0,
  },
);
</script>

<style></style>
