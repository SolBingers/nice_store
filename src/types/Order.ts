import { Product } from './Product';

export interface Order {
  id: number;
  userId: string;
  products: Product[];
  createdAt: Date;
  updatedAt: Date;
  address: string;
  price: number;
}
