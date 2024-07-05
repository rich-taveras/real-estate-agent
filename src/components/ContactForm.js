// src/components/ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css'; // Importa el archivo CSS creado

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Procesar el formulario
    console.log(formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Mensaje:</label>
        <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
