import React, { useState, useEffect } from 'react'

import products from '../data/products';
import ItemDetail from './ItemDetail';



function getDatos() {
  return new Promise((resolve) => {
    setTimeout(function(){
      resolve(products);
    }, 2000);
  });
}

function ItemDetailContainer () {
  const [item, setItem] = useState({});

  useEffect(() => {
    getDatos()
    .then(rtaPromise => setItem(rtaPromise))
  }, []);

  
  return (
    <>
    <h2 className='text-center'>Book Details</h2>
      <ItemDetail item={item} />
    </>
  )
}

export default ItemDetailContainer;