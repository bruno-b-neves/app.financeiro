<script setup lang="ts">
const { isCollapsed } = useSidebar();

const route = useRoute();

const menuItems = computed(() => [
  {
    name: "Dashboard",
    icon:
      route.name === "dashboard"
        ? "i-material-symbols-dashboard-rounded"
        : "i-material-symbols-dashboard-outline-rounded",
    routeName: "dashboard",
    link: "/dashboard",
  },
  {
    name: "Orders",
    icon:
      route.name === "dashboard-orders"
        ? "material-symbols:inventory-2-rounded"
        : "material-symbols:inventory-2-outline-rounded",
    routeName: "dashboard-orders",
    link: "/dashboard/orders",
  },
  {
    name: "Products",
    icon:
      route.name === "dashboard-products"
        ? "material-symbols:package-2-rounded"
        : "material-symbols:package-2-outline-rounded",
    routeName: "dashboard-products",
    link: "/dashboard/products",
  },
  {
    name: "Customers",
    icon:
      route.name === "dashboard-customers"
        ? "material-symbols:group-rounded"
        : "material-symbols:group-outline-rounded",
    routeName: "dashboard-customers",
    link: "/dashboard/customers",
  },
  {
    name: "Content",
    icon:
      route.name === "dashboard-content"
        ? "material-symbols:image-rounded"
        : "material-symbols:image-outline-rounded",
    routeName: "dashboard-content",
    link: "/dashboard/content",
  },
  {
    name: "Online Store",
    icon:
      route.name === "dashboard-store"
        ? "i-material-symbols-store-rounded"
        : "i-material-symbols-store-outline-rounded",
    routeName: "dashboard-store",
    link: "/dashboard/store",
  },
  {
    name: "Finances",
    icon:
      route.name === "dashboard-finance"
        ? "material-symbols:money-bag-rounded"
        : "material-symbols:money-bag-outline-rounded",
    routeName: "dashboard-finance",
    link: "/dashboard/finance",
  },
  {
    name: "Offers",
    icon:
      route.name === "dashboard-offers"
        ? "material-symbols:percent-discount-rounded"
        : "material-symbols:percent-discount-outline-rounded",
    routeName: "dashboard-offers",
    link: "/dashboard/offers",
  },
  {
    name: "Analitycs",
    icon:
      route.name === "dashboard-analitycs"
        ? "material-symbols:chart-data-rounded"
        : "material-symbols:chart-data-outline-rounded",
    routeName: "dashboard-analitycs",
    link: "/dashboard/analitycs",
  },
]);
</script>

<template>
  <aside
    class="bg-white text-stone-950 h-full flex flex-col justify-between transition-all duration-300 ease-in-out"
    :class="isCollapsed ? 'w-20 px-4 py-8' : 'w-64 py-8 px-4'"
  >
    <!-- Navegação Principal -->
    <div class="flex-1 border-t border-gray-200">
      <nav class="h-full mt-1">
        <ul class="space-y-1">
          <!-- Item Dashboard -->
          <li v-for="item in menuItems" :key="item.name">
            <NuxtLink
              :to="item.link"
              class="flex items-center rounded-lg py-2 px-3 hover:bg-stone-100 hover:text-stone-950 transition-colors"
              :class="[
                isCollapsed ? 'justify-center' : 'gap-3',
                route.name === item.routeName
                  ? 'bg-stone-100 text-blue-600 font-medium transition-all duration-300 ease-in-out'
                  : 'text-stone-700 transition-all duration-300 ease-in-out',
              ]"
              :title="isCollapsed ? item.name : ''"
            >
              <Icon
                :name="item.icon"
                size="1.5em"
                class="shrink-0"
                mode="svg"
              />
              <span v-show="!isCollapsed" class="whitespace-nowrap">
                {{ item.name }}
              </span>
            </NuxtLink>
          </li>
        </ul>
        <ul class="mt-10">
          <li>
            <NuxtLink
              to="#"
              class="flex items-center rounded-lg py-2 px-3 hover:bg-stone-50 hover:text-stone-950 transition-colors"
              :class="isCollapsed ? 'justify-center' : 'gap-3'"
              :title="isCollapsed ? 'Configurações' : ''"
            >
              <Icon
                :name="
                  route.name === 'dashboard-settings'
                    ? 'i-material-symbols-settings'
                    : 'i-material-symbols-settings-outline'
                "
                size="1.5em"
              />
              <span v-show="!isCollapsed" class="whitespace-nowrap">
                Configurações
              </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="#"
              class="flex items-center rounded-lg py-2 px-3 hover:bg-stone-50 hover:text-stone-950 transition-colors"
              :class="isCollapsed ? 'justify-center' : 'gap-3'"
              :title="isCollapsed ? 'Sair' : ''"
            >
              <Icon
                :name="
                  route.name === 'dashboard-contact'
                    ? 'i-material-symbols-contact-support-rounded'
                    : 'i-material-symbols-contact-support-outline'
                "
                size="1.5em"
                class="shrink-0"
              />
              <span v-show="!isCollapsed" class="whitespace-nowrap">
                Help & Support
              </span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Rodapé da Sidebar -->
    <div class="mt-auto border border-stone-100 rounded-lg p-1">
      <div class="flex items-center">
        <Icon name="i-material-symbols-image-outline" size="3em" />
        <div class="flex flex-col justify-center">
          <span class="font-semibold text-base/6">Usuário Fulano</span>
          <span class="text-xs text-stone-400">fulano@example.com</span>
        </div>
      </div>
    </div>
  </aside>
</template>
