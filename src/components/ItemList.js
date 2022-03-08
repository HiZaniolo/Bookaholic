import React from 'react'

import Item from './Item'


export default function ItemList({items}) {
  return (
    <section>
        {items.map(item => {
            return (
                <div>
                    <Item
                        key={item.id}
                        item={item}
                    />
                </div>
            )
        })}

    </section>
  )
}
