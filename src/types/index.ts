export interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  stock: number;
  origin: string;
  isOrganic: boolean;
  description: string;
  nutritionalValue: string;
  expiryDays: number;
  photo: string;
  __v: number;
}

export interface BasketItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  grocery: Product;
}

export interface Basket {
  _id: string;
  userId: string;
  totalAmount: number;
  __v: number;
  items: BasketItem[];
}

export interface Order {
  _id: string;
  items: {
    product: Product;
    quantity: number;
    price: number;
    name: string;
  }[];
  total_amount: number;
  currency: string;
  customer_id: string;
  customer_name: string;
  customer_phone: string;
  delivery_address: string;
  is_delivery: boolean;
  __v: number;
}

export type ProductsRes = Promise<{ groceries: Product[] }>;
export type ProductRes = Promise<{ grocery: Product }>;
export type URLRes = Promise<{ url: string }>;
export type BasketRes = Promise<{ cart: Basket }>;
export type OrderRes = Promise<{ orders: Order[] }>;
