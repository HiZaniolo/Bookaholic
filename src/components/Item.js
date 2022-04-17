import React from 'react'

import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <section className='cardProducts'>
          <div className='cardBook text-center'>
          <Card style={{ width: '10rem', height:'14rem'}}>
            <Card.Img className='cardImg' style={{width: '10rem', height:'14rem'}} variant="top" src={item.imageUrl} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <h6>{item.author}</h6>
              <p>£ {item.price}</p>
              
            </Card.Body>
            <div>
              <Link to={`/detail/${item.id}`} className='linkCard' >See details</Link>
              </div>
          </Card>
          </div> 
    </section>
  )
}

export default Item;
