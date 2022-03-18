import React from 'react'

import { Card, Button } from 'react-bootstrap'
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


// const ItemCount = () => {

//   const stock = 6
//   const initial = 1

//   let [count, setCount] = useState(initial)

//   const onAdd = () => {
//     if (count < stock){
//       setCount(count + 1)
//     }
//   }

//   const onDelete = () => {
//     if (count > initial)
//     setCount(count - 1)
//   }


  return (
    <div className='Card'>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title className='text-center' >Plant</Card.Title>
                <p>Cantidad: {number}</p>
                <Button onClick={substract} variant="danger" className='card_btn'>-</Button>
                <Button onClick={add} variant="success" className='card_btn' >+</Button>
                <div>
                <Button onClick={handleAdd} disabled={number === 0} className='card_btn1' >Add</Button>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ItemCount