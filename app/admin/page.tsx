'use client'
import React, { useState } from 'react';
import { Table, Button, Popconfirm, Tag } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import CreatePropertyModal from '../components/admin/createPropertyModal';
import { Property } from '@/lib/features/properties/propertyApi';
import { SupportTickets } from '@/constants/dummyData';
import { LabelColors } from '@/constants/consts';


const PropertyAdminPage: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [properties, setProperties] = useState<Property[]>();

  const showModal = (): void => setIsModalOpen(true);

  const handleCancel = (): void => setIsModalOpen(false);

  const handleDelete = (id: string): void => {
    setProperties(properties?.filter((property) => property.id !== id));
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
  
  const supportTableColumns = [
    {
      title: 'Ticket Number',
      dataIndex: 'ticketNumber',
      key: 'ticketNumber',
    },
    {
      title: 'Label',
      dataIndex: 'label',
      key: 'label',
      render: (label :string) => (
        <Tag color={`${LabelColors[label]}`}>{label}</Tag>
      ),
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];
  

  return (
    <div className="p-6 space-y-6">
      <div className="flex  items-center gap-6">
  <div className="flex justify-between gap-8 w-full">

    <div
      className="flex items-center justify-center bg-blue-500 text-white p-4 rounded-lg shadow-md w-80 cursor-pointer hover:bg-blue-600" 
      onClick={showModal}
    >
      <h3 className="font-bold text-lg"><PlusOutlined /> New Property</h3>
    </div>

    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-80">
      <h3 className="font-bold text-lg mb-2">Property Summary</h3>
      <div className="flex flex-col">
        <span>Total Properties: {properties?.length}</span>
        <span>For Sale: {properties?.filter((p) => p.status === 'For Sale').length}</span>
        <span>For Rent: {properties?.filter((p) => p.status === 'For Rent').length}</span>
      </div>
      <span className="text-gray-500 text-sm mt-2">Last updated: 5 mins ago</span>
    </div>

    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-80">
      <h3 className="font-bold text-lg mb-2">Recent Activity</h3>
      <ul className="list-disc pl-4">
        <li className="flex justify-between">
          <span>Added Property 1</span>
          <span className="text-gray-500 text-sm">5 mins ago</span>
        </li>
        <li className="flex justify-between">
          <span>Edited Property 2</span>
          <span className="text-gray-500 text-sm">10 mins ago</span>
        </li>
      </ul>
    </div>
    
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-80">
      <h3 className="font-bold text-lg mb-2">Financial Overview</h3>
      <div className="flex flex-col">
        <span>Total Revenue: $XX,XXX</span>
        <span>Pending Payments: $X,XXX</span>
        <span>Total Expenses: $X,XXX</span>
      </div>
      <span className="text-gray-500 text-sm mt-2">Last updated: 15 mins ago</span>
    </div>

    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-80">
      <h3 className="font-bold text-lg mb-2">Notifications</h3>
      <ul className="list-disc pl-4">
        <li className="flex justify-between">
          <span>New user registered</span>
          <span className="text-gray-500 text-sm">2 mins ago</span>
        </li>
        <li className="flex justify-between">
          <span>Property 3 is now available for rent</span>
          <span className="text-gray-500 text-sm">5 mins ago</span>
        </li>
      </ul>
    </div>
  </div>
</div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <Table loading={false} dataSource={properties} columns={propertyTableColumns} pagination={{ hideOnSinglePage:true, pageSize:6 }} />
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <Table dataSource={SupportTickets} columns={supportTableColumns} pagination={{ hideOnSinglePage:true, pageSize: 4 }} />
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