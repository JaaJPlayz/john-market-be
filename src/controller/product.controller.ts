import productsService from "../service/products.service"

const getAllProducts = async () => {
  const products = await productsService.getAllProducts();
  return products
}

export default {
  getAllProducts
}