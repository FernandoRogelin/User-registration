<script setup>
import Input from '@/components/ui/Input.vue'
</script>

<template>
  <div class="layouts-password">
    <Input name="password" type="password" label="Sua senha" />
  </div>
</template>

<style scoped lang="scss">
.layouts-password {
  gap: 1rem;
  display: flex;
  flex-direction: column;
}
</style>
