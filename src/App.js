import NavBarEx from "./components/NavBarEx"

import Main from "./components/Main"
import Footer from "./components/Footer"

import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";



const App = () => {
    return (
        <BrowserRouter>
            <NavBarEx />
            <Main />
            <Footer />
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App