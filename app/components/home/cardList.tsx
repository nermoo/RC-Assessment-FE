import React from 'react';
import { List } from 'antd';
import PropertyCard from './propertyCard/propertyCard';
import { useGetAllPropertiesQuery } from '@/lib/features/properties/propertyApi';

const CardList: React.FC = () => {


  const { data, isLoading, isError } = useGetAllPropertiesQuery();
  console.log( data,isError);
  

  return (<>
  <List
    loading={isLoading}
    pagination={{ position:'bottom', align:'center', pageSize: 6,  hideOnSinglePage:true, showTotal: (total) => `Total ${total} items`,}}
    grid={{ gutter: 16, column: 3 }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item className='!justify-center !flex'>
        <PropertyCard property={item}/>
      </List.Item>
    )}
  />
  </>)
};

export default CardList;