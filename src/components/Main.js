import React from 'react'
import { Container } from 'react-bootstrap';

import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer"
import { Route, Routes } from 'react-router-dom';
import CartWidget from './CartWidget';


const Main = () => {
  return (
    <Container as="main" fluid>
        <Routes > 
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/detail/:id' element={<ItemDetailContainer />} />
        <Route path='/basket' element={<CartWidget/>} />
        </ Routes> 
    </Container>
  );
}

export default Main