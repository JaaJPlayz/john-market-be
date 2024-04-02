import productModel from '../model/products.model'

const getAllProducts = async () => {
  const products = await productModel.getAllProducts()
  return products
}

const getProductById = async (id: string) => {
  if (!id) {
    throw new Error('ID is required')
  }

  if (isNaN(Number(id))) {
    throw new Error('ID must be a number')
  }

  const product = await productModel.getProductById(id)

  if (!product) {
    throw new Error('Product not found')
  }

  return product
}

export default {
  getAllProducts,
  getProductById
}
