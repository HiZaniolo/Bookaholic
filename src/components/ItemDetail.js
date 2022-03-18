import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
const [quantity, setQuantity] = useState(0);
let navigate = useNavigate();

const onAdd = (quantity) => {
  setQuantity(quantity);
  setTimeout(() => {
    navigate('/basket');
  }, 1500);
};

  return (
    <article>
        <img src={item.imageUrl} alt="" />
        <div>
            <h2>{item.title}</h2>
            <h5>{item.author}</h5>
            <p>{item.price}</p>
        </div>
        <div>
            <h6>Description</h6>
            <p>{item.description}</p>
        </div>
        <ItemCount stock={item.stock} onAdd={onAdd} />

    </article>
  )
}

export default ItemDetail;