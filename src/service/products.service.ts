import productModel from '../model/products.model'

const getAllProducts = async () => {
  const products = await productModel.getAllProducts();
  return products
}

export default {
  getAllProducts
}