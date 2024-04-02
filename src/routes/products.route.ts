import express from "express"
import { Request, Response } from "express"
import productController from "../controller/product.controller"

const productsRouter = express.Router()

// GET all products
productsRouter.get("/", async (req: Request, res: Response) => {
  const products = await productController.getAllProducts()
  res.json(products)
})

export default productsRouter