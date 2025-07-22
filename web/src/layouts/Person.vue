<script setup>
import Input from '@/components/ui/Input.vue'
</script>

<template>
  <div class="layouts-person">
    <Input name="name" type="text" label="Nome" />

    <Input name="cpf" type="text" label="CPF" />

    <Input name="birthdate" type="text" label="Data de nascimento" />

    <Input name="phone" type="text" label="Telefone" />
  </div>
</template>

<style scoped lang="scss">
.layouts-person {
  gap: 1rem;
  display: flex;
  flex-direction: column;
}
</style>
