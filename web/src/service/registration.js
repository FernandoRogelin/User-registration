import fetchData from "./fetch"

export async function registrationUser(data) {
  return await fetchData('registration', {
    method: 'POST',
    body: data,
  })
}
