import { create } from 'zustand';

/*Models*/ 
import { Product } from '@/src/models/Product';
import { ProductState } from '@/src/models/ProductState';

export const useZustandProductState = create<ProductState>((set, get) => ({
  products: [],

  addProduct: (product) => {
    const newProduct: Product = {
      id: Date.now().toString(),
      ...product,
    };
    set((state) => ({ products: [...state.products, newProduct] }));
    get().saveProducts();
  },

  editProduct: (id, updatedProduct) => {
    set((state) => ({
      products: state.products.map((p) =>
        p.id === id ? { ...p, ...updatedProduct } : p
      ),
    }));
    get().saveProducts();
  },

  deleteProduct: (id) => {
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    }));
    get().saveProducts();
  },

  loadProducts: () => {
    const storedProducts = localStorage.getItem('coffeeProducts');
    if (storedProducts) {
      set({ products: JSON.parse(storedProducts) });
    }
  },

  saveProducts: () => {
    localStorage.setItem('coffeeProducts', JSON.stringify(get().products));
  },
}));
