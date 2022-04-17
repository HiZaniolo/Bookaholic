import React from 'react'
import { useState } from 'react'

const ItemCount = ({onAdd}) => {
    const stock = 6
    const initial = 1

    const [number, setNumber] = useState(initial);

    const add = () => {
      if (number < stock){
      setNumber(number + 1)
      }
    };


    const substract = () => {
      if (number > initial){
      setNumber(number - 1)
      }
    };


    const handleAdd = () => {
      onAdd(number)
    };


  return (
    <div className='count'>
        
                
                <h4 className='quantityCount'>{number}</h4>
                
                <button onClick={substract} className='card_btn'>-</button>
                <button onClick={add} className='card_btn' >+</button>
                <div>
                <button onClick={handleAdd} disabled={number === 0} className='card_btn1' >Add to basket</button>
                </div>
            
        
    </div>
  )
}

export default ItemCount