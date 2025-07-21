<script setup>
import { ref, computed } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'

import { registrationSchema, initialValues } from '@/schemas/registrationSchema'

import { FIRST_STEP, LAST_STEP } from '@/constants/steps'

import Footer from '@/components/common/AppFooter.vue'
import Header from '@/components/common/AppHeader.vue'

import Welcome from '@/layouts/Welcome.vue'

const currentStep = ref(FIRST_STEP)

const { values, handleSubmit, validate } = useForm({
  validationSchema: toTypedSchema(registrationSchema),
  initialValues,
  validateOnChange: true,
  validateOnBlur: true,
  validateOnMount: false,
})

const isCompany = computed(() => values.personType === 'company' || false)

function nextStep() {
  if (currentStep.value < LAST_STEP) currentStep.value++
}

function prevStep() {
  if (currentStep.value > FIRST_STEP) currentStep.value--
}

const submitForm = handleSubmit(async formData => {
  console.log('Campos válidos', formData)
})
</script>

<template>
  <main class="app-main">
    <Header :step="currentStep" :isCompany="isCompany" />

    <form @submit.prevent="submitForm">
      <div class="app-main-content">
        <article class="app-main-content__wrapper">
          <Welcome v-show="currentStep === FIRST_STEP" />
        </article>

        <Footer
          :nextStep="nextStep"
          :prevStep="prevStep"
          :step="currentStep"
          :validate="validate"
        />
      </div>
    </form>
  </main>
</template>

<style scoped lang="scss">
.app-main {
  margin: 0 auto;
  max-width: 260px;
  padding-top: 2rem;

  &-content {
    width: 80%;

    &__wrapper {
      margin: 1.2rem 0 0.8rem;
    }
  }
}
</style>
