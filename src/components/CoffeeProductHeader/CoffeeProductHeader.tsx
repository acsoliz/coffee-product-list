import React, { useContext } from 'react';
import { Button, Flex, Switch } from 'antd';
import { MainTitle } from '../MainTitle/MainTitle';
import { AdminContext } from '../../state/AdminContext';

interface CoffeeProductHeaderProps {
  onAddProduct: () => void;
}

export const CoffeeProductHeader: React.FC<CoffeeProductHeaderProps> = ({
  onAddProduct,
}) => {
  const { isAdmin, toggleAdmin } = useContext(AdminContext);

  return (
    <Flex className="flex flex-col w-full items-center p-4 pb-6">
      <MainTitle title={'Coffee-Shop'} />
      <Flex className="w-full h-18 flex flex-col ">

        <Flex className='justify-end '>
          <Switch
          className='m-4'
            checked={isAdmin}
            onChange={toggleAdmin}
            checkedChildren="Admin"
            unCheckedChildren="User"
          />
        </Flex>
        {isAdmin && (
          <Flex
            className={`w-full justify-end  h-full transition-opacity duration-300 ${
              isAdmin ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <Button type="primary" onClick={onAddProduct} className="m-4 mr-6">
              Add Product
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
