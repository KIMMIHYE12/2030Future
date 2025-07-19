import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";

const Kontakt = () => {
  return (
    <div>
      <Header title='Kontakt' />
      <Container>
        <div className='con_menu'>
          <h3>sapiens0612@gmail.com</h3>
          <h2>
            Klaus hat gerade eine Benachrichtigung von KI-Assistent erhalten.
            Worum könnte es gehen? Wählen Sie ein Thema aus, danach können Sie
            das passende Szenario-Video starten.
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default Kontakt;
