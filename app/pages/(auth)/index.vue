<template>
  <!-- Card Principal -->
  <div
    class="relative bg-white border border-gray-200 rounded-2xl shadow-xl w-full max-w-5xl min-h-175 overflow-hidden"
  >
    <!-- 1. FORMULÁRIO DE CADASTRO (Fica na esquerda, visível por padrão) -->
    <div
      class="absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center py-10 px-12 transition-all duration-700 ease-in-out"
      :class="
        isLogin ? 'opacity-0 pointer-events-none z-0' : 'opacity-100 z-10'
      "
    >
      <div class="px-4">
        <h1 class="text-3xl font-extralight text-gray-800">Cadastro</h1>
        <p class="text-sm text-gray-500 mt-1">
          Cadastre-se para começar a gerenciar suas finanças.
        </p>

        <AuthSocialButtons class="py-6" />
        <AuthDivisor />
        <AuthRegister class="mt-6" />
      </div>
    </div>

    <!-- 2. FORMULÁRIO DE LOGIN (Fica na direita, escondido por padrão) -->
    <div
      class="absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center py-10 px-12 transition-all duration-700 ease-in-out"
      :class="
        isLogin ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
      "
    >
      <div class="px-4">
        <h1 class="text-3xl font-extralight text-gray-800">Login</h1>
        <p class="text-sm text-gray-500 mt-1">
          Entre com suas credencias para acessar sua conta.
        </p>

        <AuthSocialButtons class="py-6" />
        <AuthDivisor />
        <AuthLogin class="mt-6" />
      </div>
    </div>

    <!-- 3. PAINEL AZUL DESLIZANTE (Começa cobrindo a direita) -->
    <div
      class="absolute top-0 left-0 w-1/2 h-full bg-blue-600 text-white transition-transform duration-700 ease-in-out z-20 flex flex-col items-center justify-center px-12 text-center"
      :class="isLogin ? 'translate-x-0' : 'translate-x-full'"
    >
      <!-- Conteúdo do Painel quando está na DIREITA (Modo Cadastro) -->
      <div
        class="transition-all duration-500 flex flex-col items-center justify-center w-full"
        :class="
          isLogin ? 'opacity-0 hidden pointer-events-none' : 'opacity-100 block'
        "
      >
        <h1 class="text-3xl font-semibold">Já tem uma conta?</h1>
        <p class="font-light my-4 text-blue-100">
          Faça login com suas credenciais para acessar sua conta.
        </p>
        <button
          @click="isLogin = true"
          class="border border-white py-2 px-6 rounded-2xl mt-4 hover:bg-white hover:text-blue-600 transition duration-300 text-sm uppercase tracking-wider font-semibold cursor-pointer"
        >
          Entrar
        </button>
      </div>

      <!-- Conteúdo do Painel quando está na ESQUERDA (Modo Login) -->
      <div
        class="transition-all duration-500 flex flex-col items-center justify-center w-full"
        :class="
          isLogin ? 'opacity-100 block' : 'opacity-0 hidden pointer-events-none'
        "
      >
        <h1 class="text-3xl font-semibold">Novo por aqui?</h1>
        <p class="font-light my-4 text-blue-100">
          Cadastre-se para ter acesso completo à plataforma e gerenciar suas
          finanças.
        </p>
        <button
          @click="isLogin = false"
          class="border border-white py-2 px-6 rounded-2xl mt-4 hover:bg-white hover:text-blue-600 transition duration-300 text-sm uppercase tracking-wider font-semibold cursor-pointer"
        >
          Cadastrar-se
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  layout: "auth",
});

const isLogin = ref(false);
</script>

<style scoped></style>
