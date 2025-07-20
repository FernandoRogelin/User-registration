<script setup>
const props = defineProps({
  step: {
    type: Number,
    required: true
  },
  isCompany: {
    type: Boolean,
    default: false
  }
})

function getStepTitle() {
  const steps = {
    1: 'Seja bem-vindo(a)',
    2: `Pessoa ${props.isCompany ? 'Jurídica' : 'Física'}`,
    3: 'Senha de acesso',
    4: 'Revise suas informações'
  }

  return steps[props.step] || '';
}
</script>

<template>
  <header class="components-common-appHeader">
    <p class="components-common-appHeader-step">
      Etapa <span class="components-common-appHeader-step__number">{{ step }}</span> de 4
    </p>

    <h1 class="components-common-appHeader-title">{{ getStepTitle() }}</h1>
  </header>
</template>

<style scoped lang="scss">
.components-common-appHeader{
  &-step {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;

    &__number {
      color: var(--mb-orange);
    }
  }

  &-title {
    font-size: 1.4rem;
  }
}
</style>
