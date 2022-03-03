import React from 'react'

import { Card, Button } from 'react-bootstrap'
import { useState } from 'react'


const ItemCount = () => {

  const stock = 6
  const initial = 1

  let [count, setCount] = useState(initial)

  const onAdd = () => {
    if (count < stock){
      setCount(count + 1)
    }
  }

  const onDelete = () => {
    if (count > initial)
    setCount(count - 1)
  }


  return (
    <div className='Card'>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title className='text-center' >Plant</Card.Title>
                <p>Cantidad: {count}</p>
                <Button onClick={onDelete} variant="danger" className='card_btn'>Quitar</Button>
                <Button onClick={onAdd} variant="success" className='card_btn' >Agregar</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ItemCount