import React,{ useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { MyContext } from '../context/CartContext';

const ItemDetail = ({ item }) => {
const [quantity, setQuantity] = useState(0);

const {addItem} = useContext(MyContext);



const onAdd = (quantity) => {
  setQuantity(quantity);
  addItem(item, quantity);
  
};

  return (
    <article>
      <div className='itemDetail'>
        <img className='imgDetail' src={item.imageUrl} alt="" />
        <div>
            <h4>{item.title}</h4>
            <h5>{item.author}</h5>
            <Rate allowHalf count={5} value ={item.rating?.rate}/>
            <span>Reviews : {item.rating?.count}</span>
            <p>£ {item.price}</p>
            </div>
            <div>
            {quantity === 0 ? (
              <ItemCount stock={item.stock} onAdd={onAdd} />
            ) : (
              <Link to="/cart" className='linkToCart'>See the basket</Link>
            )}
            
        </div>
        </div>
        <div className='itemDescription'>
          
            <h6>Synopsis</h6>
            <br />
            
            
            <p>{item.description}</p>
            
        </div>
        



    </article>
  )
}

export default ItemDetail;