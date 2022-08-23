import React from 'react'
import { Fade } from 'react-reveal'
import './Fourth.css'
import emailjs from 'emailjs-com'

export default function Fourthpage() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'xusan_template', e.target, 'MO6BfQu-EBvE22zSP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <>
        <div className='fourthDiv'>
            <Fade bottom >
                <h1 className='header'>Contact With Me</h1>
            </Fade>
            <div className='inputs'>
                <form onSubmit={sendEmail}>
                <Fade top>
                <input className='input1' type='email' name='email' placeholder='...@gmail.com'/>
                </Fade>
                <Fade left>
                <input className='input2' type='number' name='contact' placeholder='contact' /> 
                </Fade>
                <Fade right>
                <input className='input3' type='text' name='name' placeholder='name...'/>
                </Fade>
                <Fade bottom>
                <input className='input4' type='text' name='message' placeholder='message...'/>
                </Fade>
                <button >Send</button>
                </form>
                
            </div>            
        </div>
    </>
  )
}
