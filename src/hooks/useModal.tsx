import { useState } from 'react';
import { Product } from '../models/Product';

export const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
    setEditingProduct(null);
  };

  return {
    isModalVisible,
    editingProduct,
    showModal,
    hideModal,
    setEditingProduct,
  };
};
