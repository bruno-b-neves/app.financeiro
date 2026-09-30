<template>
  <div class="bg-white rounded-3xl p-4">
    <div class="flex items-center justify-between">
      <!-- Icon | Currency balance | options -->
      <div class="flex items-center gap-2">
        <div
          class="rounded-lg p-2 flex items-center gap-2"
          :class="variantIcon"
        >
          <Icon :name="icon" size="1.5em" :class="colorIcon" />
        </div>
        <div class="flex flex-col">
          <span class="text-lg">{{ title }}</span>
          <span class="text-sm text-gray-500">{{ subtitle }}</span>
        </div>
      </div>
      <Icon name="material-symbols:more-horiz" size="1.5em" />
    </div>
    <div class="flex items-center leading-none mt-8">
      <span class="text-3xl font-bold text-900">{{ value }}</span>
      <span
        class="text-sm ml-2 flex items-center gap-0.5"
        :class="
          numberPercent < 0
            ? 'text-rose-600 bg-rose-50 border border-rose-200 rounded-full py-0.5 px-2'
            : 'text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full py-0.5 px-2'
        "
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
    subtitle?: string;
    variantIcon?: string;
  }>(),
  {
    title: "",
    value: "0.00",
    currency: "USD",
    icon: "i-logos-bitcoin",
    colorIcon: "text-stone-950",
    numberPercent: 0,
    subtitle: "",
    variantIcon: "bg-stone-100",
  },
);
</script>

<style></style>
