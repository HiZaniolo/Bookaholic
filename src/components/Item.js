import React from 'react'

import { Card, Button } from 'react-bootstrap'

const Item = ({ item }) => {
  return (
    <section className='cardProducts'>
          <div className='cardBook col-lg-3 text-center'>
          <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={item.imageUrl} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <h6>{item.author}</h6>
              <p>Price : {item.price}</p>
            <Button variant="primary">Buy!</Button>
            </Card.Body>
          </Card>
          </div> 
    </section>
  )
}

export default Item;
