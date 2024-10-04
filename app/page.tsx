'use client'
import React, { useEffect } from 'react';
import PropertySearchBar from './components/home/searchBar/searchBar';
import PropertyCard from './components/home/propertyCard/propertyCard';
import { useGetPaymentInfoMutation } from '@/lib/features/properties/propertyApi';

const Home = () => {
  const [getPaymentInfo, { data, isLoading, isError }] = useGetPaymentInfoMutation();

  useEffect(()=>{
    getPaymentInfo('213add');
  },[])

  console.log(data,isLoading,isError);
  

  
  return(
  <div>
    <PropertySearchBar/>
    <div className='m-6'>
    <PropertyCard/>
    </div>
  </div>
  );
};

export default Home;