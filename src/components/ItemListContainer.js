import React, { useEffect, useState } from 'react'


import products from '../data/products';
import ItemList from './ItemList';

function getDatos() {
  return new Promise((resolve) => {
    setTimeout(function(){
      resolve(products);
    }, 2000);
  });
}

function ItemListContainer () {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getDatos()
    .then(rtaPromise => setItems(rtaPromise))
  }, []);

  
  return (
    <>
    <h2 className='text-center'>Books To Buy</h2>
      <ItemList items={items} />
    </>
  )
}

export default ItemListContainer;