export const FIRST_STEP = 1
export const SECOND_STEP = 2
export const THIRD_STEP = 3
export const LAST_STEP = 4

export const stepFields = {
  1: ['email', 'personType'],
  2: {
    person: ['name', 'cpf', 'birthdate', 'phone'],
    company: ['companyName', 'cnpj', 'openingDate', 'companyPhone']
  },
  3: ['password']
}
