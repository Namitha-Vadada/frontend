import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {

    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(contact);

    alert("Thank you for contacting us!");

  };

  return (
    <>
      <Navbar />

      <div className="contact-container">

        <h1>Contact Us</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={contact.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={contact.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Enter your message"
            value={contact.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

      <Footer />
    </>
  );
}

export default Contact;