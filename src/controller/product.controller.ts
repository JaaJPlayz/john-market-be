import productsService from '../service/products.service'
import { Request, Response } from 'express'

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

const getProductByQuery = async (req: Request, res: Response) => {
  const { query } = req.params
  const { status, message, products } = await productsService.getProductByQuery(query)
  if (message) {
    return res.status(status).json({ message })
  }
  res.status(status).json({ "data": products })
}

export default {
  getAllProducts,
  getProductById,
  getProductByQuery
}
