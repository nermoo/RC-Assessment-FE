'use client'
import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useGetPaymentInfoMutation } from '@/lib/features/properties/propertyApi';

const Home = () => {
  const [getPaymentInfo, { data, isLoading, isError }] = useGetPaymentInfoMutation();

  useEffect(()=>{
    getPaymentInfo('213add');
  },[])

  console.log(data,isLoading,isError);
  

  
  return(
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
  );
};

export default Home;