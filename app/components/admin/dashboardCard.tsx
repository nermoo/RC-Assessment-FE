import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import CreatePropertyModal from './createPropertyModal';

const DashboardCards: React.FC = () => {
    
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = (): void => setIsModalOpen(true);

  const handleCancel = (): void => setIsModalOpen(false);

    return (
        <>
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
                <span>Total Properties: 29</span>
                <span>For Sale: 23</span>
                <span>For Rent: 6</span>
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

        <CreatePropertyModal
        isModalOpen={isModalOpen}
        handleOk={handleCancel}
        handleCancel={handleCancel}
      />
        </>
    )
}

export default DashboardCards;