import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_axr53no', 'template_o1b434b', form.current, 'kj1HSK0WmJjFgz2xT')
      .then((result) => {
          console.log(result.text);
          if (result.text==='OK') {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Message successfully send',
                showConfirmButton: false,
                timer: 1500
              })
          }
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div id='contact' className='px-4 md:px-40 py-5  text-white'>
            <h1 className='text-center text-3xl font-bold '>Contact me to <span className=' text-orange-400'>Hire</span></h1>
            <hr className='border-2 border-neutral-400 md:mx-56 md:my-10 my-4' />
            <form className='gap-2 flex flex-col text-lg md:px-56' ref={form} onSubmit={sendEmail}>
                
      <label>Name</label>
      <input required className='rounded-md px-2 py-2 text-orange-600' placeholder='Enter your name' type="text" name="user_name" />
      <label>Email</label>
      <input required className='rounded-md px-2 py-2 text-orange-600' placeholder='Enter your email' type="email" name="user_email" />
      <label>Message</label>
      <textarea required className='text-orange-600 rounded-md px-2 py-2' placeholder='Enter your message' name="message" />
      <input className=' p-3 my-2 rounded-lg bg-orange-600 ' type="submit" value="Send" />
    </form>
        </div>
    );
};

export default Contact;