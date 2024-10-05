import React from 'react';
import { Button, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Property, useGetAllPropertiesQuery } from '@/lib/features/properties/propertyApi';
import CommonTable from '../common/table';

const PropertyTable: React.FC = () => {

  const { data: propertiesList, isLoading } = useGetAllPropertiesQuery();

  const handleDelete = (id: string): void => {
    // setProperties(properties?.filter((property) => property.id !== id));
    console.log(id);
    
  };

  const propertyTableColumns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price (LKR)',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Area (sq ft)',
      dataIndex: 'area',
      key: 'area',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: unknown, record: Property) => (
        <>
          <Button icon={<EditOutlined />} className="mr-2">Edit</Button>
          <Popconfirm
            title="Are you sure you want to delete this property?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button icon={<DeleteOutlined />} danger>Delete</Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <CommonTable 
      dataSource={propertiesList || []} 
      columns={propertyTableColumns} 
      paginationConfig={{ hideOnSinglePage: true, pageSize: 6 }} 
      loading={isLoading} 
    />
  );
};

export default PropertyTable;
