import React from 'react';
import { Button, Flex } from 'antd';
import { MainTitle } from '../MainTitle/MainTitle';

interface CoffeeProductHeaderProps {
  onAddProduct: () => void;
}

export const CoffeeProductHeader: React.FC<CoffeeProductHeaderProps> = ({
  onAddProduct,
}) => {
  return (
    <Flex className="flex flex-col w-full items-center p-4">
      <MainTitle title={'Coffee Product List'} />
      <Button type="primary" onClick={onAddProduct} className="mb-4">
        Add Product
      </Button>
    </Flex>
  );
};
