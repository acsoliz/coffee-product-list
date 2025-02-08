/*Dependencis*/
import React from 'react';
import { Modal } from 'antd';

/*Components*/
import { CoffeeForm, CoffeeList, CoffeeProductHeader } from '../components';

/*Hooks*/
import { useProductForm, useModal } from '../hooks';
import { useProductState } from '../state/ProductStateContext';

/*Product DTO*/
import { Product } from '../models/Product';

export const CoffeeProductView: React.FC = () => {
  const { products, deleteProduct } = useProductState();
  const {
    isModalVisible,
    editingProduct,
    showModal,
    hideModal,
    setEditingProduct,
  } = useModal();

  const { handleSave } = useProductForm();

  const onSave = (values: Omit<Product, 'id'>) => {
    handleSave(editingProduct, values);
    hideModal();
  };
  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    showModal();
  };

  return (
    <>
      <CoffeeProductHeader onAddProduct={showModal} />

      <Modal
        title={editingProduct ? 'Edit Product' : 'Add Product'}
        open={isModalVisible}
        onCancel={hideModal}
        footer={null}
      >
        <CoffeeForm
          onSave={onSave}
          editingProduct={editingProduct || undefined}
        />
      </Modal>

      <CoffeeList
        products={products}
        onEdit={handleEdit}
        onDelete={(id) => deleteProduct(id)}
      />
    </>
  );
};
