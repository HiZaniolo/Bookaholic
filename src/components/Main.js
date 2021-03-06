import React from 'react'
import { Container} from 'react-bootstrap';

import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer"
import { Route, Routes } from 'react-router-dom';
import CartWidget from './CartWidget';
import Cart from './Cart';
import { MyContext } from '../context/CartContext';
import FormContact from './FormContact';
import Checkout from './Checkout';



const Main = () => {
  return (
    <Container as="main" fluid>
        <Routes > 
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/detail/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/form' element={<FormContact/>} />
        <Route path='/checkout' element={<Checkout/>} />
        </ Routes> 
    </Container>
  );
}

export default Main