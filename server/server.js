import { fileURLToPath, URL } from 'node:url'

import cors from 'cors'
import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())

app.use(express.json())

app.use('/registration', express.static(fileURLToPath(new URL('../web/dist', import.meta.url))))

app.get('', (req, res) => res.redirect('/registration'))

app.post('/registration', (req, res) => {
  const { personType, email, password } = req.body

  if (!email) return res.status(422).json({ error: 'E-mail obrigatório!' })
  if (!password) return res.status(422).json({ error: 'Senha obrigatória!' })

  if (personType === 'person') {
    const { name, cpf, birthdate, phone } = req.body

    if (!name) return res.status(422).json({ error: 'Nome obrigatório!' })
    if (!cpf) return res.status(422).json({ error: 'CPF obrigatório!' })
    if (!birthdate) return res.status(422).json({ error: 'Data de nascimento obrigatória!' })
    if (!phone) return res.status(422).json({ error: 'Telefone obrigatório!' })
  }

  if (personType === 'company') {
    const { companyName, cnpj, openingDate, companyPhone } = req.body

    if (!companyName) return res.status(422).json({ error: 'Razão social obrigatório!' })
    if (!cnpj) return res.status(422).json({ error: 'CNPJ obrigatório!' })
    if (!openingDate) return res.status(422).json({ error: 'Data de abertura obrigatório!' })
    if (!companyPhone) return res.status(422).json({ error: 'Telefone obrigatório!' })
  }

  res.status(200).json({ message: 'Cadastro realizado com sucesso!' })
})

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`))
