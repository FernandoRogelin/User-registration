import { z } from "zod"

export const initialValues = {
  // Step 1
  email: '',
  personType: 'person',

  // Step 2
  name: '',
  cpf: '',
  birthdate: '',
  phone: '',

  // Step 2
  companyName: '',
  cnpj: '',
  openingDate: '',
  companyPhone: '',

  // Step 3
  password: ''
}

const errorMessages = {
  required: 'Campo obrigatório!',
  email: 'E-mail inválido!',
}

const commonFields = {
  password: z.string({ required_error: errorMessages.required }),
  email: z.string({ required_error: errorMessages.required }).email({ message: errorMessages.email }),
}

const personSchema = z.object({
  personType: z.literal('person'),
  ...commonFields,
  phone: z.string({ required_error: errorMessages.required }),
  name: z.string({ required_error: errorMessages.required }),
  cpf: z.string({ required_error: errorMessages.required }),
  birthdate: z.string({ required_error: errorMessages.required }),
}).required()

const companySchema = z.object({
  personType: z.literal('company'),
  ...commonFields,
  companyPhone: z.string({ required_error: errorMessages.required }),
  companyName: z.string({ required_error: errorMessages.required }),
  cnpj: z.string({ required_error: errorMessages.required }),
  openingDate: z.string({ required_error: errorMessages.required }),
}).required()

export const registrationSchema = z.discriminatedUnion('personType', [ personSchema, companySchema ])
