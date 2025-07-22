<script setup>
import { ref, computed } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'

import { useRegistration } from '@/composables/useRegistration'
import { registrationSchema, initialValues } from '@/schemas/registrationSchema'

import { FIRST_STEP, LAST_STEP, SECOND_STEP, THIRD_STEP } from '@/constants/steps'

import Footer from '@/components/common/AppFooter.vue'
import Header from '@/components/common/AppHeader.vue'

import Company from '@/layouts/Company.vue'
import Person from '@/layouts/Person.vue'
import Welcome from '@/layouts/Welcome.vue'
import Password from '@/layouts/Password.vue'
import Review from '@/layouts/Review.vue'

const currentStep = ref(FIRST_STEP)
const { registration } = useRegistration()

const { values, handleSubmit, validateField } = useForm({
  validationSchema: toTypedSchema(registrationSchema),
  initialValues,
  validateOnChange: false,
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

const submitForm = handleSubmit(async formData => await registration(formData))
</script>

<template>
  <main class="app-main">
    <Header :step="currentStep" :isCompany="isCompany" />

    <form @submit.prevent="submitForm">
      <div class="app-main-content">
        <article class="app-main-content__wrapper">
          <Welcome v-show="currentStep === FIRST_STEP" />
          <Company v-show="currentStep === SECOND_STEP && isCompany" />
          <Person v-show="currentStep === SECOND_STEP && !isCompany" />
          <Password v-show="currentStep === THIRD_STEP" />
          <Review v-show="currentStep === LAST_STEP" :isCompany="isCompany" />
        </article>

        <Footer
          :step="currentStep"
          :personType="values.personType"
          :validateField="validateField"
          :nextStep="nextStep"
          :prevStep="prevStep"
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
