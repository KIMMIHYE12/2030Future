import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SC01_Choices = () => {
  const navigate = useNavigate();

  const handleClickYes = () => {
    navigate("/scenario1/sc02");
  };
  const handleClickNO = () => {
    navigate("/scenario1/sc04");
  };

  return (
    <div className='con_menu'>
      <Container>
        <h2>Möchten Sie Anna Geld überweisen?</h2>
        <div className='buttons'>
          <button onClick={handleClickYes}>Ja</button>
          <button onClick={handleClickNO}>Nein</button>
        </div>
      </Container>
    </div>
  );
};

export default SC01_Choices;
