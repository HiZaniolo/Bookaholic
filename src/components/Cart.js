import React, { useContext } from 'react'
import { MyContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import { dataBase } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import products from '../data/products';


const ShoppingBasket = () => {
    
    const { cart, removeItem, clear, totalCalculate } = useContext(MyContext);

    const confirmPurchase = () => {
        
        const order = {
           
            // items : cart,
            // total : totalCalculate(),
            // date : serverTimestamp()
        }
    
        const ordersCollection = collection(dataBase, "orders");
        // const productsCollection = collection(dataBase, "products");
        const purchase = addDoc(ordersCollection, order) 
        
        purchase
          .then(result => {
              console.log(result)
              toast.success("Order confirmed! " +
                
             "Order number: " + result.id)
              
          })
          .catch(error => {
              toast.error("Something went wrong")
          })

    }
      

    return (
        <>

    <div>
        {cart.map((product) => (
            <div key={product.id}>

            <img src={product.imageUrl} alt={product.name} width="150px" />
                <div>
                    
                    <h3>Title: {product.title}</h3>
                    <h4>Quantity: {product.quantity}</h4>
                    <h4>$ {product.price}</h4>
                </div>
                <div>
                    <h3>Your order</h3>
                    <h4>{product.quantity}</h4>
                    <h4>Sub total: $ {product.price * product.quantity}</h4>
                    <button onClick={() => removeItem(product.id)}>Remove</button>
                </div>
                <div>
                    <h2>Total : ${totalCalculate()}</h2>
                    <button onClick={clear}>Clean basket</button>
                    <button onClick={confirmPurchase}>Confirm my purchase</button>
                </div>
            </div>    
        ))}
    </div>
    </>
    );
};

export default ShoppingBasket;


