import React from 'react'
import { Container } from 'react-bootstrap';

import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer"
import { Route, Routes } from 'react-router-dom';
import CartWidget from './CartWidget';


const Main = () => {
  return (
    <Container as="main" fluid>
      <ItemListContainer />   
      <ItemDetailContainer /> 
    </Container>
  );
}

export default Main