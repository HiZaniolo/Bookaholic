import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


import products from '../data/products';
import ItemList from './ItemList';

const getDatos = (id) => {
  return new Promise((resolve, reject) =>{
    const itemsFilter = products. filter((prod) => prod.category === id);
    setTimeout(() => {
      id ? resolve(itemsFilter) : resolve (products);
    }, 2000);
  });
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const {idCategory} = useParams();

  useEffect(() => {
    setLoading(true);
    getDatos(idCategory)
    .then((rtaPromise) => {
      setItems(rtaPromise);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });

    return () => {
      setItems([]);
    };
  }, [idCategory]);


  return (
    <>
    <h2 className='text-center'>Books To Buy</h2>
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;