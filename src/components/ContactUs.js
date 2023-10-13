import {React, useRef} from 'react'
import { Box, Stack, Typography } from '@mui/material';
import emailjs from '@emailjs/browser';

const ContactUs = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_ki5b6ij', 'template_43e8utb', form.current, 'top1LR8VHBn9B118Z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <Box id="contact">
      <Stack className="contact-container" >
        <Typography variant='h2' color="#fff" className='contact-heading'>Contact Me</Typography>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" placeholder="Full Name" name='user_name' className="contact-inputs" required/>
            <input type="email" placeholder="Email" name='user_email' className="contact-inputs" required/>
            <input type="text" placeholder="Subject" name='subject' className="contact-inputs" required/>
            <textarea name="message" cols="30" rows="10" placeholder="Type your message here"></textarea>
            <button type="submit" className="contact-button">Send Message</button>
          </form>
      </Stack>
    </Box>
  )
}

export default ContactUs