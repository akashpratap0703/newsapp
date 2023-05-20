import React from 'react'
import '../css/contact.css' 
export default function Contact() {
  const submitform= ()=>{}
// var scriptURL = 'https://script.google.com/macros/s/AKfycbyEnMW6vdeaBZ5iFEQ08OSLmwhRhfY_GlKYa5ndBF5NIWC_mCr1piQLg9Qhzbh2U6geIQ/exec'
// var form = document.forms['submit-to-google-sheet']
// var msg = document.getElementById("msg")
// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => {
//         msg.innerHTML = "Message sent successfully"
//         setTimeout(function(){
//             msg.innerHTML = ""
//         },5000)
//         form.reset()
//     })
//     .catch(error => console.error('Error!', error.message))
// })
  return (
    <div>
      <div id='contact'>
        <div className='container'>
            <div className='row'>
                <div className='contact-left'>
                    <h1 className='sub-title'>Contact Me</h1>
                    <p><i className='fas fa-paper-plane'></i>akashpratap0703@gmail.com</p>
                    <p><i className='fas fa-phone-square-alt '></i>8299821512</p>
                    <div className='social-icons'>
                        <a href="/"><i className='fab fa-facebook'></i></a>
                        <a href="/"><i className='fab fa-twitter-square'></i></a>
                        <a href="https://www.instagram.com/pr_tapakash/" target="_blank"><i className='fab fa-instagram'></i></a>
                        <a href="https://www.linkedin.com/in/akash-pratap-599006202/" target="_blank"><i className='fab fa-linkedin'></i></a>
                    </div>
                    <a href="../images/Resume.pdf" download className='btn btn2'>Download Resume</a>
                </div>
                <div className='contact-right'>
                    <form name='submit-to-google-sheet'>
                        <input type='text' name='Name' placeholder='Your Name' required />
                        <input type='email' name='Email' placeholder='Your Email' required />
                        <textarea name='Message' rows='6' placeholder='Your Message' required />
                        <button type='submit' className='btn btn2' onClick={()=>submitform()}>Submit</button>
                    </form>
                    <span id="msg"></span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
