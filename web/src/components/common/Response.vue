<script setup>
defineProps({
  response: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="components-common-response" :class="{ 'components-common-response--error': response?.error }">
    <span class="components-common-response__message">
      {{ response?.message || response?.error }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.components-common-response {
  left: 50%;
  top: 2rem;
  padding: 1rem;
  position: fixed;
  font-size: 0.8rem;
  border-radius: 4px;
  transform: translateX(-50%);
  background-color: var(--mb-white);
  border: 1px solid var(--mb-orange);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: slideUp 0.3s ease-out forwards;

  &--error {
    color: var(--mb-error);
    border-color: var(--mb-error);
  }

  &__message {
    display: block;
    text-align: center;
    font-weight: 500;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translate(-50%, 1rem);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}
</style>
