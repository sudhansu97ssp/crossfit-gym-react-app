import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";
import "../Contact.css";
import { FaEnvelope, FaMapMarked, FaClock } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ne1v6jo",
        "template_uuqq0ok",
        e.target,
        "LIgu3GReGxec6UQRT"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <>
      <section id="page-header">
        <h4>LEAVE A MESSAGE : We love to hear from You!!!</h4>
      </section>
      <section id="contact-Details" class="section-p1">
        <div class="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today.</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <FaMapMarked />
              <p> Electronic city Phase-II, Bengaluru, Karnataka</p>
            </li>
            <li>
              <FaEnvelope />
              <p> sudhansu.spati96@gmail.com</p>
            </li>
            <li>
              <FiPhoneCall />
              <p> +91-7008538962</p>
            </li>
            <li>
              <FaClock />
              <p style={{ fontWeight: 100 }}>
                Monday to Sunday 9.00AM - 10.00PM
              </p>
            </li>
          </div>
        </div>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15559.909964137161!2d77.67277911679524!3d12.844730275869994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6cf2ec4e84f9%3A0x786cf35a4e747fd9!2sElectronic%20City%20Phase%20II%2C%20Electronic%20City%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1655656010061!5m2!1sen!2sin"
            stylewidth="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <div className="Form-header">
        <span className="center">LEAVE A MESSAGE</span>
        <h2>GET IN TOUCH</h2>
      </div>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <Form onSubmit={sendEmail}>
              <Form.Label>Name</Form.Label>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Enter Your Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasictextarea"
              >
                <Form.Control
                  type="text"
                  name="message"
                  value={message}
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-6"
                style={{ background: "rgb(67, 185, 127)" }}
                type="submit"
              >
                Send
              </Button>
            </Form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
