import { z } from "zod"

import { isValidDate } from "@/helpers/validation"
import { isValidCPF, isValidCNPJ, isValidPhone } from '@brazilian-utils/brazilian-utils'

export const initialValues = { personType: 'person' }

const errorMessages = {
  required: 'Campo obrigatório!',
  email: 'E-mail inválido!',
}

const commonFields = {
  password: z.string({ required_error: errorMessages.required }),
  email: z.string({ required_error: errorMessages.required }).email({ message: errorMessages.email }),
}

const phoneSchema = z.string({ required_error: errorMessages.required })
  .refine(isValidPhone, { message: 'Formato de telefone inválido. Ex: (XX) XXXX-XXXX ou (XX) XXXXX-XXXX' })

const dateSchema = z.string({ required_error: errorMessages.required })
  .refine(isValidDate, { message: 'Data inválida. Ex: XX/XX/XXX' })

const cpfSchema = z.string({ required_error: errorMessages.required })
  .refine(isValidCPF, { message: 'CPF inválido! Ex: xxx.xxx.xxx-xx' })

const cnpjSchema = z.string({ required_error: errorMessages.required })
  .refine(isValidCNPJ, { message: 'CNPJ inválido! Ex: xx.xxx.xxx/xxxx-xx' })

const personSchema = z.object({
  personType: z.literal('person'),
  ...commonFields,
  cpf: cpfSchema,
  phone: phoneSchema,
  birthdate: dateSchema,
  name: z.string({ required_error: errorMessages.required }),
})

const companySchema = z.object({
  personType: z.literal('company'),
  ...commonFields,
  cnpj: cnpjSchema,
  openingDate: dateSchema,
  companyPhone: phoneSchema,
  companyName: z.string({ required_error: errorMessages.required }),
})

export const registrationSchema = z.discriminatedUnion('personType', [ personSchema, companySchema ])
