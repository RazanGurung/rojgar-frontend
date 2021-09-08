import React, {useState} from 'react';
import "./contact.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
toast.configure()

function Contact() {
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [message, setMessage] = useState()

    const sendMessage = () =>{
        const data = {
            firstname:firstname,
            lastname:lastname,
            email:email,
            phone:phone,
            message:message
        }
        axios.post("https://rojgar-backend.herokuapp.com/contact/us", data).then((res=>{
            toast.error("Message Sent Successfully");
            window.location.href="/contact"
        }))
        .catch(err=>{
            toast.error("Unable to Sent Message");
        })
    }
    return (
        <div className="contact">
            <h1>Contact Us</h1> 
            <p>Any questions or remarks? write a message.</p>
            <div id="contact-container">
                <div className="contact-info">
                    <h4>Contact Information</h4>
                    <p>Fill up the form and click send.</p>
                    <div className="icon-text">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span>9844478291</span>
                    </div>
                    <div className="icon-text">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <span>Logistic@gmail.com</span>
                    </div>
                    <div className="icon-text">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <span>baluwatar-4, kathmandu, Nepal</span>
                    </div>
                    <div className="social-media">
                        <a href="" className="icon-circle">
                            <i class="fab fa-facebook-f" aria-hidden="true"></i>
                        </a>
                        <a href="" className="icon-circle">
                            <i class="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="" className="icon-circle">
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="" className="icon-circle">
                            <i class="fab fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="form">
                    <div className="col">
                        <div className="contact-form-group">
                            <label>First Name</label>
                            <input type="text" placeholder="First Name" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
                        </div>
                        <div className="contact-form-group">
                            <label>Last Name</label>
                            <input type="text" placeholder="Last Name" value={lastname} onChange={(e)=>setLastname(e.target.value)} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="contact-form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="contact-form-group">
                            <label>Phone no </label>
                            <input type="tel" placeholder="Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="contact-form-group">
                            <label>message</label>
                            <textarea placeholder="Your Message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="contact-form-group right">
                            <button type="submit" onClick={sendMessage}>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
