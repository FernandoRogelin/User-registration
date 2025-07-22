import { ref, computed } from "vue"

import { registrationUser } from "@/service/registration"

export function useRegistration() {
  const responseService = ref(null)

  const response = computed(() => responseService.value)

  async function registration (data) {
    try {
      const response = await registrationUser(data)

      responseService.value = response
    } catch (error) {
      responseService.value = error
    }
  }

  return { response, registration }
}
