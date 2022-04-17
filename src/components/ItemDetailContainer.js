import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import ItemDetail from './ItemDetail';
import { dataBase } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { toast } from 'react-toastify';


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [rateActual, setRateActual] = useState(0)

  useEffect(() => {
    const productsCollection = collection(dataBase,"products")
    const filter = query(productsCollection,where("id", "==", Number(id)))
    const pedidoDb = getDocs(filter)

    pedidoDb
        .then((result) => {
          setItem(result.docs.map((doc) => {
            return doc.data()
          })[0])
        })
        .catch(()=>{
          toast.error("Something went wrong")
        })
        .finally(() => {
          setLoading(false);
        })

  }, [id]);

  return (
    <>
    
    {loading ? <Spinner className='spinner' animation="border" /> : <ItemDetail item={item} />}
    </>
  )
}

export default ItemDetailContainer;