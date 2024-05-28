import React from 'react';
import './Contact.css';
function Contact()
{
    return(
        <>
        <div>
        <div className="main-container" id='contact'>
      <div className="contact-info">
        <h2>Contact Info</h2>
        <p><i className="fas fa-map-marker-alt"></i> 1234 Street Name, City, State, 12345</p>
        <p><i className="fas fa-phone"></i>+91-8788014518</p>
        <p><i className="fas fa-envelope"></i> yashnehete1@example.com</p>
        <a href="https://github.com/ynehete" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/yashnehete" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="phone" placeholder="Phone Number" required />
          <textarea name="description" placeholder="Work Description" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
        </div>
        </>

    );
}
export default Contact;