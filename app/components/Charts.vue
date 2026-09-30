<template>
  <div class="w-full">
    <!-- Área do Gráfico -->
    <div class="relative h-56 flex items-end justify-between gap-3 pt-6 pb-6">
      <!-- Linhas Guia e Eixo Y -->
      <div
        class="absolute inset-0 flex flex-col justify-between text-[11px] text-stone-400 pointer-events-none"
      >
        <span>50k</span>
        <span>40k</span>
        <span>30k</span>
        <span>20k</span>
        <span>10k</span>
        <span>0k</span>
      </div>

      <!-- Barras do Gráfico -->
      <div class="w-full h-full pl-8 flex items-end justify-between gap-2 z-10">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="relative flex-1 flex flex-col items-center h-full justify-end group cursor-pointer"
          @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = null"
        >
          <!-- Tooltip Customizado Tailwind -->
          <div
            v-if="isBarActive(index)"
            class="absolute -top-16 z-20 bg-stone-900 text-white text-xs rounded-xl p-3 shadow-xl whitespace-nowrap min-w-35 pointer-events-none"
          >
            <p class="text-[10px] text-stone-400 font-medium mb-1">
              {{ item.date }}
            </p>
            <div class="flex justify-between gap-3">
              <span class="text-stone-300">Cashflow</span>
              <span class="font-bold"
                >${{ item.value.toLocaleString("en-US") }}</span
              >
            </div>
          </div>

          <!-- Barra do Gráfico -->
          <div
            class="w-full rounded-2xl transition-all duration-300 relative flex justify-center"
            :class="[
              isBarActive(index)
                ? 'bg-linear-to-b from-emerald-500 to-emerald-700 shadow-md'
                : 'bg-emerald-100/70 hover:bg-emerald-200/80',
            ]"
            :style="{ height: `${(item.value / 50000) * 100}%` }"
          >
            <!-- Bolinha indicador no topo da barra ativa -->
            <div
              v-if="isBarActive(index)"
              class="w-3 h-3 bg-emerald-300 rounded-full border-2 border-emerald-700 -mt-1.5 shadow-sm"
            ></div>
          </div>

          <!-- Rótulo do Eixo X -->
          <span class="absolute -bottom-6 text-xs font-medium text-stone-400">
            {{ item.month }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const hoveredIndex = ref<number | null>(null);

const data = [
  { month: "Jan", value: 31000, date: "Jan 2026", active: false },
  { month: "Feb", value: 26000, date: "Feb 2026", active: false },
  { month: "Mar", value: 46000, date: "July 23, 2026", active: true },
  { month: "Apr", value: 27000, date: "Apr 2026", active: false },
  { month: "May", value: 35000, date: "May 2026", active: false },
  { month: "Jun", value: 20000, date: "Jun 2026", active: false },
  { month: "Jul", value: 29000, date: "Jul 2026", active: false },
];

// Helper seguro contra valores undefined
const isBarActive = (index: number) => {
  if (hoveredIndex.value !== null) {
    return hoveredIndex.value === index;
  }
  return data[index]?.active ?? false;
};
</script>
