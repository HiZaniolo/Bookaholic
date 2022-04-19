import React, { useState } from 'react'

import swal from 'sweetalert';

function FormContact() {

    const [form, setForm] = useState({name: '', email: '', message: ''});
    
    const handleChange = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value,
        });
    };

    

    const showConfirmation = (e) => { 
        e.preventDefault(); 
        swal({
            title: "Thank you!",
            text: "We will contact you soon",
            icon: "success",
            button: "OK",
            timer: 3000
            
        }); 
        setForm({name: '', email: '', message: ''}); 
         
        
    }

    
    
    

    return (
        <div className='formContact'>
            <form
            onSubmit={showConfirmation}
            >
         
             <input
             className='input'
             value={form.name}
             name='name' 
             type="text"
             placeholder='Name'
             onChange={handleChange} 
             />   
             <input 
             className='input'
             value={form.email}
             name='email'
             type="text"
             placeholder='Email'
             onChange={handleChange}
             />
             
             <input         
             className='inputMessage'  
             value={form.message}
             name='message'
             type="text"
             placeholder='Message'
             onChange={handleChange}
              />

            
            <button className='btnSubmit'>Submit</button>
            
            </form>
            
            
        </div>
            );
}


export default FormContact;
