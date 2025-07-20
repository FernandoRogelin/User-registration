<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
})
</script>

<template>
  <button class="components-ui-button" :class="`components-ui-button--${variant}`">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.components-ui-button{
  border: 0;
  padding: 0;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  padding: 0.4rem 1rem;
  color: var(--mb-white);
  background-color: var(--mb-orange);

  &--secondary {
    color: var(--mb-orange);
    background-color: var(--mb-white);
    border: 1px solid var(--mb-orange);
  }
}
</style>
