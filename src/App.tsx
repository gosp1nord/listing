import React from 'react';
import './App.css';
import { ProductCard } from './components/models';
import { Listing } from './components/ListingFC';
import { data } from './components/data';

const products: ProductCard[] = data

function App() {
  console.log('data -', data)
  return (
    <>
    <Listing items={products}/>
    </>
  );
}

export default App;
