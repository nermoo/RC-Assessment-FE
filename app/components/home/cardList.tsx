import React from 'react';
import { List } from 'antd';
import PropertyCard from './propertyCard/propertyCard';
// import { useGetAllPropertiesMutation } from '@/lib/features/properties/propertyApi';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

const CardList: React.FC = () => (
  <List
    pagination={{ position:'bottom', align:'center', pageSize: 6,  hideOnSinglePage:true, showTotal: (total) => `Total ${total} items`,}}
    grid={{ gutter: 16, column: 3 }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item className='!justify-center !flex'>
        <PropertyCard />
      </List.Item>
    )}
  />
);

export default CardList;