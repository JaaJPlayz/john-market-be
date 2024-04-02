import productsService from '../service/products.service'
import { type Request, type Response } from 'express'

const getAllProducts = async (req: Request, res: Response) => {
  const { status, products } = await productsService.getAllProducts()
  res.status(status).json({ "data": products })
}

const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params
  const { status, message, product } = await productsService.getProductById(id)
  if (message) {
    return res.status(status).json({ message })
  }
  res.status(status).json({ "data": product })
}

export default {
  getAllProducts,
  getProductById
}
