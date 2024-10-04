import React, { useState } from 'react';
import { Select, Button, Form, Divider, Flex } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './searchBar.css';

const { Option } = Select;

const PropertySearchBar = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationChange = (value: React.SetStateAction<null>) => {
    setSelectedLocation(value);
  };

  const handleSubmit = () => {
    if (selectedLocation) {
      alert(`Selected Location: ${selectedLocation}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-24 bg-cover bg-center"
         style={{ backgroundImage: 'url("https://officebanao.com/wp-content/uploads/2023/10/Luxury_office_interior-1024x576.jpg")' }}>
      <h1 className="text-3xl text-white mb-4">Looking To Buy or Rent a Property?</h1>
      <h2 className="text-3xl text-white mb-6">Find Your Dream Home</h2>

    <Divider className='bg-white' style={{ width: '10%', minWidth: '10%', margin: '10px auto' }} />

        <div  className="bg-white p-4 rounded-lg shadow-lg m-4 w-full max-w-fit flex flex-nowrap">
        <Flex justify='space-between'>
        <Form className='w-full ' layout="inline" onFinish={handleSubmit}>

            <Form.Item>
            <Select
                placeholder="All Main Locations"
                onChange={handleLocationChange}
                className="selectDropdwn"
                // style={{ width: 200, height:50 }}
                allowClear
            >
                <Option value="new_york">New York</Option>
                <Option value="los_angeles">Los Angeles</Option>
                <Option value="chicago">Chicago</Option>
                <Option value="houston">Houston</Option>
            </Select>
            </Form.Item>

            {/* Status Dropdown (Not functional) */}
            <Form.Item >
            <div className='w-1/ h-12'>
            <Select
                placeholder="All Status"
                className="selectDropdwn"
                disabled
            >
                <Option value="rent">Rent</Option>
                <Option value="buy">Buy</Option>
            </Select>
            </div>
            </Form.Item>

            {/* Type Dropdown (Not functional for now) */}
            <Form.Item>
            <Select
                placeholder="All Types"
                className="selectDropdwn"
                disabled
            >
                <Option value="apartment">Apartment</Option>
                <Option value="house">House</Option>
            </Select>
            </Form.Item>

            {/* Search Buttons */}
            <Form.Item>
            <Button
                // eslint-disable-next-line @next/next/no-img-element
                icon={<img src="/icons/search.png" alt="Search" className="w-5 h-5" />}
                type="primary"
                size={'large'}
                className='custom-button plusBtn bg-sky-500/50'
                />
              </Form.Item>
              <Form.Item className='searchBtn'>
            <Button
                className='custom-button'
                type="primary"
                htmlType="submit"
                // disabled={!selectedLocation}
                icon={<SearchOutlined />}
            >
                Search
            </Button>
            </Form.Item>

            {/* Location Dropdown */}
        </Form>
          </Flex>
        </div>
    </div>
  );
};

export default PropertySearchBar;
