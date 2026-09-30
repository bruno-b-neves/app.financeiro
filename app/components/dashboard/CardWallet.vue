<template>
  <div class="bg-white rounded-2xl border border-stone-50">
    <div class="p-4">
      <div class="flex justify-between items-center">
        <!-- Bloco do título e subtítulo -->
        <div class="flex flex-col">
          <p class="font-medium text-xl/8">{{ title }}</p>
          <p class="text-stone-400 text-xs">{{ subtitle }}</p>
        </div>
        <button
          class="bg-lime-500 py-2 px-4 text-xs rounded-full text-stone-950 hover:bg-lime-600 transition duration-300 flex items-center gap-1"
        >
          {{ textButton }}
          <Icon :name="iconButton" size="1em" inline></Icon>
        </button>
      </div>

      <!-- Bloco do valor e subtítulo do valor -->
      <div class="mt-5">
        <div class="flex items-center leading-none">
          <!-- Parte Inteira -->
          <span class="text-3xl font-medium text-stone-900 tracking-tight">{{
            formattedParts.integer
          }}</span>

          <!-- Parte Decimal -->
          <span
            v-if="formattedParts.decimal"
            class="text-3xl font-medium text-stone-400"
            >{{ formattedParts.decimal }}</span
          >
          <span class="text-xs font-semibold text-stone-400 uppercase ml-1.5">{{
            currency
          }}</span>
        </div>
        <span v-if="subtitleValue" class="text-xs text-stone-400">{{
          subtitleValue
        }}</span>
      </div>

      <!-- Bloco dos ícones e nomes -->
      <!-- <div class="flex items-center gap-3 flex-wrap">
        <div
          v-for="(plan, idx) in plans"
          :key="idx"
          class="flex flex-1 flex-col items-center p-4 gap-2 bg-stone-100 rounded-xl text-sm font-medium"
        >
          <Icon :name="plan.icon" size="1.75em" :class="plan.colorIcon"></Icon>
          <span>{{ plan.name }}</span>
        </div>
      </div> -->
    </div>
    <div class="flex items-center">
      <button
        type="button"
        class="border-t border-stone-200 py-2.5 px-4 bg-stone-100 hover:bg-stone-200 transition duration-300 w-full rounded-b-2xl flex items-center justify-between gap-2 text-sm font-medium"
      >
        See Details
        <Icon name="material-symbols:arrow-back-2-rounded" class="rotate-180" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Plan {
  icon: string;
  name: string;
  colorIcon?: string; // Adicionei a propriedade color como opcional
}

const props = withDefaults(
  defineProps<{
    title?: string;
    value?: string | number;
    subtitle?: string;
    subtitleValue?: string;
    icon?: string;
    name?: string;
    textButton?: string;
    iconButton?: string;
    currency?: string;
    plans?: Plan[];
    colorIcon?: string; // Adicionei a propriedade colorIcon como opcional
  }>(),
  {
    title: "",
    value: "0.00",
    subtitle: "",
    subtitleValue: "",
    icon: "i-ic-outline-info",
    name: "",
    textButton: "Ver mais",
    iconButton: "material-symbols:add-2-rounded",
    currency: "USD",
    plans: () => [],
    colorIcon: "text-stone-950", // Valor padrão para colorIcon
  },
);

const formattedParts = computed(() => {
  if (props.value === undefined || props.value === null || props.value === "") {
    return { integer: "0", decimal: ",00" };
  }

  // Converte para número limpando caracteres não numéricos se for recebido como string
  const rawNum =
    typeof props.value === "number"
      ? props.value
      : parseFloat(String(props.value).replace(/[^0-9.-]+/g, ""));

  if (isNaN(rawNum)) {
    return { integer: String(props.value), decimal: "" };
  }

  // Separa inteiro dos centavos
  const parts = rawNum.toFixed(2).split(".");
  return {
    integer: Number(parts[0]).toLocaleString("pt-BR"), // Ex: "19,820"
    decimal: `,${parts[1]}`, // Ex: ",00"
  };
});
</script>
