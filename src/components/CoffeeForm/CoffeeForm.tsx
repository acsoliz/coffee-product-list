import React from 'react';
import { Button, Form, Input, InputNumber, Card } from 'antd';
import { Product } from '@/src/models/Product';

interface CoffeeFormProps {
  onSave: (values: Omit<Product, 'id'>) => void;
  editingProduct?: Product;
}

export const CoffeeForm: React.FC<CoffeeFormProps> = ({
  onSave,
  editingProduct,
}) => {
  const [form] = Form.useForm<Omit<Product, 'id'>>();

  // Resetear el formulario cuando cambia el producto a editar
  React.useEffect(() => {
    if (editingProduct) {
      form.setFieldsValue(editingProduct);
    } else {
      form.resetFields();
    }
  }, [editingProduct, form]);

  const handleSubmit = (values: Omit<Product, 'id'>) => {
    onSave(values);
    form.resetFields();
  };

  return (
    <Card className="m-4 bg-gray-50 shadow-sm w-full max-w-md p-4">
      <Form
        form={form}
        initialValues={editingProduct || {}}
        onFinish={handleSubmit}
        layout="vertical"
        data-testid="coffee-form"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter the product name' }]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: 'Please enter the product description' },
          ]}
        >
          <Input placeholder="Description" />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            { required: true, message: 'Please enter the product price' },
          ]}
        >
          <InputNumber placeholder="Price" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="Image URL"
          name="imageUrl"
          rules={[
            { required: true, message: 'Please enter the product image URL' },
          ]}
        >
          <Input placeholder="Image URL" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" data-testid="submit-button">
            {editingProduct ? 'Update' : 'Add'} Product
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
