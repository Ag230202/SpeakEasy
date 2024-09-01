import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Communication = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
  
    console.log('Form data:', form.current);
  
    emailjs
      .sendForm('service_50nbw88', 'template_97wpuvn', form.current, {
        publicKey: 'mxgPopQIg6O86G8aD',
      })
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          toast.success('Email sent successfully!');
        },
        (error) => {
          console.log('Error sending email:', error);
          toast.error('Error sending email. Please try again.');
        },
      );
      e.target.reset()
  };

  return (
    <section style={{ padding: "4rem 0", backgroundColor: "#f7f7f7" }}>
    <div className="container-communication" style={{
      maxWidth: "800px",
      margin: "0 auto",
      padding: "2rem",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
    }}>
      <h2 className='--text-center' style={{ fontSize: "2.5rem", fontWeight: "600", marginBottom: "2rem" }}>Chat with Therapist 
      </h2>
      <form ref={form} onSubmit={sendEmail}
        className='--from-control --card --flex-center --dir-column '
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem"
        }}>
          <input type="text" 
          placeholder='Full Name' 
          name='user_name'  required
          style={{
            width: "100%",
            padding: "1rem",
            marginBottom: "1rem",
            border: "1px solid #ddd",
            borderRadius: "6px",
            backgroundColor: "#f2f2f2" // added this line
          }}/>

          <input type="email" 
          placeholder='Email' 
          name='user_email'  required
          style={{
            width: "100%",
            padding: "1rem",
            marginBottom: "1rem",
            border: "1px solid #ddd",
            borderRadius: "6px",
            backgroundColor: "#f2f2f2" // added this line
          }}/> 

          <input type="text" 
          placeholder='Subject' 
          name='subject'  required
          style={{
            width: "100%",
            padding: "1rem",
            marginBottom: "1rem",
            border: "1px solid #ddd",
            borderRadius: "6px",
            backgroundColor: "#f2f2f2" // added this line
          }}/>

         
          <textarea name="message" 
           cols="30" rows="10"
           style={{
            width: "100%",
            padding: "1rem",
            marginBottom: "1rem",
            border: "1px solid #ddd",
            borderRadius: "6px",
            height: "150px",
            resize: "vertical"
          }}></textarea>
           <div style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
marginBottom: "1rem"
}}>
<a href="https://meet.google.com/" target="_blank" rel="noopener noreferrer"  className='--btn --btn-primary'
  style={{
    display: "inline-block",
    backgroundColor: "#0067ff",
    color: "#fff",
    padding: "1rem 2rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginRight: "1rem"
  }}>Join Google Meet</a>
<button type='submit' 
  className='--btn --btn-primary'
  style={{
    display: "inline-block",
    backgroundColor: "#0067ff",
    color: "#fff",
    padding: "1rem 2rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }}>Send Message</button>
</div>
          
      </form>
    </div>
    <ToastContainer />
  </section>
  )
};

export default Communication;