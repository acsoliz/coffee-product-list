import { Product } from '../models/Product';

export interface ProductState {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  editProduct: (id: string, updatedProduct: Omit<Product, 'id'>) => void;
  deleteProduct: (id: string) => void;
  loadProducts: () => void;
  saveProducts: () => void;
  saveDefaultProducts: () => void;
}
