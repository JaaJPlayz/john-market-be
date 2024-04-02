import express, { type Request, type Response } from 'express'
import productsRouter from './routes/products.route'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 3001

app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'I am alive and ready to work! 🚀' })
})

app.use('/products', productsRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
