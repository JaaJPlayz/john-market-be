import fs from 'fs/promises'
import path from 'path'
import '../db/products.json'
import Product from '../types/Product.type'

const productsFilePath = path.join(__dirname, '../db/products.json')

const getAllProducts = async () => {
  const products = await fs.readFile(productsFilePath)
  return JSON.parse(products.toString())
}

const getProductById = async (id: string) => {
  const products = await getAllProducts()
  return products.find((product: Product) => product.id === Number(id))
}

const getProductByQuery = async (query: string) => {
  const products = await getAllProducts();
  const fixedQuery = query.toLowerCase().trim();
 
  const filteredProducts = products.filter((product: Product) => {
     const productName = product.name.toLowerCase().trim();
     return productName.includes(fixedQuery);
  });
 
  return filteredProducts;
 };

export default {
  getAllProducts,
  getProductById,
  getProductByQuery
}
