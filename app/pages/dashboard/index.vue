<template>
  <div class="grid grid-cols-12 gap-4">
    <div :class="isCollapsed ? 'col-span-12' : 'col-span-12'">
      <div class="flex items-center justify-between">
        <div class="flex flex-col leading-6">
          <h1 class="text-3xl">Overview</h1>
          <span class="text-stone-500 font-extralight"
            >Here is the summary of overall data</span
          >
        </div>
        <div class="flex items-center gap-3">
          <div
            class="flex items-center gap-1 bg-white rounded-3xl px-3 py-1.5 border border-stone-200 focus-within:border-stone-500 focus-within:ring-1 focus-within:ring-stone-300"
          >
            <select
              class="appearance-none bg-transparent border-none outline-none focus:ring-0 text-sm text-stone-800 cursor-pointer pr-3"
            >
              <option value="" disabled selected>Select a period</option>
              <option value="1">This Month</option>
              <option value="3">Last 90 Days</option>
              <option value="3">Last 60 Days</option>
              <option value="3">Last 30 Days</option>
              <option value="3">Last 15 Days</option>
              <option value="3">Last 7 Days</option>
            </select>
            <Icon
              name="material-symbols:keyboard-arrow-down-rounded"
              size="1.5em"
              class="text-stone-500 shrink-0"
            />
          </div>
          <button
            class="flex items-center text-center gap-2 bg-white text-stone-500 rounded-3xl px-4 py-1.5 border border-stone-200 focus-within:border-stone-500 focus-within:ring-1 focus-within:ring-stone-300"
          >
            <Icon
              name="material-symbols:refresh-rounded"
              size="1.5em"
              inline
            ></Icon>
            Reset Data
          </button>
        </div>
      </div>
    </div>

    <div
      :class="isCollapsed ? 'col-span-4' : 'col-span-4'"
      v-for="(item, index) in itemsBallance"
      :key="index"
    >
      <div class="grid grid-cols-1 gap-3">
        <DashboardCardBallance
          :title="item.title"
          :subtitle="item.subtitle"
          :value="item.value"
          :currency="item.currency"
          :icon="item.icon"
          :colorIcon="item.iconColor"
          :numberPercent="item.numberPercent"
          :bgColor="item.bgColor"
          :variantIcon="item.variantIcon"
        />
      </div>
    </div>
    <div :class="isCollapsed ? 'col-span-5' : 'col-span-5'">
      <div class="grid grid-cols-1 gap-3">
        <DashboardCard>
          <div class="flex flex-col flex-1">
            <div class="flex items-center justify-between">
              <div class="flex flex-col">
                <p class="font-medium text-xl/8">Smart Wallet</p>
                <p class="text-stone-400 text-xs">Today 1 USD = R$ 5,17 BRL</p>
              </div>
              <button
                class="flex items-center text-center gap-1 text-sm bg-white text-stone-900 rounded-3xl px-4 py-1.5 border border-stone-200 focus-within:border-stone-500 focus-within:ring-1 focus-within:ring-stone-300"
              >
                <Icon
                  name="material-symbols:add-2-rounded"
                  size="1em"
                  inline
                  class="text-stone-900"
                ></Icon>
                Add New
              </button>
            </div>
          </div>

          <div class="mt-8 grid grid-cols-2 gap-3">
            <div class="bg-stone-100 p-4 rounded-xl flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <Icon name="circle-flags:us" size="2em" />
                  <div class="flex flex-col">
                    <p class="font-medium text-sm">USD</p>
                  </div>
                </div>
                <Icon name="material-symbols:more-vert" size="1.5em" />
              </div>
              <div class="mt-3 flex flex-col">
                <span class="text-2xl font-medium text-stone-900">$125.00</span>
                <span class="text-sm text-stone-500"
                  >Limit is $10k a month</span
                >
                <span class="text-emerald-500 mt-4"> Active </span>
              </div>
            </div>
            <div class="bg-stone-100 p-4 rounded-xl flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <Icon name="circle-flags:us" size="2em" />
                  <div class="flex flex-col">
                    <p class="font-medium text-sm">USD</p>
                  </div>
                </div>
                <Icon name="material-symbols:more-vert" size="1.5em" />
              </div>
              <div class="mt-3 flex flex-col">
                <span class="text-2xl font-medium text-stone-900">$125.00</span>
                <span class="text-sm text-stone-500"
                  >Limit is $10k a month</span
                >
                <span class="text-emerald-500 mt-4"> Active </span>
              </div>
            </div>
            <div class="bg-stone-100 p-4 rounded-xl flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <Icon name="circle-flags:us" size="2em" />
                  <div class="flex flex-col">
                    <p class="font-medium text-sm">USD</p>
                  </div>
                </div>
                <Icon name="material-symbols:more-vert" size="1.5em" />
              </div>
              <div class="mt-3 flex flex-col">
                <span class="text-2xl font-medium text-stone-900">$125.00</span>
                <span class="text-sm text-stone-500"
                  >Limit is $10k a month</span
                >
                <span class="text-emerald-500 mt-4"> Active </span>
              </div>
            </div>
            <div class="bg-stone-100 p-4 rounded-xl flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <Icon name="circle-flags:us" size="2em" />
                  <div class="flex flex-col">
                    <p class="font-medium text-sm">USD</p>
                  </div>
                </div>
                <Icon name="material-symbols:more-vert" size="1.5em" />
              </div>
              <div class="mt-3 flex flex-col">
                <span class="text-2xl font-medium text-stone-900">$125.00</span>
                <span class="text-sm text-stone-500"
                  >Limit is $10k a month</span
                >
                <span class="text-emerald-500 mt-4"> Active </span>
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>
    <div :class="isCollapsed ? 'col-span-7' : 'col-span-7'">
      <div class="grid grid-cols-1 gap-3">
        <DashboardCard> teste testando </DashboardCard>
      </div>
    </div>

    <!-- <div :class="isCollapsed ? 'col-span-8' : 'col-span-7'">
      <DashboardCardCalendar />
    </div>
    <div :class="isCollapsed ? 'col-span-4' : 'col-span-5'">
      <DashboardCardCalendar />
    </div> -->
    <!-- <div :class="isCollapsed ? 'col-span-4' : 'col-span-5'">
      <DashboardCardWallet
        v-for="(item, index) in itemsWallet"
        :key="index"
        :title="item.title"
        :subtitle="item.subtitle"
        :value="item.value"
        :subtitleValue="item.subtitleValue"
        :plans="item.plans"
        :currency="item.currency"
        :iconButton="item.iconButton"
        :textButton="item.textButton"
      />
    </div> -->
  </div>
</template>

<script lang="ts" setup>
const { isCollapsed } = useSidebar();

const itemsWallet = [
  {
    title: "Smart Wallet",
    subtitle: "Effortless saving goals",
    value: "$1,234.56",
    subtitleValue: "Total Saving",
    currency: "BRL",
    iconButton: "material-symbols:add-2-rounded",
    textButton: "Add New",
    plans: [
      {
        icon: "streamline:earth-airplane-solid",
        name: "Travel",
        colorIcon: "text-blue-600",
      },
      {
        icon: "streamline:home-4-solid",
        name: "Property",
        colorIcon: "text-amber-600",
      },
      {
        icon: "streamline:graduation-cap-solid",
        name: "Education",
        colorIcon: "text-rose-600",
      },
    ],
  },
];

const itemsBallance = [
  {
    title: "Saldo da Carteira",
    subtitle: "Saldo Disponível & Despesas",
    value: "R$ 0",
    currency: "BRL",
    icon: "material-symbols:account-balance-wallet",
    variantIcon: "bg-sky-100",
    iconColor: "text-sky-600",
    numberPercent: 50,
  },
  {
    title: "Conta Poupança",
    subtitle: "Crescimento Seguro & Constante",
    value: "R$ 0",
    currency: "BRL",
    icon: "material-symbols:money-bag-rounded",
    variantIcon: "bg-emerald-100",
    iconColor: "text-emerald-700",
    bgColor: "bg-emerald-100",
    numberPercent: -2.5,
  },
  {
    title: "Carteira de Investimentos",
    subtitle: "Gestão & Visão de Ativos",
    value: "R$ 0",
    currency: "BRL",
    icon: "material-symbols:monitoring-rounded",
    variantIcon: "bg-indigo-100",
    iconColor: "text-indigo-700",
    numberPercent: -37.5,
    bgColor: "bg-indigo-100",
  },
];
</script>

<style scoped></style>
