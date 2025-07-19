import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_3frp06b", "template_1kn6hbb", form.current, {
        publicKey: "bZjeJKlXoDfqjGQUa",
      })

      .then(
        () => {
          alert("Nachricht erfolgreich gesendet!");
        },
        (error) => {
          alert("Senden fehlgeschlagen. Bitte versuchen Sie es erneut.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className='mb-3' controlId='formSubject'>
        <Form.Label>Betreff</Form.Label>
        <Form.Control
          type='text'
          name='title'
          placeholder='Titel der Nachricht'
          required
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formName'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='text'
          name='name'
          placeholder='Dein Name'
          required
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formEmail'>
        <Form.Label>E-Mail</Form.Label>
        <Form.Control
          type='email'
          name='email'
          placeholder='deine@email.de'
          required
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formMessage'>
        <Form.Label>Nachricht</Form.Label>
        <Form.Control as='textarea' name='message' rows={4} required />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Senden
      </Button>
    </Form>
  );
};

export default ContactForm;
