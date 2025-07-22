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
    <label class="components-ui-input-label">
      <span v-if="label" class="components-ui-input-label__span">{{ label }}</span>
      <Field :name="name" :type="type" class="components-ui-input-label__field" />
      <ErrorMessage :name="name" as="div" class="components-ui-input-label__error" />
    </label>
  </div>
</template>

<style scoped lang="scss">
.components-ui-input {
  gap: 0.4rem;
  display: flex;
  flex-direction: column;

  &-label {
    display: flex;
    flex-direction: column;

    &__span {
      font-weight: 600;
      font-size: 0.8rem;
    }

    &__field {
      height: 20px;
      border-radius: 4px;
      margin-top: 0.2rem;
      border: 1px solid var(--mb-black);
    }

    &__error {
      font-weight: 500;
      font-size: 0.7rem;
      color: var(--mb-error);
    }
  }
}
</style>
