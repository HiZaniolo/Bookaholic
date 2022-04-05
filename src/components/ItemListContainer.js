import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import products from '../data/products';
import ItemList from './ItemList';

import { dataBase } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { toast } from 'react-toastify';



const getDatos = (id) => {
  return new Promise((resolve, reject) =>{
    const itemsFilter = products.filter((prod) => prod.category === id);
    setTimeout(() => {
      id ? resolve(itemsFilter) : resolve (products);
    }, 1600);
  });
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const {idCategory} = useParams();

  useEffect(() => {

    const productsCollection = collection(dataBase,"products")
    const pedidoDb = getDocs(productsCollection)

    pedidoDb
        .then((result)=>{
            const arrayResults = result.docs.map((doc) =>{
              return doc.data()
            })
            setItems(arrayResults)
            setLoading(false)

            console.log(arrayResults)
        })
        .catch(()=>{
          toast.error("Something went wrong")
        });

    


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
    {loading ? <Spinner className='spinner' animation="border" /> : <ItemList items={items} />}
    </>
  );
}

export default ItemListContainer;