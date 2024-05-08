import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us A Message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, question, and suggestions are
          important to us as we strive to provide exceptional service to our
          institution community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            ismailomotayo001@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +2347063885061
          </li>
          <li>
            <img src={location_icon} alt="" />
            77 Sabo Main market, Ore, Ondo state
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Mobile Number"
            required
          />
          <label>Write Your Message Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Message <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>Sending</span>
      </div>
    </div>
  );
};

export default Contact;
