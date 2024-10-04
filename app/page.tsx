'use client'
import React, { useEffect } from 'react';
import PropertySearchBar from './components/home/searchBar/searchBar';
import CardList from './components/home/cardList';
import { useGetAllPropertiesMutation } from '@/lib/features/properties/propertyApi';

const Home = () => {
  const [getAllProperties, { data, isLoading, isError }] = useGetAllPropertiesMutation();

  useEffect(()=>{
    getAllProperties();
  },[])

  console.log(data,isLoading,isError);
  

  
  return(
  <div>
    <PropertySearchBar/>
    <div className='my-12 mx-52'>
    <CardList/>
    </div>
  </div>
  );
};

export default Home;