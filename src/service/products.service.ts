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

const getProductByQuery = async (query: string) => {
  if (!query || query.trim() === '') {
    return { status: 400, message: 'Query is required' }
  }

  const products = await productModel.getProductByQuery(query)

  if (products.length === 0) {
    return { status: 404, message: 'Product not found' }
  }

  return { status: 200, products }
}

export default {
  getAllProducts,
  getProductById,
  getProductByQuery
}
