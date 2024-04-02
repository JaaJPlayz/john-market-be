import express, { Request, Response } from 'express'
import productController from '../controller/product.controller'

const productsRouter = express.Router()

productsRouter.get('/', productController.getAllProducts)
productsRouter.get('/:id', productController.getProductById)

export default productsRouter
