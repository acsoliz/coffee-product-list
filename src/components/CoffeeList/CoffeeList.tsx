import React, { useContext } from 'react';
import { Button, Row, Col, Card, Typography, Flex, Image, Switch } from 'antd';
import { Product } from '@/src/models/Product';
import { AdminContext } from "../../state/AdminContext";


const { Text, Paragraph } = Typography;

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
                  // src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
                        style={{ backgroundColor: '#fb2c36'}}
                      >
                        Delete
                      </Button>,
                    ]
                  : []
              }
            >
              <Flex className="flex justify-between h-[4rem]">
                <Paragraph
                  className="w-full h-full flex  items-center font-bold"
                  style={{ color: 'white', fontSize: '1.2rem' }}
                >
                  {product.description}
                </Paragraph>
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
          </Col>
        ))}
      </Row>
    </div>
  );
};
