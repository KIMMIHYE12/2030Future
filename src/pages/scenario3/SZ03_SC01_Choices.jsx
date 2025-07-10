import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const SZ03_SC01_Choices = () => {
  const navigate = useNavigate();

  const handleClickYes = () => {
    navigate("/scenario3/sc02");
  };
  const handleClickNO = () => {
    navigate("/scenario3/sc03");
  };
  return (
    <>
      <Header title='Interaktionsseite' />
      <Container>
        <div className='con_menu'>
          <h3>Jetzt sind Sie Klaus!</h3>
          <h2>Möchten Sie jetzt das Geld überweisen?</h2>
          <div className='buttons'>
            <button onClick={handleClickYes}>Ja</button>
            <button onClick={handleClickNO}>Nein</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SZ03_SC01_Choices;
