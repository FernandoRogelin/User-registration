<script setup>
import Input from '@/components/ui/Input.vue'
</script>

<template>
  <div class="layouts-company">
    <Input name="companyName" type="text" label="Razão social" />

    <Input name="cnpj" type="text" label="CNPJ" />

    <Input name="openingDate" type="text" label="Data de abertura" />

    <Input name="companyPhone" type="tel" label="Telefone" />
  </div>
</template>

<style scoped lang="scss">
.layouts-company {
  gap: 1rem;
  display: flex;
  flex-direction: column;
}
</style>
