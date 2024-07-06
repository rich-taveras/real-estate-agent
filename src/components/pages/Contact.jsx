import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  text-align: center;
`;

const Form = styled.form`
  max-width: 600px;
  margin: auto;
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h2>Contact Me</h2>
      <Form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
