import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

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
    .then(rtaPromise => setItem(rtaPromise [0]))
  }, []);

  
  return (
    <>
    <h2 className='text-center'>Book Details</h2>
      <ItemDetail item={item} />
    </>
  )
}

export default ItemDetailContainer;