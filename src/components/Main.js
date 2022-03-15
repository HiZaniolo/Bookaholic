import React from 'react'
import { Container } from 'react-bootstrap';

import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer"


const Main = () => {
  return (
    <Container as="main" fluid>
        <ItemListContainer />   
        <ItemDetailContainer /> 
    </Container>
  )
}

export default Main