import React, { useState } from "react";


export const MyContext = React.createContext();


export const MyContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


const addItem = (item, quantity) => {
    isInCart(item.id)
    ? addQuantity(item, quantity)
    : setCart([...cart, {...item, quantity}]);
};

const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
};

const clear = () => {
    setCart([]);
};

const isInCart = (id) => {
    return cart.some((product) => product.id === id);
};

const addQuantity = (item, quantity) => {
    const newProducts = cart.map((product) => {
        if (product.id === item.id) {
            const newProduct = {
                ...product,
                quantity: product.quantity + quantity
            };
            return newProduct;
        } else {
            return product;
        }
    });
    setCart(newProducts);
};

const totalCalculate = () => {
    let basketTotal = 0;
    cart.forEach((product) => {
        basketTotal += product.price * product.quantity;
    });
    return basketTotal;
};

const itemsTotalCalculate = () => {
    let itemsTotal = 0;
    cart.forEach((product) => {
        itemsTotal += product.quantity;
    });
    return itemsTotal;
};

return (
<MyContext.Provider
    value ={{
        cart,
        addItem,
        removeItem,
        clear,
        totalCalculate,
        itemsTotalCalculate,   
    }}
    >
        {children}
    </MyContext.Provider>
    );
};

