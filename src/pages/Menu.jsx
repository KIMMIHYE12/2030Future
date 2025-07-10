import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Menu() {
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate("/scenario1/sc01");
  };
  const handleClick2 = () => {
    navigate("/scenario2/sc01");
  };
  const handleClick3 = () => {
    navigate("/scenario3/sc01");
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
            <button onClick={handleClick1}>Geburtstag von Anna</button>
            <button onClick={handleClick2}>Urlaubsplanung</button>
            <button onClick={handleClick3}>Verdächtiger Anruf</button>
          </div>
        </div>
      </Container>
    </div>
  );
}
