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
        <img src={item.imageUrl} alt="" />
        <div>
            <h2>{item.title}</h2>
            <h5>{item.author}</h5>
            <Rate allowHalf count={5} value ={item.rating?.rate}/>
            <p>{item.price}</p>
            {quantity === 0 ? (
              <ItemCount stock={item.stock} onAdd={onAdd} />
            ) : (
              <Link to="/cart">See the basket</Link>
            )}
        </div>
        <div>
            <h6>Description</h6>
            <p>{item.description}</p>
        </div>
        



    </article>
  )
}

export default ItemDetail;