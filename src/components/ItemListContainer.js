import React, { useEffect, useState } from 'react'

import ItemCount from './ItemCount';
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
    <h4>Listado de productos</h4>
      <ItemCount />
      <ItemList items={items} />
    </>
  )
}

export default ItemListContainer