import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';
import { OrderList } from '../types/OrderList';

async function get(): Promise<OrderList[]> {
  const allOrders: OrderSequelizeModel[] = await OrderModel.findAll();
  const ordersResponse = allOrders.map(
    async (order: OrderSequelizeModel): Promise<OrderList> => {
      const allProducts = await ProductModel.findAll({ where: { orderId: order.dataValues.id } });
      const productIds = allProducts.map(
        (product: ProductSequelizeModel): number => product.dataValues.id,
      );
      return {
        id: order.dataValues.id,
        userId: order.dataValues.userId,
        productIds,
      };
    },
  );
  const response = await Promise.all(ordersResponse);
  return response;
}

export default { get };