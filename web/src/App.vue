<script setup>
import { reactive, computed } from 'vue'

import Footer from '@/components/common/AppFooter.vue'
import Header from '@/components/common/AppHeader.vue'

const formState = reactive({
  currentStep: 1,
  data: {
    // Step 1
    email: '',
    personType: '',

    // Step 2
    name: '',
    cpf: '',
    birthdate: '',

    phone: '',

    // Step 2
    companyName: '',
    cnpj: '',
    openingDate: '',

    // Step 3
    password: '',
  }
})

const isCompany = computed(() => formState.data.personType === 'company' || false)

function nextStep() {
  if (formState.currentStep < 4) formState.currentStep++
}

function prevStep() {
  if (formState.currentStep > 1) formState.currentStep--
}
</script>

<template>
  <main class="app-main">
    <Header :step="formState.currentStep" :isCompany="isCompany" />

    <div class="app-main__content">
      <article>centro do formulário</article>

      <Footer
        :nextStep="nextStep"
        :prevStep="prevStep"
        :step="formState.currentStep"
        @submit="console.log('cadastrando')"
      />
    </div>
  </main>
</template>

<style scoped lang="scss">
.app-main {
  margin: 0 auto;
  max-width: 260px;
  padding-top: 2rem;

  &__content {
    width: 80%;
  }
}
</style>
