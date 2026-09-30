<template>
  <form @submit.prevent="submitLogin">
    <div>
      <label for="" class="block font-medium w-full mb-2 text-sm text-gray-700"
        >E-mail/Usuário:</label
      >
      <input
        type="text"
        class="w-full border border-gray-200 py-2 px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
        required
        v-model="user.email"
      />
    </div>
    <div class="my-5">
      <label for="" class="block font-medium w-full mb-2 text-sm text-gray-700"
        >Senha:</label
      >
      <input
        type="password"
        class="w-full border border-gray-200 py-2 px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
        v-model="user.password"
        required
      />
    </div>
    <div class="flex items-center gap-2 my-5">
      <input id="terms" v-model="user.rememberMe" type="checkbox" />
      <label for="terms" class="text-sm">Lembrar-me</label>
    </div>
    <div class="block w-full">
      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition duration-300 text-sm uppercase tracking-[0.0937em] font-semibold cursor-pointer"
      >
        Login
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup>
interface loginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

const user = ref<loginForm>({
  email: "",
  password: "",
  rememberMe: false,
});

const submitLogin = () => {
  // Aqui você pode adicionar a lógica para enviar os dados do formulário de login
  console.log("Dados do formulário de login:", user.value);
};
</script>

<style scoped></style>
