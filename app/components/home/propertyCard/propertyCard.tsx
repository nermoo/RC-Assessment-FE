import React from 'react';
import { Card, Typography } from 'antd';
import { EnvironmentOutlined, HomeOutlined } from '@ant-design/icons';

import './propertyCard.css'

const { Title, Text } = Typography;

const PropertyCard = () => {
  const property = {
    title: "Villa in Coral Gables",
    address: "Deering Bay Drive, Coral Gables, FL 33158, USA",
    price: "$825,000",
    size: "3500",
    type: "Villa",
    status: "For Rent",
    image: "https://officebanao.com/wp-content/uploads/2023/10/Luxury_office_interior-1024x576.jpg", // Replace with the actual image URL or use a placeholder
  };

  return (
    <Card
     hoverable
      className="max-w-md rounded-xl overflow-hidden cardWrapper"
      cover={<img alt="Property" src={property.image} className="converImg object-cover" />}
    >

      <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-sm">
        <span className="font-semibold">{property.status}</span>
      </div>
 
      <div className="mt-4">
        <Title level={4}>{property.title}</Title>
        <Text type="secondary">
          <EnvironmentOutlined className="mr-1 !text-blue-500"/> {property.address}
        </Text>
      </div>

      <div className="mt-2">
        <Text className="!text-blue-500 font-semibold">{property.type}</Text>
      </div>

      <div className="flex justify-between items-center mt-4">
        <Text className="!text-xl font-semibold">{property.price}</Text>
        <div className="flex items-center text-gray-500">
          <HomeOutlined className="mr-1 !text-blue-500" />
          <span><span className='font-bold'>{property.size}</span> sq ft</span>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;
