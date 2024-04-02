import fs from 'fs/promises'
import path from 'path'
import '../db/products.json'

const productsFilePath = path.join(__dirname, '../db/products.json')

const getAllProducts = async () => {
  const products = await fs.readFile(productsFilePath)
  return JSON.parse(products.toString())
}

const getProductById = async (id: string) => {
  const products = await getAllProducts()
  return products.find((product: any) => product.id === Number(id))
}

export default {
  getAllProducts,
  getProductById
}
