import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_chjqaqj', 'template_7x8z6tg', form.current, {
        publicKey: 'J4nO7z6QZ6sgdPIZo',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
        <section className="py-16 transition-colors bg-background/95 bg-card rounded-lg shadow-md" id="Contact">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
                <div className="w-full md:w-1/2 max-w-lg">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-glow">Contact Me</h2>
                    </div>
                   <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4 p-4 bg-card rounded-lg shadow-md' autoComplete='off'>
                    <label>Name</label>
                    <input type="text" name="user_name" className="border-1 rounded-lg py-2" placeholder='Name'/>
                    <label>Email</label>
                    <input type="email" name="user_email" className="border-1 rounded-lg py-2" placeholder='Email'/>
                    <label>Message</label>
                    <textarea name="message" className="border-1 rounded-lg justify-top overflow-y-hidden" placeholder='Your Message :D '/>
                    <input type="submit" value="Send" className='button bg-primary border-primary py-8 ' />
                </form>
                </div>
                <div className="w-full h-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                    <div className="  h-full rounded-lg flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                    <img src="./projects/download.jpg" alt="Contact Placeholder" className='w-full h-full object-cover rounded-lg md:w-96 md:h-96 justify-center' />
                    </div>
                </div>
            </div>
        </section>
    );
}   