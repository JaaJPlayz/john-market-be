import productModel from '../model/products.model'

const getAllProducts = async () => {
  const products = await productModel.getAllProducts()
  return { status: 200, products }
}

const getProductById = async (id: string) => {
  if (!id) {
    return { status: 400, message: 'ID is required' }
  }

  if (isNaN(Number(id))) {
    return { status: 400, message: 'ID must be a number' }
  }

  const product = await productModel.getProductById(id)

  if (!product) {
    return { status: 404, message: 'Product not found' }
  }

  return {status: 200, product}
}

export default {
  getAllProducts,
  getProductById
}
