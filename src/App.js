// const App = () => "Hola Mundo con app import"

// export default App

// import React from 'react' 

import NavBarEx from "./components/NavBarEx"
import ItemListContainer from "./components/ItemListContainer";
import Main from "./components/Main"
import Footer from "./components/Footer"

import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
    return (
    <>
        <NavBarEx />
        <ItemListContainer />
        <Main />
        <Footer />
    </>
    )
}

export default App