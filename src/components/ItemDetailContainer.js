import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import products from '../data/products';
import ItemDetail from './ItemDetail';
import { dataBase } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { toast } from 'react-toastify';


// const getDatos = (id) => {
//   return new Promise((resolve, reject) => {
//     const item = products.find((prod) => prod.id === parseInt(id));
//     setTimeout(() => {
//       resolve(item);
//     }, 1500);
//   });
// };

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


    // setLoading(true);
    // getDatos(id)
    // .then((rtaPromise) => {
    //   setItem(rtaPromise);
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
    // .finally(() => {
    //   setLoading(false);
    // });

    // return () => {
    //   setItem({});
    // };
  }, [id]);

  return (
    <>
    
    {loading ? <Spinner className='spinner' animation="border" /> : <ItemDetail item={item} />}
    </>
  )
}

export default ItemDetailContainer;