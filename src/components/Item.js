import React from 'react'

export default function Item({item}) {
  return (
    <div>
        <h3>{item.title}</h3>
        <img src={item.imageUrl} alt="img1" />
        <h4>{item.price}</h4>
    </div>
  )
}
