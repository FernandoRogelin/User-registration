<script setup>
import { computed } from 'vue'

import { stepFields, FIRST_STEP, LAST_STEP } from '@/constants/steps'

import Button from '@/components/ui/Button.vue'

const props = defineProps({
  step: {
    type: Number,
    required: true
  },
  personType: {
    type: String,
    required: true
  },
  nextStep: {
    type: Function,
    required: true
  },
  prevStep: {
    type: Function,
    required: true
  },
  validateField: {
    type: Function,
    required: true
  }
})

const emit = defineEmits(['submit'])

const isLastStep = computed(() => props.step === LAST_STEP || false)

async function onNextStep() {
  if (isLastStep.value) return emit('submit')

  let fieldsToValidate = stepFields[props.step]

  if (typeof fieldsToValidate === 'object' && !Array.isArray(fieldsToValidate)) {
    fieldsToValidate = fieldsToValidate[props.personType]
  }

  const validationPromises = fieldsToValidate.map(field => props.validateField(field))

  const results = await Promise.all(validationPromises)

  const isStepValid = results.every(result => result.valid)

  if (isStepValid) props.nextStep()
}
</script>

<template>
  <footer class="components-common-app-footer">
    <Button type="button" v-if="step > FIRST_STEP" variant="secondary" @click="prevStep">
      Voltar
    </Button>

    <Button :type="isLastStep ? 'submit' : 'button'" @click="onNextStep">
      {{ isLastStep ? 'Cadastrar' : 'Continuar' }}
    </Button>
  </footer>
</template>

<style scoped lang="scss">
.components-common-app-footer {
  gap: 1rem;
  display: flex;
}
</style>
