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
  const { email, password } = req.body

  if (!email) return res.status(400).json({ message: 'E-mail obrigatório!' })

  if (!password) return res.status(400).json({ message: 'Senha obrigatória!' })

  res.status(200).json({ message: 'Cadastro realizado com sucesso!' })
})

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`))
