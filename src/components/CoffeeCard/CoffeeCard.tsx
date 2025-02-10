import React, { useContext } from 'react';
import { Card, Button, Typography, Flex } from 'antd';
import { AdminContext } from '@/src/state/AdminContext';
import { Product } from '@/src/models/Product';

const { Text, Paragraph } = Typography;

interface CoffeeCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({
  product,
  onEdit,
  onDelete,
}) => {
  const { isAdmin } = useContext(AdminContext);

  return (
    <Card
      className=" rounded-lg shadow-sm hover:shadow-md transition-shadow min-h-[200px]"
      style={{ border: '4px solid cyan', backgroundColor: '#1e2939' }}
      title={
        <Text
          className="w-full h-full flex items-center justify-center font-bold "
          style={{ fontSize: '1.5rem', color: 'white' }}
        >
          {product.name}
        </Text>
      }
      cover={
        <img
          alt="example"
          /* src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"*/
          className="h-[200px] object-cover rounded-g  p-2"
          src={product.imageUrl}
          style={{ borderRadius: '10px' }}
        />
      }
      actions={
        isAdmin
          ? [
              <Button
                key={'edit-button'}
                type="primary"
                onClick={() => onEdit(product)}
              >
                Edit
              </Button>,
              <Button
                key={'delete-button'}
                type="primary"
                onClick={() => onDelete(product.id)}
                style={{ backgroundColor: '#fb2c36' }}
              >
                Delete
              </Button>,
            ]
          : []
      }
    >
      <Flex className="flex justify-between h-[4rem]">
        <Text
          className="w-full h-full flex  items-center font-bold"
          style={{ color: 'white', fontSize: '1.1rem' }}
        >
          {product.description}
        </Text>
        <Flex className="w-[8rem] flex items-center justify-center">
          <Text
            className=""
            style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            € {product.price}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};
