<template>
  <header class="bg-white flex flex-row w-full p-4 lg:h-full text-gray-950">
    <div class="flex items-center justify-between w-64">
      <div class="flex items-center gap-2 w-60">
        <NuxtLink
          to="#"
          class="font-bold text-lg lg:text-2xl uppercase flex items-center justify-center bg-lime-500 w-10 h-10 rounded-full text-stone-950"
        >
          F
        </NuxtLink>
        <span class="font-semibold">Financeiro</span>
      </div>
      <Icon
        :name="
          isCollapsed
            ? 'material-symbols:menu-rounded'
            : 'material-symbols:close-rounded'
        "
        size="1.5em"
        @click="toggleSidebar"
        class="transition-transform duration-300 ease-in-out"
        :class="{ '-scale-x-100': isCollapsed }"
      />
    </div>
    <nav class="flex items-center justify-between px-4 w-3/2">
      <div
        class="w-85 flex items-center gap-2 bg-gray-100 rounded-3xl px-3 py-1.5 border border-gray-300 focus-within:border-gray-700 focus-within:ring-1 focus-within:ring-gray-300"
      >
        <Icon
          name="i-ic-outline-search"
          size="1.25em"
          class="text-gray-400 shrink-0"
        />
        <input
          type="text"
          placeholder="Search..."
          class="bg-transparent border-none outline-none text-sm text-gray-800 placeholder-gray-400 w-full focus:ring-0 p-0"
        />
      </div>
      <ul>
        <li
          class="relative"
          @mouseenter="userOptionsOpen = true"
          @mouseleave="userOptionsOpen = false"
        >
          <NuxtLink
            to="#"
            class="hover:text-gray-700 py-2 inline-flex items-center gap-1"
          >
            <Icon name="i-boxicons-user-circle-filled" size="2em" />
            <Icon
              name="i-ant-design-caret-down-filled
                  "
              size="0.75em"
              class="transition-transform duration-300 ease-in-out"
              :class="{ 'rotate-180': userOptionsOpen }"
            />
          </NuxtLink>

          <ul
            class="absolute top-full space-y-2 right-0 w-52 z-20 bg-white border border-gray-200 rounded-lg py-2 shadow-lg text-gray-800"
            v-show="userOptionsOpen"
          >
            <li
              v-for="item in menuItems.user"
              :key="item.name"
              class="py-1 px-4 hover:px-5 hover:bg-gray-200 transition-all duration-150 ease-in-out flex items-center gap-1"
            >
              <NuxtLink :to="item.linkUrl" class="flex items-center gap-1">
                <Icon :name="item.icon" size="1.5em" />
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const userOptionsOpen = ref(false);

const menuItems = {
  user: [
    { name: "Profile", icon: "i-ic-outline-person", linkUrl: "/profile" },
    { name: "Settings", icon: "i-ic-outline-settings", linkUrl: "/settings" },
    { name: "Logout", icon: "i-ic-outline-log-out", linkUrl: "/logout" },
  ],
};

const { isCollapsed, toggleSidebar } = useSidebar();
</script>

<style></style>
