import express from 'express'
import productController from '../controller/product.controller'

const productsRouter = express.Router()

productsRouter.get('/', productController.getAllProducts)
productsRouter.get('/:id', productController.getProductById)
productsRouter.get('/search/:query', productController.getProductByQuery)

export default productsRouter
