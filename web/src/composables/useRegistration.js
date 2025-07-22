import { ref, computed } from "vue"

import { registrationUser } from "@/service/registration"

export function useRegistration() {
  const timeOutId = ref(null)
  const responseService = ref(null)

  const response = computed(() => responseService.value)

  function resetResponse() {
    clearTimeout(timeOutId.value)

    timeOutId.value = setTimeout(() => {
      responseService.value = null

      clearTimeout(timeOutId.value)
    }, 3000);
  }

  async function registration (data) {
    try {
      const response = await registrationUser(data)

      responseService.value = response
      resetResponse()
    } catch (error) {
      responseService.value = error
      resetResponse()
    }
  }

  return { response, registration }
}
