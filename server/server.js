import { fileURLToPath, URL } from 'node:url'

import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/register', express.static(fileURLToPath(new URL('../web/dist', import.meta.url))))

app.get('', (req, res) => res.redirect('/register'))

app.post('/registration', (req, res) => {
  const { email, password } = req.body

  if (!email) return res.status(400).json({ error: 'E-mail obrigatório!' })

  if (!password) return res.status(400).json({ error: 'Senha obrigatória!' })

  res.status(200).json({ message: 'Cadastro realizado com sucesso!' })
})

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`))
