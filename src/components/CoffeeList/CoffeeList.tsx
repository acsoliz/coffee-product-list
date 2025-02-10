import React, { useContext } from 'react';
import { Row, Col } from 'antd';
import { Product } from '@/src/models/Product';
import { AdminContext } from '../../state/AdminContext';
import { CoffeeCard } from '../CoffeeCard/CoffeeCard';

interface CoffeeListProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export const CoffeeList: React.FC<CoffeeListProps> = ({
  products,
  onEdit,
  onDelete,
}) => {
  const { isAdmin } = useContext(AdminContext);

  return (
    <div className="p-4 w-full h-[100v] rounded-lg  border-4 border-cyan-500 mt-4">
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col
            key={product.id}
            xs={24}
            sm={12}
            md={10}
            lg={8}
            xl={8}
            className="bg-gray-800"
          >
            <CoffeeCard product={product} onEdit={onEdit} onDelete={onDelete} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
