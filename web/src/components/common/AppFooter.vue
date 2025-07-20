<script setup>
import { computed } from 'vue'

import Button from '@/components/ui/Button.vue'

const props = defineProps({
  step: {
    type: Number,
    required: true
  },
  nextStep: {
    type: Function,
    required: true
  },
  prevStep: {
    type: Function,
    required: true
  }
})

const emit = defineEmits(['submit'])

const isLastStep = computed(() => props.step === 4 || false)
</script>

<template>
  <footer class="components-common-app-footer">
    <Button v-if="step > 1" variant="secondary" @click="prevStep">
      Voltar
    </Button>

    <Button @click="isLastStep ? emit('submit') : nextStep()">
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
