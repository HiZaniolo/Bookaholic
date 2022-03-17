import React from 'react'

const ItemDetail = ({ item }) => {
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

    </article>
  )
}

export default ItemDetail;