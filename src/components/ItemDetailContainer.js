import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import products from '../data/products';
import ItemDetail from './ItemDetail';


const getDatos = (id) => {
  return new Promise((resolve, reject) => {
    const item = products.find((prod) => prod.id === parseInt(id));
    setTimeout(() => {
      resolve(item);
    }, 1000);
  });
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getDatos(id)
    .then((rtaPromise) => {
      setItem(rtaPromise);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });

    return () => {
      setItem({});
    };
  }, [id]);

  return (
    <>
    <h2 className='text-center'>Book Details</h2>
      <ItemDetail item={item} />
    </>
  )
}

export default ItemDetailContainer;