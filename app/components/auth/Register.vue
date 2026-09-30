<template>
  <form @submit.prevent="submitRegister" class="space-y-4 max-w-md">
    <div class="my-5">
      <label for="" class="block font-medium w-full mb-2 text-sm text-gray-700"
        >Nome</label
      >
      <input
        type="text"
        class="w-full border border-gray-200 py-2 px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
        v-model="user.name"
        required
      />
    </div>
    <div class="my-5">
      <label for="" class="block font-medium w-full mb-2 text-sm text-gray-700"
        >E-mail/Usuário</label
      >
      <input
        type="text"
        class="w-full border border-gray-200 py-2 px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
        v-model="user.email"
        required
      />
    </div>
    <div class="my-5">
      <label for="" class="block font-medium w-full mb-2 text-sm text-gray-700"
        >Senha</label
      >
      <input
        type="password"
        class="w-full border border-gray-200 py-2 px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
        v-model="user.password"
        required
      />
    </div>
    <div class="flex items-center gap-2 my-5">
      <input id="terms" v-model="user.acceptTerms" type="checkbox" />
      <label for="terms" class="text-sm">Aceito os termos</label>
    </div>
    <div class="block w-full">
      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition duration-300 text-sm uppercase tracking-[0.0937em] font-semibold cursor-pointer"
      >
        Cadastrar
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
// 1. Definição da Interface
interface UserForm {
  name: string;
  email: string;
  password: string;
  acceptTerms: boolean;
}

// 2. Estado do Formulário
const user = ref<UserForm>({
  name: "",
  email: "",
  password: "",
  acceptTerms: false,
});

// 3. Função de envio apenas para o console
const submitRegister = () => {
  // Validação básica
  if (!user.value.acceptTerms) {
    alert("Você precisa aceitar os termos de uso!");
    return;
  }

  // Exibe o objeto no console do navegador
  console.log("Dados do formulário:", { ...user.value });
};
</script>

<style scoped></style>
