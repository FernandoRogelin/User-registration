<script setup>
import Input from '@/components/ui/Input.vue'

defineProps({
  isCompany: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="layouts-review">
    <Input name="email" type="email" label="Endereço de e-mail" />

    <div v-if="isCompany" class="layouts-review__wrapper">
      <Input name="companyName" type="text" label="Razão social" />

      <Input name="cnpj" type="text" label="CNPJ" />

      <Input name="openingDate" type="text" label="Data de abertura" />

      <Input name="companyPhone" type="tel" label="Telefone" />
    </div>

    <div v-else class="layouts-review__wrapper">
      <Input name="name" type="text" label="Nome" />

      <Input name="cpf" type="text" label="CPF" />

      <Input name="birthdate" type="text" label="Data de nascimento" />

      <Input name="phone" type="tel" label="Telefone" />
    </div>

    <Input name="password" type="password" label="Sua senha" />
  </div>
</template>

<style scoped lang="scss">
.layouts-review {
  gap: 0.8rem;
  display: flex;
  flex-direction: column;

  &__wrapper {
    gap: 0.8rem;
    display: flex;
    flex-direction: column;
  }
}
</style>
