import { z } from "zod"

export const initialValues = {
  email: '',
  personType: 'person',
  name: '',
  cpf: '',
  birthdate: '',
  phone: '',
  companyName: '',
  cnpj: '',
  openingDate: '',
  password: ''
}

const errorMessages = {
  required: 'Campo obrigatório!',
  email: 'E-mail inválido!',
}

const commonFields = {
  phone: z.string({ required_error: errorMessages.required }),
  email: z.string({ required_error: errorMessages.required }).email({ message: errorMessages.email }),
}

const personSchema = z.object({
  personType: z.literal('person'),
  ...commonFields,
  name: z.string({ required_error: errorMessages.required }),
  cpf: z.string({ required_error: errorMessages.required }),
  birthdate: z.string({ required_error: errorMessages.required }),
})

const companySchema = z.object({
  personType: z.literal('company'),
  ...commonFields,
  companyName: z.string({ required_error: errorMessages.required }),
  cnpj: z.string({ required_error: errorMessages.required }),
  openingDate: z.string({ required_error: errorMessages.required }),
})

export const registrationSchema = z.discriminatedUnion('personType', [ personSchema, companySchema ])
