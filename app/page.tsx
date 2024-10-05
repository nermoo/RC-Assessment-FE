'use client'
import React from 'react';
import PropertySearchBar from './components/home/searchBar/searchBar';
import CardList from './components/home/cardList';

const Home = () => {
  
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