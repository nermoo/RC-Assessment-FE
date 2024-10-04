'use client'
import React, { useState } from 'react';
import { Table, Button, Popconfirm } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import CreatePropertyModal from '../components/admin/createPropertyModal';
import { Property } from '@/lib/features/properties/propertyApi';


const PropertyAdminPage: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [properties, setProperties] = useState<Property[]>();

  const showModal = (): void => setIsModalOpen(true);

  const handleCancel = (): void => setIsModalOpen(false);

  const handleDelete = (id: string): void => {
    setProperties(properties?.filter((property) => property.id !== id));
  };

  const columns = [
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
    <div className="p-6 space-y-6">
      <div className="flex justify-around items-center">
        <div className="flex gap-4">
          <div 
            className="flex items-center justify-center bg-blue-500 text-white p-4 rounded-lg shadow-md w-64 cursor-pointer hover:bg-blue-600" 
            onClick={showModal}
          >
            <h3 className="font-bold text-lg"><PlusOutlined/> New Property</h3>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md w-64">
            <h3 className="font-bold text-lg mb-2">Property Summary</h3>
            <p>Total Properties: {properties?.length}</p>
            <p>For Sale: {properties?.filter((p) => p.status === 'For Sale').length}</p>
            <p>For Rent: {properties?.filter((p) => p.status === 'For Rent').length}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md w-64">
            <h3 className="font-bold text-lg mb-2">Recent Activity</h3>
            <ul className="list-disc pl-4">
              <li>Added Property 1 - 5 mins ago</li>
              <li>Edited Property 2 - 10 mins ago</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md w-64">
            <h3 className="font-bold text-lg mb-2">Notifications</h3>
            <ul className="list-disc pl-4">
              <li>New user registered - 2 mins ago</li>
              <li>Property 3 is now available for rent</li>
            </ul>
          </div>
        </div>
    </div>


      <div className="bg-white shadow-md rounded-lg p-6">
        <Table dataSource={properties} columns={columns} pagination={{ pageSize: 5 }} />
      </div>

      <CreatePropertyModal
        isModalOpen={isModalOpen}
        handleOk={handleCancel}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default PropertyAdminPage;