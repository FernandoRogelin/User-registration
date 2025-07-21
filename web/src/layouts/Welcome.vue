<script setup>
import { Field, ErrorMessage } from 'vee-validate'

import Input from '@/components/ui/Input.vue'
</script>

<template>
  <div class="layouts-welcome">
    <Input class="layouts-welcome__email" name="email" type="email" label="Endereço de e-mail" />

    <div class="layouts-welcome-content">
      <label class="layouts-welcome-content-label">
        <Field class="layouts-welcome-content-label__field" name="personType" type="radio" value="person" />
        <span class="layouts-welcome-content-label__text">Pessoa física</span>
      </label>

      <label class="layouts-welcome-content-label">
        <Field class="layouts-welcome-content-label__field" name="personType" type="radio" value="company" />
        <span class="layouts-welcome-content-label__text">Pessoa jurídica</span>
      </label>
    </div>
    <ErrorMessage name="personType" />
  </div>
</template>

<style scoped lang="scss">
.layouts-welcome {
  &__email {
    margin-bottom: 0.6rem;
  }

  &-content {
    display: flex;
    gap: 0.6rem;

    &-label {
      display: flex;
      align-items: center;

      &__field {
        margin: 0 0.2rem 0 0;
      }

      &__text {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
