import React, { useContext } from 'react'
import { MyContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Bag from '../assets/bag.json';



const ShoppingBasket = () => {
    
    const { cart, removeItem, clear, totalCalculate } = useContext(MyContext);

    const options = {
        animationData: Bag,
        autoplay: true,
        loop: true,
        style: {
            width: '500px'
        }
    };

    if(cart.length === 0){
        return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}
        >
            
            
            <Lottie {...options}/>
            <Link to="/" className='ckeckoutLink'>Home</Link>
        </div>
        );
      }
    


    return (
        <>

    <div >
        {cart.map((product) => (
            <div key={product.id} className='cartDetail'>
                <div className='cartImg'>
                 <img src={product.imageUrl} alt={product.name} width="150px" />
                </div>
                <div className='cartDescription'>
                    
                    <h4>Title: {product.title}</h4>
                    <h5>Author: {product.author}</h5>
                    <h6>Quantity: {product.quantity}</h6>
                    <h6>£ {product.price}</h6>
                    
                </div>
                <div>
                    <h4>Sub total: £ {product.price * product.quantity}</h4>
                    
                    <button onClick={() => removeItem(product.id)} className='btnRemove' >Remove</button>
                </div>
                </div>
        ))}
        </div>
        <div className='total'>
                    <h3>Total : £{totalCalculate()}</h3>
                    <button onClick={clear} className='btnCart'>Clean basket</button>
                    <button onClick={clear} className='btnCart1'><Link to="/checkout" className='btnCart1'>Confirm order</Link></button>
    </div>
              
        
    
    </>
    );
};

export default ShoppingBasket;


