import "./Contact.css"
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { useState } from "react";
import "animate.css"




function Contact() {
        const formInitialDetails = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
      
        }
        
      
        const [formDetails, setFormDetails] = useState(formInitialDetails);
        const [buttonText, setButtonText] = useState('Send');
        const [status, setStatus] = useState({});
      
        const onFormUpdate = (category, value) => {
            setFormDetails({
              ...formDetails,
              [category]: value
            })
        }
      
        const handleSubmit = async (e) => {
      
          e.preventDefault();
      
          setButtonText("Sending...");
          let response = await fetch("http://localhost:5001n/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
          });
      
          setButtonText("Send");
          let result = await response.json();
      
          setFormDetails(formInitialDetails);
          if (result.code === 200) {
            setStatus({ success: true, message: 'Message sent successfully'});
          } else {
            setStatus({ success: false, message: 'Something went wrong, please try again later.'});
          }
        };
  return (
    <div className="contact">
      <div className="contact-container-outer">
        <div className="contact-container">
          <div className="contact-img-container">
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn animate__slower	2s" : ""} id="connect-image"  src='https://i.pinimg.com/564x/bb/6a/8f/bb6a8fc5f8cbc5d48f1d6e40d0bce8ee.jpg' alt="Contact Us"/>
              }
            </TrackVisibility>
          </div>
          <div className="form-container">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn animate__slower	3s" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <section className="form-grid">
                    <div>
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </div>
                    <div>
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </div>
                    <div>
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </div>
                    <div>
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </div>
                    <div className="form-message">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <div className="form-button"> 
                        <button  type="submit"><span>{buttonText}</span></button>
                   </div>
                    </div>
                 
                    {  
                      status.message &&
                      <div>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </div>
                    }
                  </section>
                </form>
              </div>}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
