import { Product } from '../models/Product';
import { useProductState } from '../state/ProductStateContext';

export const useProductForm = () => {
  const { addProduct, editProduct } = useProductState();

  const handleSave = (
    editingProduct: Product | null,
    values: Omit<Product, 'id'>
  ) => {
    if (editingProduct) {
      editProduct(editingProduct.id, values);
    } else {
      addProduct(values);
    }
  };

  return { handleSave };
};
