import ProductModel,
{ ProductInputtableTypes, ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';

async function create(product:ProductInputtableTypes): Promise<Product> {
  const newProduct = await ProductModel.create(product);
  return newProduct.dataValues;
}

async function get(): Promise<ProductSequelizeModel[]> {
  const allProducts = await ProductModel.findAll();
  return allProducts;
}

export default { create, get };