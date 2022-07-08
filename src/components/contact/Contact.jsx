import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_1jcrbub",
      "template_ypxjnxq",
      form.current,
      "Rw5hndb6FpUcYrGIV"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>piyushcool116@gmail.com</h5>
            <a href="mailto:piyushcool116@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>piyush016</h5>
            <a href="https://m.me/piyush016" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91-8105665602</h5>
            <a
              href="https://api.whatsapp.com/send?phone=8105665602"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            id=""
            autoComplete="off"
          />
          <input
            type="search"
            name="email"
            placeholder="Your Email"
            required
            id=""
            autoComplete="off"
          />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your Message"
            required
            autoComplete="off"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
