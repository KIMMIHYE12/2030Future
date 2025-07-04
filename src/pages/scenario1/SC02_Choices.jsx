import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const SC02_Choices = () => {
  const navigate = useNavigate();

  const handleClickYes = () => {
    navigate("/scenario1/sc03");
  };
  const handleClickNO = () => {
    navigate("/scenario1/sc05");
  };

  return (
    <>
      <Header title='Interaktionsseite' />
      <Container>
        <div className='con_menu'>
          <h3>Jetzt sind Sie Klaus!</h3>
          <h2>Möchten Sie Anna eine Nachricht schicken?</h2>
          <div className='buttons'>
            <button onClick={handleClickYes}>Ja</button>
            <button onClick={handleClickNO}>Nein</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SC02_Choices;
