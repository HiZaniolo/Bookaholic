import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import ItemList from './ItemList';

import { dataBase } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { toast } from 'react-toastify';


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const {idCategory} = useParams();

  useEffect(() => {

    if(!idCategory){

    const productsCollection = collection(dataBase,"products")
    const pedidoDb = getDocs(productsCollection)

    pedidoDb
        .then((result) => {
          setItems(result.docs.map((doc) => {
            return doc.data()
          }))
        })
        .catch(()=>{
          toast.error("Something went wrong")
        })
        .finally(() => {
          setLoading(false);
        })
      }else{
        
        const productsCollection = collection(dataBase,"products")
        const filter = query(productsCollection,where("category", "==", idCategory))
        const pedidoDb = getDocs(filter)

        pedidoDb
        .then((result) => {
          setItems(result.docs.map((doc) => {
            return doc.data()
          }))
        })
        .catch(()=>{
          toast.error("Something went wrong")
        })
        .finally(() => {
          setLoading(false);
        })
      
      }

  }, [idCategory]);


  return (
    <>
    
    {loading ? <Spinner className='spinner' animation="border" /> : <ItemList items={items} />}
    </>
  );
}

export default ItemListContainer;