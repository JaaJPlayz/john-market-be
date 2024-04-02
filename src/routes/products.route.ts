import express, { Request, Response } from 'express'
import productController from '../controller/product.controller'

const productsRouter = express.Router()

// GET all products
productsRouter.get('/', productController.getAllProducts)

// GET product by id
productsRouter.get('/:id', productController.getProductById)

export default productsRouter
