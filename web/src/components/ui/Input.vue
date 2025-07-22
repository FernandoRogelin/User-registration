<script setup>
import { Field, ErrorMessage } from 'vee-validate'

defineProps({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="components-ui-input">
    <label v-if="label" :for="name" class="components-ui-input__label">{{ label }}</label>
    <Field :name="name" :type="type" :id="name" class="components-ui-input__field" />
    <ErrorMessage :name="name" as="div" class="components-ui-input__error" />
  </div>
</template>

<style scoped lang="scss">
.components-ui-input {
  gap: 0.4rem;
  display: flex;
  flex-direction: column;

  &__label {
    font-weight: 600;
    font-size: 0.8rem;
  }

  &__field {
    height: 20px;
    border-radius: 4px;
    border: 1px solid var(--mb-black);
  }

  &__error {
    font-weight: 500;
    font-size: 0.7rem;
    color: var(--mb-error);
  }
}
</style>
