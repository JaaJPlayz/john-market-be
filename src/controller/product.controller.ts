import productsService from '../service/products.service'
import { type Request, type Response } from 'express'

const getAllProducts = async (req: Request, res: Response) => {
  const products = await productsService.getAllProducts()
  res.json(products)
}

const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const product = await productsService.getProductById(id)
    res.json(product)
  } catch (error: any) {
    if (error.message === 'ID is required' || error.message === 'ID must be a number') {
      res.status(400).json({ message: error.message })
    }
    if (error.message === 'Product not found') {
      res.status(404).json({ message: error.message })
    }
    res.status(500).json({ message: error.message })
  }
}

export default {
  getAllProducts,
  getProductById
}
