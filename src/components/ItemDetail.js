import React from 'react'

const ItemDetail = ({ item }) => {
  return (
    <article>
        <img src={item.imageUrl} alt="" />
        <div>
            <h3>{item.title}</h3>
            <h5>{item.author}</h5>
            <p>{item.price}</p>
        </div>
        <div>
            <h6>{item.category}</h6>
            <p>{item.description}</p>
        </div>

    </article>
  )
}

export default ItemDetail