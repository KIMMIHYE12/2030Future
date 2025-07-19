import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";

const Kontakt = () => {
  return (
    <div>
      <Header title='Kontakt' />
      <Container>
        <div className='con_menu con_page'>
          <h3>Schreiben Sie mir eine Nachricht</h3>
          <h2>
            Ihre Rückmeldung hilft mir dabei, mein Projekt weiterzuentwickeln.
            <br />
            Ich freue mich über Ihre Gedanken und Anregungen.
          </h2>
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default Kontakt;
