import React, { useContext } from 'react'
import { MyContext } from '../context/CartContext'
import { Link } from 'react-router-dom';



const ShoppingBasket = () => {
    const { cart, removeItem, clear, totalCalculate } =
    useContext(MyContext);

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
                </div>
            </div>    
        ))}
    </div>
    </>
    );
};

export default ShoppingBasket;


