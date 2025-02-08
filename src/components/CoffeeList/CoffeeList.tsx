import { Button, Row, Col, Card, Typography, Flex, Image } from "antd";
import { Product } from "../../models/Product";

const { Text, Paragraph } = Typography;

interface CoffeeListProps {
    products: Product[];
    onEdit: (product: Product) => void;
    onDelete: (id: string) => void;
}

export const CoffeeList: React.FC<CoffeeListProps> = ({ products, onEdit, onDelete }) => {
    const isAdmin = true
    return (
        <div className="p-4 w-full max-w-3xl">
            <Row gutter={[16, 16]}>
                {products.map((product) => (
                    <Col
                        key={product.id}
                        xs={24} sm={12} md={10} lg={10} xl={10}
                    >
                        <Card
                            //   title={product.name}
                            // className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow min-h-[200px]"


                            actions={isAdmin ? [
                                <Button
                                    type="link"
                                    onClick={() => onEdit(product)}
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    Edit
                                </Button>,
                                <Button
                                    type="link"
                                    onClick={() => onDelete(product.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Delete
                                </Button>,
                            ]: []}
                        >
                            <Text className="font-bold text-4xl" >
                                {product.name}  </Text>
                            <Flex className="flex justify-between h-[4rem]">
                                <Image
                                    src={product.imageUrl}
                                    alt={product.name}
                                    width={80}
                                    height={80}
                                    className="rounded-lg"
                                />
                                <Paragraph className="w-[8rem] h-full align-center justify-center bg-red-200">
                                    {product.description}
                                </Paragraph>
                                <Flex className="w-[8rem] text-center align-center justify-center">
                                    <Text className="" style={{ fontSize: "1.80rem", fontWeight: "bold" }}>
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