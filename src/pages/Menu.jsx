import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Menu() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/scenario1/sc01");
  };

  return (
    <div>
      <Header title='Szenario auswählen' />
      <Container>
        <div className='con_menu'>
          <h3>Bitte wählen Sie ein Szenario aus.</h3>
          <h2>
            Klaus hat gerade eine Benachrichtigung von KI-Assistent erhalten.
            Worum könnte es gehen? Wählen Sie ein Thema aus danach können Sie
            das passende Szenario-Video starten.
          </h2>
          <div className='buttons'>
            <button onClick={handleClick}>Geburtstag von Anna</button>
            <button>Urlaubsplanung</button>
            <button>Verdächtiger Anruf</button>
          </div>
        </div>
      </Container>
    </div>
  );
}
