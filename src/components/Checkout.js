
import React, { useState ,useContext } from 'react'
import { MyContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import orderComplete from '../assets/orderComplete.json';
import { dataBase } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';



const Checkout = () => {

const { cart, removeItem, clear, totalCalculate } = useContext(MyContext);


const confirmPurchase = () => {

  const order = {
  }

  const ordersCollection = collection(dataBase, "orders");
  const purchase = addDoc(ordersCollection, order) 

  purchase
    .then(result => {
        toast.success("Order confirmed! " +

       "Order number: " + result.id)

    })
    .catch(error => {
        toast.error("Something went wrong")
    })

}

  const options = {
    animationData: orderComplete,
    autoplay: true,
    loop: true,
    style:{
      width: '700px',
    }
  };
    
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
      }}
      >
      {confirmPurchase()}
      <Lottie {...options}/>
      <Link to="/" className='ckeckoutLink'>Home</Link>

      </div>

    
  )
}

export default Checkout