

import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import orderComplete from '../assets/orderComplete.json';



const Checkout = () => {
  

  const options = {
    animationData: orderComplete,
    autoplay: true,
    loop: true,
    style:{
      width: '700px',
    }
  };
    
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
      }}
      >
      
      <Lottie {...options}/>
        <Link to="/" className='ckeckoutLink'>Home</Link>

      </div>

    
  )
}

export default Checkout